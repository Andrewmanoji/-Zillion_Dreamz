import React from 'react'
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

export default function queryidea() {
  return (
    <div className=" bg-purple rounded-4 ">
      <div className="rounded-4  d-flex flex-column justify-content-evenly p-4 vh-90 w-100">
        <div className="d-flex  mb-2 pt-4 align-items-start ">
          {/* user name */}
          <div className=" p-2 ps-1  pb-1 mb-sm-0 pb-sm-0  col-1     ">
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

          <div className="d-flex flex-column  col-11 p-0 pl-0">
            {/* </StyledBadge> */}
            <div className="d-flex flex-sm-row mt-0  ms-0 pe-1 pe-sm-2 mb-sm-3   ">
              <div
                className="fw-bold pe-sm-2  d-flex "
                style={{ fontSize: 18 }}
              >
                <span className="fw-bold pe-sm-2 p-1 " style={{ fontSize: 18 }}>
                  username
                </span>
                {/* {logUser.username} */}
              </div>
            </div>
            {/* queries */}

            <div
              // onClick={() => {
              //   setQueryIdea(true);
              //   setYourquery(false);
              // }}
              className="bg-white  p-4 rounded-3 w-100"
            >
              <p className="text-dark mb-0">hii</p>
              {/* {val.query}  pass value to this div */}
            </div>
            
            <Comments
              commentsUrl="http://localhost:3004/comments"
              currentUserId="1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
