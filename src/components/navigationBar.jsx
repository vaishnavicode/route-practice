import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { LogInContext } from "../contexts/loginContext";

export default function NavigationBar() {
  const { isLoggedIn } = React.useContext(LogInContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </Link>
          </Typography>

          <Link to="/about" style={{ color: "white" }}>
            <Button color="inherit">About</Button>
          </Link>
          {isLoggedIn && (
            <Link to="/blogs/add" style={{ color: "white" }}>
              <Button color="inherit">Add Blog</Button>
            </Link>
          )}
          <Link to="/blogs" style={{ color: "white" }}>
            <Button color="inherit">Blog</Button>
          </Link>

          {isLoggedIn && (
            <Link to="/logout" style={{ color: "white" }}>
              <Button variant="outlined" color="inherit">
                Logout
              </Button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/login" style={{ color: "white" }}>
              <Button color="inherit">Login</Button>
            </Link>
          )}

          {!isLoggedIn && (
            <Link to="/signup" style={{ color: "white" }}>
              <Button variant="outlined" color="inherit">
                Signup
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
