import React, { useContext, useState } from "react";
import { LogInContext } from "../contexts/loginContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Navigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import { UserContext } from "../contexts/userContext";
import { UserListContext } from "../contexts/userListContext";

const LogIn = () => {
  // UseContexts

  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);
  const { setUser } = useContext(UserContext);
  const { userList } = useContext(UserListContext);

  // UseStates

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  // Functions

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = () => {
    var temp = { ...error };
    temp.email = form.email !== "test@test.com";
    temp.password = form.password !== "test";
    setError(temp);

    var userLogIn = userList.filter((value) => {
      return value.email === form.email && value.password === form.password;
    });

    setUser(userLogIn[0]);

    if (!temp.email && !temp.password) {
      setIsLoggedIn(true);
    }
  };

  // Program Starts Here

  if (isLoggedIn) {
    return (
      <>
        <h1 style={{ justifySelf: "center" }}>Already Logged In</h1>
        <Navigate to="/" />
      </>
    );
  } else {
    return (
      <>
        <div style={{ justifySelf: "center", justifyContent: "center" }}>
          <h1 style={{ justifySelf: "center" }}>Login</h1>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "60ch" } }}
            noValidate
            autoComplete="off"
          >
            <Stack container="true" spacing={3}>
              <div>
                <TextField
                  required
                  autoComplete="on"
                  error={error.email}
                  id="outlined-error-helper-text"
                  label="Email"
                  name="email"
                  helperText={error.email ? "Email is incorrect." : ""}
                  onChange={onUpdateField}
                />
              </div>
              <div>
                <FormControl
                  sx={{ m: 1, width: "60ch" }}
                  variant="outlined"
                  required
                  error={error.password}
                >
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label={
                            showPassword
                              ? "hide the password"
                              : "display the password"
                          }
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          onMouseUp={handleMouseUpPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    onChange={onUpdateField}
                    label="Password"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") onSubmitForm();
                    }}
                  />
                  <FormHelperText>
                    {error.password ? "Password does not match email." : ""}
                  </FormHelperText>
                </FormControl>
              </div>
              <Button variant="contained" onClick={onSubmitForm}>
                LogIn
              </Button>
              <Button variant="text" href="/signup">
                Not A User
              </Button>
              <Button
                variant="text"
                size="small"
                href="/"
                style={{ margin: "0px" }}
              >
                Back To Home
              </Button>
            </Stack>
          </Box>
        </div>
      </>
    );
  }
};

export default LogIn;
