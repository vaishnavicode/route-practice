import React, { Fragment, useContext, useEffect } from "react";
import { LogInContext } from "../contexts/loginContext";
import Button from "@mui/material/Button";
import { Grid2, Stack } from "@mui/material";
import NavigationBar from "../components/navigationBar";
import Post from "../components/post";
import { BlogContext } from "../contexts/blogContext";
import { getAllPosts } from "../api/getAllPosts";
import { LoaderContext } from "../contexts/loaderContext";

const Blogs = () => {
  // Use Context
  const { isLoggedIn } = useContext(LogInContext);
  const { blog, setBlog } = useContext(BlogContext);
  const { setIsLoading } = useContext(LoaderContext);

  // Use Effect

  useEffect(() => {
    if (isLoggedIn) {
      setIsLoading(true);
      getAllPosts(
        (res) => {
          setBlog(res);
          setIsLoading(false);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [isLoggedIn, setIsLoading, setBlog]);

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
