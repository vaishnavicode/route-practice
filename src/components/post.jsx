import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Post(props) {
  const navigate = useNavigate();
  return (
    <>
      <Box width={"350px"} sx={{ m: 0, p: 0, border: "3px" }}>
        <Card variant="elevation">
          <CardContent>
            <Typography
              variant="h5"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "11rem",
                whiteSpace: "nowrap",
              }}
            >
              {props.value.title}
            </Typography>

            <Typography
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                width: "11rem",
                whiteSpace: "nowrap",
              }}
            >
              {props.value.body}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                navigate(`/posts/${props.value.id}`);
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
