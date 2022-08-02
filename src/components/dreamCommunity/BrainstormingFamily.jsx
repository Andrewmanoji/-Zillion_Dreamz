import { useState } from "react";
import Button from "@mui/material/Button";
import QueryMaker from "./QueryMaker";
import YourQueries from "./YourQueries";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import IdeaCreate from "../dreamCommunity/IdeaCrate";
import Select from "@mui/material/Select";
import zvillasoon from "../../assets/images/zson.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddQueries from "./AddQueries";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IdeaCrate from "../dreamCommunity/IdeaCrate";
import { Divider } from "@mui/material";
import QueryIdea from "./QueryIdea"
import InfiniteScroll from "react-infinite-scroll-component";
import { max } from "date-fns";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function BrainstormingFamily({ setBrainstroming, mob }) {
  const [idea, setIdea] = useState(false);
  const [menu, setMenu] = useState(10);
  const [open, setOpen] = useState(false);
  const [Comment, setComment] = useState(true);
  const [yourquery, setYourquery] = useState(false);
  const [addquery, setAddquery] = useState(false);
  const [post, setPost] = useState(false);
  const [passdata, setPassdata] = useState(null);
  const [content, setContent] = useState(null);
  const [queryIdea,setQueryIdea] = useState(false);

  const data = [
    {
      type: 20,
      content: [
        {
          id: 1,
          uname: "Selvin",

          query:
            " uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",
          idea: "Listen music",
          sug: ["sug1"],
        },
        {
          id: 2,
          uname: "jayasurya",

          query:
            "uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",

          idea: "dance",
          sug: ["sug2"],
        },
        {
          id: 2,
          uname: "Andrew",

          query:
            " uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",

          idea: "dance",
          sug: ["sug2"],
        },
      ],
    },
    {
      type: 30,
      content: [
        {
          id: 1,
          uname: "Manoji",

          query:
            " our projects which usually uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",
          idea: "Listen music",
          sug: ["sug1"],
        },
        {
          id: 2,
          uname: "Andrew",

          query:
            " our projects which usually uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",

          idea: "dance",
          sug: ["sug2"],
        },
        {
          id: 2,
          uname: "Jhon",
          query:
            " our projects which usually uses curly braces for expressions (i.e. {stuff happens}).Our local enviroment however uses <%stuff happens%> instead. I want to modify the language.json of the Smarty Template Support-Extension for VS-Code to properly highlight my code. I had good success with writing the regex for the regular code-blocks, however comment-blocks are not really working. Pictured hereInspection of the tokens reveals, that other scopes seem to take priority Pictured here",

          idea: "dance",
          sug: ["sug2"],
        },
      ],
    },
  ];

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <>
      {/* header */}
      <div
        className=" mb-2 mt-1 mt-md-2 col-11 mx-auto d-flex pe-4"
        // style={{ borderTop: "2px solid #7201c8" }}
      >
        <ArrowBackIcon
          className="bg-purple rounded-circle p-1 me-3 mt-2 cursor-pointer li-shadow"
          sx={{ fontSize: 30 }}
          onClick={() => setBrainstroming(false)}
        />
        <p
          className="fw-bold bg-linearlr col-6 col-md-3 col-xl-2 mx-auto text-center p-2 mt-0"
          style={{
            borderRadius: "0px 0px 10px 10px",
            boxShadow: "0px 5px 10px #0000005e",
          }}
        >
          ZD Brainwave
        </p>
      </div>

      {/* main */}

      <ThemeProvider theme={theme}>
        {/* Full container */}
        <div className="  ">
          {/* upper half */}
          <div className=" d-md-flex  flex-md-row  d-flex  justify-content-md-between col-sm-12    align-items-md-start align-items-center  flex-column  ">
            {/* Zd menu  */}
            <div className="  d-flex px-2 justify-content-sm-between   flex-column flex-sm-row   col-12    col-md-8 px-sm-1 px-md-2 m-0   ">
              <span className="fw-bold purple-gradient  fs-3">
                Select Your ZD Menu
              </span>

              <div className="me-5  ms-sm-5  d-flex justify-content-center mt-3  mt-sm-0 col-12 col-sm-4 ">
                {" "}
                <FormControl variant="outlined" sx={{ minWidth: 200 }    }    >
                  <Select
                    style={{
                      borderRadius: "7px",
                    }}
                    // labelId="demo-simple-select-filled-label"
                    // id="demo-simple-select-filled"
                    className=" bg-linearlr "
                    value={menu}
                    label="menu"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>
                      <span>General</span> 
                    </MenuItem>
                  
                    <Divider color="bg-purple" />
                    <MenuItem value={20}>
                      <span>Business</span>
                    </MenuItem>
                    <Divider color="bg-purple" />
                    <MenuItem value={30}>
                      <span>Education</span>
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* button */}
            <div className="rounded-3 m-5  col-7 p-3         m-md-0  px-md-5 col-md-4 py-md-4 d-flex gap-4 flex-column  bg-hash">
              <Button
                style={{
                  borderRadius: "4px",
                  // boxShadow: "0px 5px 10px #0000005e",
                }}
                className="fw-bold bg-linearlr p-2 "
                variant="outlined"
                onClick={() => {
                  setIdea(false);
                  setAddquery(false);
                  setYourquery(false);
                  setPost(false);
                  setQueryIdea(false);
                }}
              >
                <span className="white"> Query Maker</span>
              </Button>

              <Button
                style={{
                  borderRadius: "4px",
                  // boxShadow: "0px 5px 10px #0000005e",
                }}
                className="fw-bold bg-linearlr  p-2 "
                variant="outlined"
                onClick={() => {
                  setIdea(true);
                  setAddquery(false);
                    setComment(true);
                  setYourquery(false);
                  setPost(false);
                  setQueryIdea(false); 
                }}
              >
                <span className="white"> Idea Crate</span>
              </Button>
            </div>
          </div>

          {/* query heading*/}

          <>
            {idea ? (
              <div className="d-flex flex-column ">
                <div className="px-2">
                  {" "}
                  <span className="fw-bold purple-gradient fs-4">
                    Idea Section
                  </span>
                </div>

                {/* description + button*/}
                <div className="d-flex  justify-content-between">
                  {/* description */}
                  <div className="pt-2 px-2 d-flex  flex-column">
                    <span className="fw-bold purple-gradient fs-6">
                      Choose your query to shower your ideas. Post if you have
                    </span>
                    <span className="fw-bold purple-gradient fs-6">
                      any query to get some ideas{" "}
                    </span>
                  </div>

                  {/* query button */}
                  <div className="rounded-3 m-2   py-3 col-2 d-flex   justify-content-center gap-4  ">
                    <Button
                      style={{
                        borderRadius: "4px",
                        // boxShadow: "0px 5px 10px #0000005e",
                      }}
                      className=" btn bg-linearlr me-0 p-2"
                      variant="outlined"
                      onClick={() => {
                        setPost(true);
                        setOpen(true);
                        setComment(false);
                        setQueryIdea(false);
                      }}
                    >
                      <span className="white"> + Add ideas</span>
                    </Button>
                  </div>
                </div>

                <IdeaCreate
                  data={data}
                  setPost={setPost}
                  passdata={passdata}
                  content={content}
                  // setPost={setPost}
                  setComment={setComment}
                  post={post}
                />
              </div>
            ) : (
              <>
                <div className="d-flex flex-column">
                  <div className="px-2">
                    {" "}
                    <span className="fw-bold purple-gradient fs-4">
                      Query Section
                    </span>
                  </div>

                  {/* description + button*/}
                  <div className="d-flex  justify-content-between  ">
                    {/* description */}
                    <div className="pt-2 px-2 d-flex flex-column">
                      <span className="fw-bold purple-gradient fs-6">
                        Choose your query to shower your ideas. Post if you have
                      </span>
                      <span className="fw-bold purple-gradient fs-6">
                        any query to get some ideas{" "}
                      </span>
                    </div>

                    {/* query button */}
                    <div className="rounded-3 m-2  py-3 col-4 d-flex me-5  ms-sm-5  justify-content-center gap-4 mt-sm-0 col-12 col-sm-4 ">
                      <Button
                        style={{
                          borderRadius: "4px",
                          // boxShadow: "0px 5px 10px #0000005e",
                        }}
                        className="  bg-linearlr p-2  "
                        variant="outlined"
                        onClick={() => {
                          setIdea(false);
                          setYourquery(true);
                          setQueryIdea(false);
                          setAddquery(false);
                        }}
                      >
                        <span className="white">Your Query</span>
                      </Button>

                      <Button
                        style={{
                          borderRadius: "4px",
                          // boxShadow: "0px 5px 10px #0000005e",
                        }}
                        className=" btn bg-linearlr p-2"
                        variant="outlined"
                        onClick={() => {
                          // setOpen(true)
                          setAddquery(true);
                          setQueryIdea(false);

                          setYourquery(false);
                        }}
                      >
                        <span className="white"> + Add Query</span>
                      </Button>
                    </div>
                  </div>

                  {yourquery ? (
                    <YourQueries
                      setIdea={setIdea}
                      queryIdea={queryIdea}
                      setQueryIdea={setQueryIdea}
                      setYourquery={setYourquery}
                    />
                  ) : addquery ? (
                    <AddQueries
                      setAddquery={setAddquery}
                      setYourquery={setYourquery}
                    />
                  ) : queryIdea ? (
                    <QueryIdea
                      data={data}
                      setPost={setPost}
                      passdata={passdata}
                      content={content}
                      QueryIdea={QueryIdea}
                      // setPost={setPost}
                      setComment={setComment}
                      post={post}
                    />
                  ) : (
                    <QueryMaker
                      menu={menu}
                      data={data}
                      setPassdata={setPassdata}
                      setContent={setContent}
                      setIdea={setIdea}
                    />
                  )}
                </div>
              </>
            )}
          </>
        </div>
      </ThemeProvider>
    </>
  );
}
