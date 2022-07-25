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
        <div className="container my-4">
          {/* upper half */}
          <div className="d-flex  justify-content-between   py-3">
            {/* Zd menu  */}
            <div className="  d-flex justify-content-between col-7 ">
              <span className="fw-bold purple-gradient fs-3">
                Select Your ZD Menu
              </span>

              <FormControl variant="outlined" sx={{ minWidth: 220 }}>
                <Select
                  style={{
                    borderRadius: "7px",
                  }}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  className=" bg-linearlr  "
                  value={menu}
                  label="menu"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>General</MenuItem>
                  <Divider color="bg-purple" />
                  <MenuItem value={20}>Business</MenuItem>
                  <Divider color="bg-purple" />
                  <MenuItem value={30}>Education</MenuItem>
                </Select>
              </FormControl>
            </div>

            {/* button */}
            <div className="bg-grey rounded-3  mx-3 px-5 col-4 py-4 d-flex gap-4 flex-column  ">
              <Button
                style={{
                  borderRadius: "4px",
                  boxShadow: "0px 5px 10px #0000005e",
                }}
                className="fw-bold bg-linearlr p-2 "
                variant="outlined"
                onClick={() => {
                  setIdea(false);
                  setAddquery(false);
                  setYourquery(false);
                  setPost(false);
                }}
              >
                Query Maker
              </Button>

              <Button
                style={{
                  borderRadius: "4px",
                  boxShadow: "0px 5px 10px #0000005e",
                }}
                className="fw-bold bg-linearlr  p-2 "
                variant="outlined"
                onClick={() => {
                  setPost(false);
                  setIdea(true);
                }}
              >
                Idea Crate
              </Button>
            </div>
          </div>

          {/* query heading*/}

          <>
            {idea ? (
              <div className="d-flex flex-column">
                <span className="fw-bold purple-gradient fs-4">
                  Idea Section
                </span>

                {/* description + button*/}
                <div className="d-flex  justify-content-between">
                  {/* description */}
                  <div className="pt-2 p d-flex  flex-column">
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
                        boxShadow: "0px 5px 10px #0000005e",
                      }}
                      className=" btn bg-linearlr me-0 p-1"
                      variant="outlined"
                      onClick={() => {
                        setPost(true);
                        setOpen(true);
                        setComment(false);
                      }}
                    >
                      + Add ideas
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
                  <span className="fw-bold purple-gradient fs-4">
                    Query Section
                  </span>

                  {/* description + button*/}
                  <div className="d-flex  justify-content-between  ">
                    {/* description */}
                    <div className="pt-2 p d-flex flex-column">
                      <span className="fw-bold purple-gradient fs-6">
                        Choose your query to shower your ideas. Post if you have
                      </span>
                      <span className="fw-bold purple-gradient fs-6">
                        any query to get some ideas{" "}
                      </span>
                    </div>

                    {/* query button */}
                    <div className="rounded-3 m-2  py-3 col-4 d-flex   justify-content-center gap-4  ">
                      <Button
                        style={{
                          borderRadius: "4px",
                          boxShadow: "0px 5px 10px #0000005e",
                        }}
                        className="  bg-linearlr p-1 "
                        variant="outlined"
                        onClick={() => {
                          setIdea(false);
                          setYourquery(true);
                          setAddquery(false);
                        }}
                      >
                        Your Query
                      </Button>

                      <Button
                        style={{
                          borderRadius: "4px",
                          boxShadow: "0px 5px 10px #0000005e",
                        }}
                        className=" btn bg-linearlr p-1"
                        variant="outlined"
                        onClick={() => {
                          // setOpen(true)
                          setAddquery(true);
                          setYourquery(false);
                        }}
                      >
                        + Add Query
                      </Button>
                    </div>
                  </div>

                  {yourquery ? (
                    <YourQueries setIdea={setIdea} />
                  ) : addquery ? (
                    <AddQueries />
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
