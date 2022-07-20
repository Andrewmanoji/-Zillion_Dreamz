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
  const [menu, setMenu] = useState("");

  const handleChange = (event) => {
    setMenu(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
  <section className="bg-white d-flex justify-items-center">
    <div className="container my-4">
      <div className="d-flex justify-content-start justify-content-md-between">
        <div>
          <Button
            className="btn me-4 mb-4"
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
      {idea ? <YourQueries /> : <QueryMaker />}
    </div>
  </section>
</ThemeProvider> 
  );
}


{
  /* <ThemeProvider theme={theme}>
  <section className="bg-white d-flex justify-items-center">
    <div className="container my-4">
      <div className="d-flex justify-content-start justify-content-md-between">
        <div>
          <Button
            className="btn me-4 mb-4"
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
      {idea ? <YourQueries /> : <QueryMaker />}
    </div>
  </section>
</ThemeProvider> */
}
