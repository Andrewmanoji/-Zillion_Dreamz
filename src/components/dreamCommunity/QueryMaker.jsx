import { useState } from "react";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { addQuery } from "../../slices/eventSlice";
import IdeaCreate from "../dreamCommunity/IdeaCrate";
import Ideas from "../dreamCommunity/Ideas";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useSelector } from "react-redux";
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

export default function QueryMaker() {
  const data = useSelector((state) => state.queryMaker);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [addopen, setaddOpen] = useState(false);
  const [alert, setAlert] = useState(false);

  const [values, setValues] = useState({
    query: "",
  });

  const handleSubmit = () => {
    data.map((val) => {
      if (val.query === null || val.query === "") {
        setAlert(true);
      } else {
        dispatch(
          addQuery({
            query: val.query,
          })
        );
      }
      return null;
    });
  };

  setTimeout(() => {
    setAlert(false);
  }, 3000);

  const handleClose = () => {
    setOpen(false);
    setaddOpen(false);
  };

  const [publicQueryId, setPublicQueryId] = useState(null);

  return (
    <>
      <div className="rounded-4 bg-purple d-flex flex-column justify-content-evenly p-4 vh-50 w-100">
        {data &&
          data.map((data, index) => (
            <div
              className="d-flex justify-content-between align-items-center"
              key={index}
            >

              {/* user name */}
              <div className="ps-1 bg-dark mb-3 pb-1 mb-sm-0 pb-sm-0 d-flex align-items-center justify-content-start">
              
                <Avatar
                  className="bg-linearlr"
                  // alt={logUser.username}
                  // src={logUser.profile_pic.public_url}
                  style={{
                    boxShadow: "0px 5px 10px black",
                    transform: "scale(1.2)",
                    width: 50,
                    height: 50,
                  }}
                />
                {/* </StyledBadge> */}
                <div className="d-flex  bg-dark flex-column flex-sm-row justify-content-end align-items-start ms-3 pe-1 pe-sm-2 mb-sm-3 mt-0 ">
                  <div
                    className="fw-bold pe-sm-2 purple"
                    style={{ fontSize: 18 }}
                  >
                    <span>username</span>
                    {/* {logUser.username} */}
                  </div>
                 
                </div>
              </div>
{/* queries */}
              <div className="bg-white mx-2 mt-4 p-3 rounded-3 w-100">
                <p className="text-dark mb-0">{data.query}</p>
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
          ))}

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

        <div className="d-flex justify-content-end">
          
          {/* <PurpleTooltip title="Add Query" className="purple" placement="left">
            <IconButton
              aria-label="add"
              size="large"
              type="button"
              onClick={() => setOpen(true)}
            >
              <AddIcon fontSize="inherit" className="text-white" />
            </IconButton>
          </PurpleTooltip> */}

        </div>
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
  );
}
