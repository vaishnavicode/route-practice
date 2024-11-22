import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton from "@mui/material/IconButton";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { LogInContext } from "../contexts/loginContext";
import Stack from "@mui/material/Stack";
import Grid2 from "@mui/material/Grid2";
import NavigationBar from "./navigationBar";
import ShareButton from "./shareButton";

export default function IndividualPost() {
  // Use Context

  const { isLoggedIn } = useContext(LogInContext);

  // Use State
  const [individualBlog, setIndividualBlog] = useState({});
  const [share, setShare] = useState(false);

  // Get the id param from the URL.
  let { id } = useParams();
  const [like, setLike] = useState(false);

  //   Use Effect

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        var data = response.data.filter((value) => {
          return id === String(value.id);
        });
        setIndividualBlog(data[0]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        console.log("axios called");
      });
  }, [setIndividualBlog, id]);

  useEffect(() => {
    console.log("jey");
  }, []);

  if (!isLoggedIn) {
    return (
      <>
        <NavigationBar />
        <Stack>
          <Grid2>
            <h1 style={{ justifySelf: "center" }}>
              You must be logged in to view individual blogs.
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
        <NavigationBar />
        <Box style={{ justifySelf: "center" }} sx={{ mt: "2rem" }}>
          <Card variant="elevation">
            <CardContent>
              <Typography variant="h5" style={{ justifySelf: "center" }}>
                {individualBlog.title}
              </Typography>

              <Typography>{individualBlog.body}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Tooltip title="Like">
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => {
                    like ? setLike(false) : setLike(true);
                  }}
                >
                  <FavoriteIcon
                    color={like ? "error" : "disabled"}
                    sx={{ "&:hover": { color: "#d32f2f" } }}
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Share">
                <IconButton
                  aria-label="share"
                  onClick={() => {
                    setShare(true);
                  }}
                  sx={{ "&:hover": { color: "#1976d2" } }}
                >
                  <ShareIcon />
                </IconButton>
              </Tooltip>

              <Link to="/blogs">
                <Button variant="text">Back</Button>
              </Link>
              <ShareButton share={share} setShare={setShare} />
            </CardActions>
          </Card>
        </Box>
      </>
    );
  }
}
