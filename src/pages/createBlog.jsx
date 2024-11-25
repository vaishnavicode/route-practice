import React, { useContext, useState } from "react";
import { LogInContext } from "../contexts/loginContext";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { UserContext } from "../contexts/userContext";
import { Grid2 } from "@mui/material";
import { Navigate } from "react-router-dom";
import { sendPost } from "../api/sendPost";

const CreateBlog = () => {
  // UseCont

  const { isLoggedIn } = useContext(LogInContext);
  const { user } = useContext(UserContext);

  // UseStates

  const [form, setForm] = useState({
    title: "",
    post: "",
  });
  const [error, setError] = useState({
    title: false,
    post: false,
  });
  const [submit, setSubmit] = useState(false);

  // Functions

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const onSubmitForm = () => {
    var temp = { ...error };
    temp.title = form.title === "";
    temp.post = form.post === "";
    setError(temp);

    var data = { ...form, userId: user.id };
    if (!temp.title && !temp.post) {
      sendPost(
        (response) => {
          console.log(response);
          setSubmit(true);
        },
        (error) => {
          console.log(error);
          alert("Error! Please try again!");
        },
        data
      );
    }
  };

  // Program Starts Here

  if (!isLoggedIn) {
    return (
      <>
        <Stack>
          <Grid2>
            <h1 style={{ justifySelf: "center" }}>
              You must be logged in to add blog.
            </h1>
          </Grid2>

          <Button variant="text" href="/login">
            Login
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
      </>
    );
  } else {
    return (
      <>
        {submit && <Navigate to="/blogs" />}
        <div style={{ justifySelf: "center", justifyContent: "center" }}>
          <h1 style={{ justifySelf: "center" }}>Add Blog</h1>
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
                  error={error.title}
                  id="outlined-error-helper-text"
                  label="Title"
                  name="title"
                  helperText={error.title ? "Title cannot be empty." : ""}
                  onChange={onUpdateField}
                />
              </div>
              <div>
                <TextField
                  required
                  autoComplete="on"
                  error={error.post}
                  id="outlined-error-helper-text"
                  label="Post"
                  name="post"
                  helperText={error.post ? "Post cannot be empty." : ""}
                  onChange={onUpdateField}
                />
              </div>
              <Button variant="contained" onClick={onSubmitForm}>
                Add Post
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

export default CreateBlog;
