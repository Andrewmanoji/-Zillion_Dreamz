import { useSelector } from "react-redux";
import { endpoint, token, config } from "../../endpoint";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import QueryIdea from "./QueryIdea";


export default function YourQueries({setIdea,setYourquery,setAddquery,queryIdea,setQueryIdea}) {
  const userQuery = useSelector((state) => state.ideaCreate);
  axios.get(`${endpoint}/question/61b8058c79c371bf4d7fe36c`, config);

  console.log(userQuery);
  return (
    <>
   <div className="rounded-4 bg-purple d-flex flex-column justify-content-evenly p-4  pt-0 vh-70 w-100">
   
   

      {userQuery.map((val, index) =>
       {
        if (val.query !== null) {
          return (
<>
  <div className="d-flex  mb-2 pt-4 align-items-start">
                {/* user name */}
                <div className="  ps-1 mb-3 pb-1 mb-sm-0 pb-sm-0  col-1     ">
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
                  <div className="d-flex flex-sm-row mt-0   ms-0  pe-sm-2 mb-sm-3 ">
                    <div
                      className="fw-bold pe-sm-2  d-flex "
                      style={{ fontSize: 18 }}
                    >
                      <span
                        className="fw-bold pe-sm-2  ms-1 pe-0 pe-sm-0 mb-sm-7 mt-0 bg-dark  "
                        style={{ fontSize: 18 }}
                      >
                        username
                      </span>
                      {/* {logUser.username} */}
                    </div>
                  </div>
                  {/* queries */}

                  <div 
                  onClick={() => {setQueryIdea(true)
                  setYourquery(false)}}
                  className="bg-white  p-4 rounded-3 w-100">
                    <p className="text-dark mb-0">{val.query}</p>

                  </div>
                 
                  {/* <div className="divide"></div> */}
                  {/* {queryIdea ? (
                    <QueryIdea/>
                  ):(
                    <YourQueries />
                  )} */}
                    {}
{/* <div className="rounded-4  d-flex flex-column justify-content-evenly p-4 vh-90 w-100"> */}
                    

                </div>
            </div>
            {/* <div key={index} className="bg-white mx-2 mt-3 p-3 rounded-3 w-100">

              <p className="text-dark mb-0">{val.query}</p>
            </div> */}
         
         </>);
        }
      })}
     </div>
   
   
    </>
  );
}
