import React, { Fragment, useContext, useEffect } from "react";
import { LogInContext } from "../contexts/loginContext";
import Button from "@mui/material/Button";
import { Grid2, Stack } from "@mui/material";
import NavigationBar from "../components/navigationBar";
import axios from "axios";
import Post from "../components/post";
import { BlogContext } from "../contexts/blogContext";

const Blogs = () => {
  // Use Context
  const { isLoggedIn } = useContext(LogInContext);
  const { blog, setBlog } = useContext(BlogContext);

  // Use Effect

  useEffect(() => {
    if (isLoggedIn) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(function (response) {
          setBlog(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          console.log("axios called");
        });
    }
  }, [isLoggedIn, setBlog]);

  if (isLoggedIn) {
    return (
      <>
        <Stack>
          <Grid2>
            <NavigationBar />
            <h1 style={{ justifySelf: "center" }}>Blogs</h1>
          </Grid2>
          <Grid2
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
            direction="row"
          >
            {blog.map((value, index) => {
              return <Post key={index} value={value} />;
            })}
          </Grid2>
        </Stack>
      </>
    );
  } else {
    return (
      <>
        <Stack>
          <NavigationBar />
          <Grid2>
            <h1 style={{ justifySelf: "center" }}>
              You must be logged in to view blogs.
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
  }
};

export default Blogs;
