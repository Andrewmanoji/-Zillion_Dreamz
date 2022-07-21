import { useState } from "react";
import Button from "@mui/material/Button";
import QueryMaker from "./QueryMaker";
import YourQueries from "./YourQueries";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import zvillasoon from "../../assets/images/zson.gif";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#a11cf9",
    },
  },
});

export default function BrainstormingFamily({ setBrainstroming, mob }) {
  const [idea, setIdea] = useState(false);
  const [menu, setMenu] = useState("general");

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
            <div className="  d-flex justify-content-between col-6 ">
              <span className="fw-bold purple-gradient fs-3">
                Select Your ZD Menu
              </span>

              <FormControl variant="filled" sx={{ minWidth: 150 }}>
                <Select
                  style={{
                    borderRadius: "4px",
                    boxShadow: "0px 5px 10px #0000005e",
                  }}
                  labelId="demo-simple-select-filled-label"
                  id="demo-simple-select-filled"
                  className=" bg-linearlr  "
                  value={menu}
                  label="menu"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>General</MenuItem>
                  <MenuItem value={20}>Business</MenuItem>
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
                }}
              >
                Query Maker
              </Button>

              <Button
                style={{
                  borderRadius: "4px",
                  boxShadow: "0px 5px 10px #0000005e",
                }}
                className="fw-bold bg-linearlr p-2 "
                variant="outlined"
                onClick={() => {
                  setIdea(true);
                }}
              >
                Idea Crate
              </Button>
            </div>
          </div>

          {idea ? <YourQueries /> : <QueryMaker />}
        </div>
      </ThemeProvider>
    </>
  );
}
