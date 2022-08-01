import React,{ useState} from 'react';
import CommentForm from "./CommentForm";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Comment = ({
  comment,
  replies,
  setActiveComment,
  activeComment,
  updateComment,
  deleteComment,
  addComment,
  parentId = null,
  currentUserId,
}) => {
  const isEditing =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "editing";
  const isReplying =
    activeComment &&
    activeComment.id === comment.id &&
    activeComment.type === "replying";
  const fiveMinutes = 300000;
  const timePassed = new Date() - new Date(comment.createdAt) > fiveMinutes;
  const canDelete =
    currentUserId === comment.userId && replies.length === 0 && !timePassed;
  const canReply = Boolean(currentUserId);
  const canEdit = currentUserId === comment.userId && !timePassed;
  const replyId = parentId ? parentId : comment.id;
  const createdAt = new Date(comment.createdAt).toLocaleDateString();
  const [vote, setVote] = useState(null);

  return (
    <div key={comment.id} className="comment">
      <div className="comment-image-container">
        <div className=" p-2 ps-1  pb-1 mb-sm-0 pb-sm-0  col-1     ">
          <Avatar
            className="bg-linear  "
            // alt={logUser.username}
            // src={logUser.profile_pic.public_url}
            style={{
              // boxShadow: "0px 5px 10px black",
              transform: "scale(1.2)",
              width: 30,
              height: 30,
            }}
          />
        </div>
      </div>
      <div className="comment-right-part">
        <div className="comment-content d-flex justify-content-between">
          <div className="comment-author text-white">{comment.username}</div>
          <div>{createdAt}</div>
        </div>
        {!isEditing && (
          <div className="bg-white  p-4 rounded-3 w-100">
            <div className="comment-text text-dark">{comment.body}</div>
          </div>
        )}
        {isEditing && (
          <CommentForm
            submitLabel="Update"
            hasCancelButton
            initialText={comment.body}
            handleSubmit={(text) => updateComment(text, comment.id)}
            handleCancel={() => {
              setActiveComment(null);
            }}
          />
        )}
        <div className="comment-actions d-flex justify-content-end">
          {canReply && (
            <div
              className="comment-action text-white"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "replying" })
              }
            >
              <KeyboardReturnIcon
                className="cursor-pointer mb-3 mb-sm-2 white pb-1"
                style={{
                  fontSize: "27px",
                  filter: " drop-shadow(0px 0px 5px #0000005e)",
                }}
              />
            </div>
          )}

          {/* 
          -----------------This code is for update comment in idea section---------------------
          
          {canEdit && (
            <div
              className="comment-action text-white"
              onClick={() =>
                setActiveComment({ id: comment.id, type: "editing" })
              }
            >
              <ThumbUpIcon
                className="cursor-pointer mb-3 mb-sm-2 white pb-1"
                style={{
                  fontSize: "23px",
                  filter: " drop-shadow(0px 0px 5px #0000005e)",
                }}
              />
            </div>
          )} */}


          <div
            className="comment-action text-white"
            onClick={() => setVote(vote + 1)}
          >
            <ThumbUpIcon
              className="cursor-pointer mb-3 mb-sm-2 white pb-1"
              style={{
                fontSize: "23px",
                filter: " drop-shadow(0px 0px 5px #0000005e)",
              }}
            />
            <p
              className="text-center"
              style={{
                fontSize: "10px",
                filter: " drop-shadow(0px 0px 5px #0000005e)",
              }}
            >
              {vote}
            </p>
          </div>
          {canDelete && (
            <div
              className="comment-action text-white"
              onClick={() => deleteComment(comment.id)}
            >
              <DeleteIcon
                className="cursor-pointer mb-3 mb-sm-2 white pb-1"
                style={{
                  fontSize: "25px",
                  filter: " drop-shadow(0px 0px 5px #0000005e)",
                }}
              />
            </div>
          )}
        </div>
        {isReplying && (
          <CommentForm
            submitLabel="Reply"
            handleSubmit={(text) => addComment(text, replyId)}
          />
        )}
        {replies.length > 0 && (
          <div className="replies">
            {replies.map((reply) => (
              <Comment
                comment={reply}
                key={reply.id}
                setActiveComment={setActiveComment}
                activeComment={activeComment}
                updateComment={updateComment}
                deleteComment={deleteComment}
                addComment={addComment}
                parentId={comment.id}
                replies={[]}
                currentUserId={currentUserId}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Comment;
