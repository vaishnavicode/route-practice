import React, { useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid2, Stack } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validations";
import { UserContext } from "../contexts/userContext";
import { usersList } from "../utils/userList";
import getNewId from "../utils/getNewId";
import { UserListContext } from "../contexts/userListContext";
import { LogInContext } from "../contexts/loginContext";

const SignUp = () => {
  const { setUser } = useContext(UserContext);
  const { setUserList } = useContext(UserListContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(LogInContext);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const navigate = useNavigate();

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);

    switch (e.target.name) {
      case "username":
        break;
      case "email":
        setError({ ...error, [e.target.name]: !validateEmail(e.target.value) });
        break;
      case "password":
        setError({
          ...error,
          [e.target.name]: !validatePassword(e.target.value),
        });
        break;
      case "confirmPassword":
        setError({
          ...error,
          [e.target.name]: e.target.value !== form.password,
        });
        break;
      default:
        break;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (form.username === "") {
      setError({ ...error, username: true });
    } else if (
      !error.username &&
      !error.email &&
      !error.password &&
      !error.confirmPassword
    ) {
      var userId = getNewId();

      setUser({
        username: form.username,
        email: form.email,
        password: form.password,
      });
      var userList = usersList;
      userList.push({
        id: userId,
        username: form.username,
        email: form.email,
        password: form.password,
      });
      setUserList(userList);
      setIsLoggedIn(true);
      navigate("/home");
    }
  };

  if (!isLoggedIn) {
    return (
      <>
        <div style={{ justifySelf: "center", justifyContent: "center" }}>
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "60ch" } }}
            noValidate
            autoComplete="on"
          >
            <Stack container="true" spacing={3}>
              <Grid2>
                <h1 style={{ justifySelf: "center" }}>Sign Up</h1>
              </Grid2>
              <Grid2>
                <TextField
                  required
                  error={error.username}
                  label="Username"
                  name="username"
                  helperText={error.username ? "Username cannot be empty." : ""}
                  onChange={onUpdateField}
                />
              </Grid2>
              <Grid2>
                <TextField
                  required
                  error={error.email}
                  label="Email"
                  name="email"
                  helperText={error.email ? "Email is invalid." : ""}
                  onChange={onUpdateField}
                />
              </Grid2>
              <Grid2>
                <TextField
                  required
                  error={error.password}
                  type="password"
                  label="Password"
                  name="password"
                  helperText={
                    error.password
                      ? "Your password must be at least 8 characters long, contain at least one number and special character and have a mixture of uppercase and lowercase letters."
                      : ""
                  }
                  onChange={onUpdateField}
                />
              </Grid2>
              <Grid2 item="true">
                <TextField
                  required
                  error={error.confirmPassword}
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                  helperText={
                    error.confirmPassword ? "Password does not match." : ""
                  }
                  onChange={onUpdateField}
                />
              </Grid2>

              <Button variant="contained" onClick={onSubmitForm}>
                Signup
              </Button>

              <Button variant="text" href="/login">
                Have an Account?
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
  } else {
    return (
      <>
        <h1 style={{ justifySelf: "center" }}>Already Logged In</h1>
        <Navigate to="/" />
      </>
    );
  }
};

export default SignUp;
