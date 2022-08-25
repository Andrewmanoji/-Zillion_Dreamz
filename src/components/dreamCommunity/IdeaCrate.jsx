import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { addIdeaCreate } from "../../slices/ideaCreate";
import { useHistory } from "react-router-dom";
import * as React from "react";
import DialogActions from "@mui/material/DialogActions";
import { endpoint, token, config } from "../../endpoint";
import axios from "axios";
import Avatar from "@mui/material/Avatar";

import Comment from "./IdeaComments/comment";
import CommentForm from "./IdeaComments/CommentForm";
import Comments from "./IdeaComments/Comments";
import {
  getComments as getCommentsApi,
  createComment as createCommentApi,
  updateComment as updateCommentApi,
  deleteComment as deleteCommentApi,
} from "./api";

const PurpleTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#a11cf9",
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function IdeaCrate({ setOpen, setPost,setComment,
  post,
  data,
  passdata,
  content, }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [events, setEvents] = useState(false);
  // const data = useSelector((state) => state.queryMaker);

  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );
  const getReplies = (commentId) =>
    backendComments
      .filter((backendComment) => backendComment.parentId === commentId)
      .sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
  const addComment = (text, parentId) => {
    {
      createCommentApi(text, parentId).then((comment) => {
        setBackendComments([comment, ...backendComments]);
        setActiveComment(null);
      });
      setPost(false);
    }
  };

  const updateComment = (text, commentId) => {
    updateCommentApi(text).then(() => {
      const updatedBackendComments = backendComments.map((backendComment) => {
        if (backendComment.id === commentId) {
          return { ...backendComment, body: text };
        }
        return backendComment;
      });
      setBackendComments(updatedBackendComments);
      setActiveComment(null);
    });
  };
  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {
      deleteCommentApi().then(() => {
        const updatedBackendComments = backendComments.filter(
          (backendComment) => backendComment.id !== commentId
        );
        setBackendComments(updatedBackendComments);
      });
    }
  };

  const handleCancel = () => {
    setActiveComment(null);
  };

  React.useEffect(() => {
    getCommentsApi().then((data) => {
      setBackendComments(data);
    });
  }, []);

  const Comments = ({ commentsUrl, currentUserId }) => {
    return (
      <div className="comments ">
        {/* <h3 className="comments-title">Comments</h3>
      <div className="comment-form-title">Write comment</div> */}
        {/* <CommentForm submitLabel="Post" handleSubmit={addComment} /> */}

        <div>
          {rootComments.map((rootComment) => (
            <Comment
              key={rootComment.id}
              comment={rootComment}
              replies={getReplies(rootComment.id)}
              activeComment={activeComment}
              setActiveComment={setActiveComment}
              addComment={addComment}
              deleteComment={deleteComment}
              updateComment={updateComment}
              currentUserId={currentUserId}
            />
          ))}
        </div>
      </div>
    );
  };

  const userQuery = useSelector((state) => state.ideaCreate);
  axios.get(`${endpoint}/question/61b8058c79c371bf4d7fe36c`, config);

  const [userData, setUserData] = useState({
    query: "",
  });

  // const passedData = data[passdata].content[content];
  // console.log(passedData);

  function handleSubmit() {
    let noofErrors = 0;
    Object.values(userData).forEach((val) => {
      if (val === "") {
        noofErrors++;
      }
    });

    const data = {
      text: userData.query,
      topic: 1,
    };
    if (noofErrors === 0) {
      dispatch(
        addIdeaCreate({
          query: userData.query,
        })
      );
      axios.post(`${endpoint}/question`, { data }, config);
    }
  }
  return (
    <>
      <div className="rounded-4 bg-purple vh-70  w-100 position-relative pt-1">
        <div>
          <>
            <div className="rounded-4 d-flex flex-column justify-content-evenly p-4 vh-70 w-100">
              <div className="d-flex  mb-2   align-items-start">
                {/* user name */}
                <div className="  ps-1 mb-3 pb-1 mb-sm-0 pb-sm-0 col-1     ">
                  <Avatar
                    className="bg-linear  "
                    // alt={logUser.username}
                    // src={logUser.profile_pic.public_url}
                    style={{
                      // boxShadow: "0px 5px 10px black",
                      transform: "scale(1.2)",
                      width: 50,
                      height: 50,
                    }}
                  />
                </div>

                <div className="d-flex flex-column ms-md-4 col-md-10  ms-lg-2  ms-5       col-lg-11  col-9 ms-4  p-0 pl-0">
                  {/* </StyledBadge> */}
                  <div className="d-flex flex-sm-row mt-0   ms-0  pe-sm-2 mb-sm-3    ">
                    <div
                      className="fw-bold pe-sm-2  d-flex "
                      style={{ fontSize: 18 }}
                    >
                      <span
                        className="fw-bold pe-sm-2  ms-1 pe-0 pe-sm-0 mb-sm-7 mt-0  "
                        style={{ fontSize: 18 }}
                      >
                        {/* {passedData.uname} */}
                      </span>
                      {/* {logUser.username} */}
                    </div>
                  </div>
                  {/* queries */}

                  <div className="bg-white  p-4 rounded-3 w-100">
                    {/* <p className="text-dark mb-0">{passedData.query}</p> */}
                  </div>
                </div>

                {/* 
              <IconButton
                aria-label="add"
                size="large"
                type="button"
                onClick={() => {
                  setPublicQueryId(data.id);
                  setaddOpen(true);
                }}
              >
                <LightbulbIcon fontSize="inherit" className="bg-purple" />
              
              </IconButton> */}
              </div>

              {/* <Dialog
          open={addopen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
        >
          <DialogContent>
            <Ideas data={data} publicQueryId={publicQueryId} />
          </DialogContent>
        </Dialog> */}
              {/* 
        <div className="d-flex justify-content-end">
          <PurpleTooltip title="Add Query" className="purple" placement="left">
            <IconButton
              aria-label="add"
              size="large"
              type="button"
              onClick={() => setOpen(true)}
            >
              <AddIcon fontSize="inherit" className="text-white" />
            </IconButton>
          </PurpleTooltip>
        </div> */}
            </div>

            {/* <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth={true}
      >
         <DialogContent>
         <IdeaCreate setOpen={setOpen} /> 
        </DialogContent>
      
      </Dialog> */}

            {/* <div>
              {rootComments.map((rootComment) => (
                <Comment
                  key={rootComment.id}
                  comment={rootComment}
                  replies={getReplies(rootComment.id)}
                  activeComment={activeComment}
                  setActiveComment={setActiveComment}
                  addComment={addComment}
                  deleteComment={deleteComment}
                  updateComment={updateComment}
                  currentUserId={currentUserId}
                />
              ))}
            </div> */}
          </>

          <div className="divide"></div>

          <div className="rounded-4  d-flex flex-column justify-content-evenly p-4 vh-90 w-100">
            <>
              {/* <div className="comments-container">
                {rootComments.map((rootComment) => (
                  <Comment
                    key={rootComment.id}
                    comment={rootComment}
                    replies={getReplies(rootComment.id)}
                    activeComment={activeComment}
                    setActiveComment={setActiveComment}
                    addComment={addComment}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                    // currentUserId={currentUserId}
                  />
                ))}
              </div>{" "} */}
              {post ? (
                <>
                  <div >
                    <CommentForm
                      submitLabel="Post"
                      handleSubmit={addComment}
                      hasCancelButton
                      handleCancel={() => {
                        setActiveComment(null);
                        setPost(false);
                      }}
                    />
                  </div>
                </>
              ) : (
                <Comments
                  commentsUrl="http://localhost:3004/comments"
                  currentUserId="1"
                />

                // <>
                //   {" "}
                //   {userQuery.map((val, index) => {
                //     if (val.query !== null) {
                //       return (
                //         <>
                //           <div>
                //             <div className="d-flex  mb-2   align-items-start">
                //               {/* user name */}
                //               <div className=" p-2 ps-1  pb-1 mb-sm-0 pb-sm-0  col-1     ">
                //                 <Avatar
                //                   className="bg-linear  "
                //                   // alt={logUser.username}
                //                   // src={logUser.profile_pic.public_url}
                //                   style={{
                //                     boxShadow: "0px 5px 10px black",
                //                     transform: "scale(1.2)",
                //                     width: 50,
                //                     height: 50,
                //                   }}
                //                 />
                //               </div>

                //               <div className="d-flex flex-column  col-11 p-0 pl-0">
                //                 {/* </StyledBadge> */}
                //                 <div className="d-flex flex-sm-row mt-0  ms-0 pe-1 pe-sm-2 mb-sm-3   ">
                //                   <div
                //                     className="fw-bold pe-sm-2  d-flex "
                //                     style={{ fontSize: 18 }}
                //                   >
                //                     <span
                //                       className="fw-bold pe-sm-2 p-1 "
                //                       style={{ fontSize: 18 }}
                //                     >
                //                       username
                //                     </span>
                //                     {/* {logUser.username} */}
                //                   </div>
                //                 </div>
                //                 {/* queries */}
                //                 <div className="bg-white  p-4  rounded-3 w-100">
                //                   <p className="text-dark mb-0 ">{val.query}</p>
                //                 </div>
                //               </div>
                //             </div>
                //           </div>
                //         </>
                //       );
                //     }
                //   })}
                // </>
              )}{" "}
            </>

            {/* post */}

            {/* <Dialog
          open={addopen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullWidth={true}
        >
          <DialogContent>
            <Ideas data={data} publicQueryId={publicQueryId} />
          </DialogContent>
        </Dialog> */}
            {/* 
        <div className="d-flex justify-content-end">
          <PurpleTooltip title="Add Query" className="purple" placement="left">
            <IconButton
              aria-label="add"
              size="large"
              type="button"
              onClick={() => setOpen(true)}
            >
              <AddIcon fontSize="inherit" className="text-white" />
            </IconButton>
          </PurpleTooltip>
        </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

//     <div className="d-flex  mb-2   align-items-start">
//       {/* user name */}
//       <div className=" p-2 ps-1  pb-1 mb-sm-0 pb-sm-0  col-1     ">
//         <Avatar
//           className="bg-linear  "
//           // alt={logUser.username}
//           // src={logUser.profile_pic.public_url}
//           style={{
//             boxShadow: "0px 5px 10px black",
//             transform: "scale(1.2)",
//             width: 50,
//             height: 50,
//           }}
//         />
//       </div>

//       <div className="d-flex flex-column  col-11 p-0 pl-0">
//         {/* </StyledBadge> */}
//         <div className="d-flex flex-sm-row mt-0  ms-0 pe-1 pe-sm-2 mb-sm-3   ">
//           <div
//             className="fw-bold pe-sm-2  d-flex "
//             style={{ fontSize: 18 }}
//           >
//             <span
//               className="fw-bold pe-sm-2 p-1 "
//               style={{ fontSize: 18 }}
//             >
//               username
//             </span>
//             {/* {logUser.username} */}
//           </div>
//         </div>
//         {/* queries */}

//         <div className="form-floating m-3 w-100 ">
//           <input
//             type="text"
//             className="form-control curve no-out"
//             id="floatingInput"
//             onChange={(e) =>
//               setUserData({ ...userData, query: e.target.value })
//             }
//           />
//           <label className="text-dark" for="floatingInput">
//             Idea Create
//           </label>
//         </div>

//         <div className="align-items-right justify-content-end mx-5 mt-md-3">
//           <DialogActions>
//             <Button
//               className="bg-white purple mx-1 mb-3 my-2"
//               variant="contained"
//               onClick={() => {
//                 setPost(false);
//                 setOpen(true);
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               className="bg-white purple mb-3 my-2"
//               variant="contained"
//               onClick={() => {
//                 handleSubmit();
//                 setPost(false);
//               }}
//             >
//               Post
//             </Button>
//           </DialogActions>
//         </div>
//         {/* <p className="text-dark mb-0">{data.query}</p> */}
//       </div>

//       {/*
// <IconButton
//   aria-label="add"
//   size="large"
//   type="button"
//   onClick={() => {
//     setPublicQueryId(data.id);
//     setaddOpen(true);
//   }}
// >
//   <LightbulbIcon fontSize="inherit" className="bg-purple" />

// </IconButton> */}
//     </div>;
