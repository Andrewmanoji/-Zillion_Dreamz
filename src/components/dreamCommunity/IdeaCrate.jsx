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

export default function IdeaCrate({ setOpen }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [events, setEvents] = useState(false);
  const data = useSelector((state) => state.queryMaker);

  const [userData, setUserData] = useState({
    query: "",
  });

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
                <div className=" p-2 ps-1  pb-1 mb-sm-0 pb-sm-0  col-1     ">
                  <Avatar
                    className="bg-linear  "
                    // alt={logUser.username}
                    // src={logUser.profile_pic.public_url}
                    style={{
                      boxShadow: "0px 5px 10px black",
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
                      <span
                        className="fw-bold pe-sm-2 p-1 "
                        style={{ fontSize: 18 }}
                      >
                        username
                      </span>
                      {/* {logUser.username} */}
                    </div>
                  </div>
                  {/* queries */}

                  <div className="bg-white  p-4 rounded-3 w-100">
                    <p className="text-dark mb-0">{data.query}</p>
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
          </>

          <div className="divide"></div>

          <div className="rounded-4  d-flex flex-column justify-content-evenly p-4 vh-70 w-100">
            {/* {data &&
              data.map((data, index) => ( */}
            <div className="d-flex  mb-2   align-items-start">
              {/* user name */}
              <div className=" p-2 ps-1  pb-1 mb-sm-0 pb-sm-0  col-1     ">
                <Avatar
                  className="bg-linear  "
                  // alt={logUser.username}
                  // src={logUser.profile_pic.public_url}
                  style={{
                    boxShadow: "0px 5px 10px black",
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
                    <span
                      className="fw-bold pe-sm-2 p-1 "
                      style={{ fontSize: 18 }}
                    >
                      username
                    </span>
                    {/* {logUser.username} */}
                  </div>
                </div>
                {/* queries */}

                <div className="form-floating m-3 w-100 ">
                  <input
                    type="text"
                    className="form-control curve no-out"
                    id="floatingInput"
                    onChange={(e) =>
                      setUserData({ ...userData, query: e.target.value })
                    }
                  />
                  <label className="text-dark" for="floatingInput">
                    Idea Create
                  </label>
                </div>
                <div className="align-items-right justify-content-end mx-5 mt-md-3">
                  <DialogActions>
                    <Button
                      className="bg-white purple mx-1 mb-3 my-2"
                      variant="contained"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      className="bg-white purple mb-3 my-2"
                      variant="contained"
                      onClick={handleSubmit}
                    >
                      Post
                    </Button>
                  </DialogActions>
                </div>
                {/* <p className="text-dark mb-0">{data.query}</p> */}
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
            {/* ))} */}

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
