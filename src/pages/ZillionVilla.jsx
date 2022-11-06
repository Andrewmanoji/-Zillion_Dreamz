import { createTheme, ThemeProvider } from "@mui/material/styles";
import ZdRecords from "../components/zvilla/ZdRecords";
import gif from "../assets/images/unborn-egg.gif";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Slider from "@mui/material/Slider";
import zvillasoon from "../assets/images/zson.gif";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Avatar, Box } from "@mui/material";
import nodata from "../assets/images/nofeed.gif";
import feed_loader from "../assets/images/feed_load.gif";
import { postComment, uploadFeed } from "../slices/newsfeedSlice";
import Badge from "@mui/material/Badge";
import styled from "@emotion/styled";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

const dummyData = [
  {
    name: "Surya",
    username: "jass123",
    date: "Nov 11",
    achievement: "Completing 400 m in 45 sec",
  },
  {
    name: "Selvin",
    username: "rico007",
    date: "Nov 11",
    achievement: "I have scored 50 in a match",
  },
  {
    name: "Manoj",
    username: "manoj",
    date: "Nov 11",
    achievement: "I have watched 4 films today",
  },
];

export default function ZillionVilla() {
  const [zhonor, setZhonor] = useState(false);
  const [zchest, setZchest] = useState(false);
  const [zstoreroom, setZstoreroom] = useState(false);
  const [zsaga, setZsaga] = useState(false);
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    // <div>
    // <div
    //   className="h-100 bg-white position-absolute z-villa d-flex flex-column align-justify-start mt-md-3"
    //   style={{ zIndex: 4 }}
    // >
    //   <div className="bg-white text-center col-12">
    //     <div
    //       className="h4 col-12 col-sm-8 col-md-6 col-xl-4 p-3 fw-bold mx-auto text-white bg-linearlr text-center"
    //       style={{
    //         borderRadius: "0px 0px 15px 15px",
    //         boxShadow: "0px 0px 10px #000000",
    //       }}
    //     >
    //       Launching Soon.
    //     </div>
    //   </div>
    //   <img
    //     src={zvillasoon}
    //     className=" mx-auto my-md-auto mt-5  pt-5 pt-md-0 launch-gif"
    //   />
    //   {/* <div class="bg-black">
    //       <ul class="text-decoration-none">
    //         <li>Zillion Honor Board</li>
    //         <li>Zillion Chest</li>
    //         <li>Zillion Storeroom</li>
    //         <li>Zillion Saga</li>
    //       </ul>

    //   </div> */}

    // </div>

    <div>
      <div class="d-flex justify-content-around mt-5  ZV-btn">
        <Button
          style={{
            borderRadius: "10px",
            // boxShadow: "0px 5px 10px #0000005e",
          }}
          className="fw-bold bg-linearlr p-2  m-4 "
          variant="outlined"
        >
          <span className="query-maker-btn white">Zillion Honor Board </span>
        </Button>
        <Button
          style={{
            borderRadius: "10px",
            // boxShadow: "0px 5px 10px #0000005e",
          }}
          className="fw-bold bg-linearlr p-2   m-4  "
          variant="outlined"
        >
          <span className="query-maker-btn white"> Zillion Chest</span>
        </Button>
        <Button
          style={{
            borderRadius: "10px",
            // boxShadow: "0px 5px 10px #0000005e",
          }}
          className="fw-bold bg-linearlr p-2   m-4  "
          variant="outlined"
        >
          <span className="query-maker-btn white"> Zillion Storeroom</span>
        </Button>
        <Button
          style={{
            borderRadius: "10px",
            // boxShadow: "0px 5px 10px #0000005e",
          }}
          className="fw-bold bg-linearlr p-2  m-4   "
          variant="outlined"
        >
          <span className="query-maker-btn white"> Zillion Saga</span>
        </Button>
      </div>

      <h5 className="purple ms-5 mt-2">1.Zillionaire of the Day</h5>

      {dummyData.map((data, index) => (
        <Box
          className="col-9  ms-5 mb-5 gray-1"
          style={{ height: 500, width: 500 }}
        >
          <h6 className=" gray-1">h</h6>
          <Box
            className="col-9 mt-5 ms-4 purple-bg"
            style={{ height: 200, width: 452 }}
          >
            <div
              className="position-absolute d-flex ms-4 "
              style={{ marginTop: -12 }}
            >
              <StyledBadge
                overlap="circular"
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                variant="dot"
              >
                <Avatar
                  className="bg-linearlr cursor-pointer"
                  // alt={feed.user.username}
                  // src={
                  //   feed.user.profile_pic
                  //     ? feed.user.profile_pic.public_url
                  //     : ""
                  // }
                  style={{
                    boxShadow: "0px 1px 10px black",
                    marginTop: -15,
                    // bottom:"25px",
                    // transform: "scale(1.2)",
                    // width: mob ? 50 : 60,
                    // height: mob ? 50 : 60,
                  }}
                  // onClick={() =>
                  //   history.push(
                  //     `/user-profile/${feed.user.id}`
                  //   )
                  // }
                />
              </StyledBadge>
              <div className="d-flex ms-3" style={{ marginTop: -10 }}>
                <h6 className="text-dark fw-bold pb-1 ps-1 gray-2">
                  {data.name}
                </h6>
                <h6 className="text-dark  pb-5  ps-2 gray-3">
                  @{data.username}
                </h6>
                <h6 className="text-dark  pb-5  ps-2 gray-3">{data.date}</h6>
                {/* <h6 className="text-dark fw-bold pb-5  ps-1 ">{index}</h6> */}
              </div>
            </div>
          </Box>
          <div className="border border-hash  ms-4 me-4">
            <div
              className="d-flex justify-content-between  "
              style={{ height: 130 }}
            >
              <h6 className="purple ms-2 mt-2 ">Achievement</h6>
              <Button
                style={{
                  borderRadius: "10px",
                  // boxShadow: "0px 5px 10px #0000005e",
                  marginBottom: "90px",
                }}
                className="fw-bold bg-linearlr me-4 mt-2 rounded-pill "
                variant="outlined"
              >
                <span className="query-maker-btn white fw-semibold">
                  Follow
                </span>
              </Button>
            </div>
            <p className="purple ms-2">{data.achievement}</p>
          </div>
          <div>
            <p className="border border-hash purple">hi</p>
          </div>
        </Box>
      ))}
    </div>
    // <Box
    //                     className={`col-12 col-md-11 d-flex mx-auto flex-column justify-content-start
    //                  position-relative ${
    //                    !feed.attachment && " bg-linearlr li-shadow"
    //                  }`}
    //                     style={
    //                       feed.attachment
    //                         ? {
    //                             borderRadius: "25px",
    //                             height: mob ? 275 : 325,
    //                             // height: 325,
    //                             boxShadow: "0px 0px 15px grey",
    //                             // background: feed.attachment.public_url
    //                             //   ? `url("${feed.attachment.public_url}")no-repeat center/contain`
    //                             //   : "",
    //                             zIndex: 1,
    //                           }
    //                         : {
    //                             borderRadius: "25px",
    //                             maxHeight: 525,
    //                             // boxShadow: "0px 0px 15px grey",
    //                             // border: "3px solid #7201c8",
    //                           }
    //                     }
    //                   >
    //                     <div
    //                       className=" px-sm-4 pe-2 d-flex align-items-end justify-content-between"
    //                       style={{ height: "20px", zIndex: 2 }}
    //                     >
    //                       <div className="ps-1 d-flex align-items-center justify-content-start ms-2 mb-sm-0 mx-sm-0 ">
    //                         {isOnline ? (
    //                           <StyledBadge
    //                             overlap="circular"
    //                             anchorOrigin={{
    //                               vertical: "bottom",
    //                               horizontal: "right",
    //                             }}
    //                             variant="dot"
    //                           >
    //                             <Avatar
    //                               className="bg-linearlr cursor-pointer"
    //                               alt={feed.user.username}
    //                               src={
    //                                 feed.user.profile_pic
    //                                   ? feed.user.profile_pic.public_url
    //                                   : ""
    //                               }
    //                               style={{
    //                                 boxShadow: "0px 5px 10px black",
    //                                 // bottom:"25px",
    //                                 // transform: "scale(1.2)",
    //                                 width: mob ? 50 : 60,
    //                                 height: mob ? 50 : 60,
    //                               }}
    //                               onClick={() =>
    //                                 history.push(
    //                                   `/user-profile/${feed.user.id}`
    //                                 )
    //                               }
    //                             />
    //                           </StyledBadge>
    //                         ) : (
    //                           <Avatar
    //                             className="bg-linearlr cursor-pointer"
    //                             alt={feed.user.username}
    //                             src={
    //                               feed.user.profile_pic
    //                                 ? feed.user.profile_pic.public_url
    //                                 : ""
    //                             }
    //                             style={{
    //                               boxShadow: "0px 5px 10px black",
    //                               // bottom:"25px",
    //                               // transform: "scale(1.2)",
    //                               width: mob ? 50 : 60,
    //                               height: mob ? 50 : 60,
    //                             }}
    //                             onClick={() =>
    //                               history.push(
    //                                 `/user-profile/${feed.user.id}`
    //                               )
    //                             }
    //                           />
    //                         )}
    //                         <div className="d-flex flex-column flex-sm-row justify-content-start align-items-start ms-2 pe-1 pe-sm-2 mb-sm-3 mt-0 ">
    //                           <div
    //                             className="fw-bold pe-sm-2 purple mb-4 mb-sm-0"
    //                             style={{ fontSize: 18 }}
    //                           >
    //                             {feed.user.username}
    //                           </div>
    //                           {/* <div className="fw-bold grey post-uname">
    //                       @{feed.user.id}
    //                     </div> */}
    //                         </div>
    //                       </div>
    //                       <div className="d-flex mb-2">
    //                         <div
    //                           className="h6 grey pe-1 pe-sm-2 mt-1 mt-sm-0 mb-3 "
    //                           style={{ fontSize: 12 }}
    //                         >
    //                           {postedMonth + " " + postedDate}
    //                         </div>
    //                       </div>
    //                     </div>
    //                     {!feed.attachment && (
    //                       <div
    //                         className="col-12 my-1 cursor-auto overflow-auto"
    //                         style={{
    //                           height: "88%",
    //                           // overflowY: "scroll !important",
    //                           // maxHeight: 305,
    //                         }}
    //                       >
    //                         <div
    //                           className="w-100 px-4 py-2 text-white cursor-auto"
    //                           // style={{
    //                           //   maxHeight: 275,
    //                           // }}
    //                         >
    //                           {feed.text}
    //                         </div>
    //                       </div>
    //                     )}
    //                     {feed.attachment &&
    //                       checkImg.includes(feed.attachment.mimetype) && (
    //                         <div className="position-absolute br-20 h-100 w-100 p-0 overflow-hidden bg-white">
    //                           <div
    //                             className="position-absolute h-100 w-100 overflow-hidden"
    //                             style={{
    //                               zIndex: 1,
    //                               background: feed.attachment.public_url
    //                                 ? `url("${
    //                                     feed.attachment.public_url
    //                                   }")no-repeat center/${
    //                                     !imgView ? "contain" : "cover"
    //                                   }`
    //                                 : "",
    //                             }}
    //                           ></div>
    //                           {!imgView && (
    //                             <div
    //                               className="position-absolute h-100 w-100"
    //                               style={{
    //                                 zIndex: 0,
    //                                 background: feed.attachment.public_url
    //                                   ? `url("${feed.attachment.public_url}")no-repeat center/cover`
    //                                   : "",
    //                                 filter: "blur(3px)",
    //                                 opacity: 0.7,
    //                               }}
    //                             ></div>
    //                           )}
    //                         </div>
    //                       )}
    //                     <div
    //                       className="br-20 w-100 position-absolute overflow-hidden "
    //                       style={{
    //                         height: mob ? 275 : 325,
    //                       }}
    //                     >
    //                       {feed.attachment &&
    //                         checkVideo.includes(feed.attachment.mimetype) && (
    //                           // <Player src="http://www.w3schools.com/html/mov_bbb.mp4">
    //                           //   <BigPlayButton position="center" />
    //                           // </Player>
    //                           <video
    //                             className="my-auto"
    //                             // width="100%"
    //                             // height="100%"
    //                             style={{
    //                               width: "100%" /* or any custom size */,
    //                               height: "100%",
    //                               objectFit: "contain",
    //                             }}
    //                             autoPlay
    //                             muted
    //                             loop
    //                             controls
    //                             controlsList="nodownload"
    //                           >
    //                             <source
    //                               src={
    //                                 feed.attachment
    //                                   ? feed.attachment.public_url
    //                                   : ""
    //                               }
    //                               type={feed.attachment.mimetype}
    //                             />
    //                             {/* <source src="movie.ogg" type="video/ogg" /> */}
    //                             Your browser does not support the video tag.
    //                           </video>
    //                         )}
    //                     </div>
    //                   </Box>
  );
}
{
  /* <ThemeProvider theme={theme}>
  <section className="bg-white m-3">
    <h3 className="purple  mb-4">ZD V-Room</h3>
    <div className="row">
      <div className="col-12 col-md-6">
        <Card elevation={4} className=" p-1 bg-purple">
          <CardContent>
            <section id="profile">
              <div className="row">
                <h5 className="px-2 fw-bold text-white">UNBORN EGG</h5>
                <h6 className="text-white">Level 1</h6>
                <div
                  className="bg-grey rounded-3 m-2 p-2"
                  style={{ width: "95%" }}
                >
                  <h6 className="purple">Your Progress</h6>
                  <Slider
                    disabled
                    defaultValue={50}
                    className="purple"
                    aria-label="Disabled slider"
                  />
                </div>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
      <div className="col-12 col-md-6">
        <img
          src={gif}
          width="100%"
          height="auto"
          className="m-0"
          alt="loading..."
        />
      </div>
    </div>
    <ZdRecords />
  </section>
</ThemeProvider> */
}
{
  /* </div> */
}
