import * as React from "react";
import Box from "@mui/material/Box";
import NavigationBar from "../components/navigationBar";
import Button from "@mui/material/Button";
import { Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <React.Fragment>
      <NavigationBar />
      <Box sx={{ flexGrow: 1, ml: "auto" }}>
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link to="team">
              <Button>Our Teams</Button>
            </Link>
            <Link to="company">
              <Button>The Company</Button>
            </Link>
          </Box>
        </Toolbar>
      </Box>
      <Outlet></Outlet>
    </React.Fragment>
  );
};

export default About;
