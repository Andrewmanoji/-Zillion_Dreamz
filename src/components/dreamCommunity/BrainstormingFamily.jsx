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
    <ThemeProvider theme={theme}>
      <ArrowBackIcon
        className="bg-purple rounded-circle p-1 me-3 mt-2 cursor-pointer li-shadow"
        sx={{ fontSize: 30 }}
        onClick={() => setBrainstroming(false)}
      />

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
              <InputLabel id="demo-simple-select-filled-label">
                ZD Menu
              </InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                className="mb-4"
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
          <div className="bg-light rounded-3  mx-3 p-3 col-4  py-3 d-flex flex-column  ">
            <Button
              className="btn me-4 mb-4 justify-center"
              variant="outlined"
              onClick={() => {
                setIdea(false);
              }}
            >
              Query Maker
            </Button>
            <Button
              className="btn mb-4"
              variant="outlined"
              onClick={() => {
                setIdea(true);
              }}
            >
              Your queries
            </Button>
          </div>
        </div>

        {idea ? <YourQueries /> : <QueryMaker />}
      </div>
    </ThemeProvider>
  );
}
