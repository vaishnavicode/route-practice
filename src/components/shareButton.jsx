import {
  Close,
  FacebookOutlined,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

const ShareButton = (props) => {
  // Functions
  const handleClose = () => {
    props.setShare(false);
  };
  return (
    <>
      <Dialog open={props.share} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Share
          </Typography>
          <Tooltip title="Close" sx={{ alignContent: "right", mr: "0px" }}>
            <IconButton
              sx={{
                alignContent: "right",
              }}
              onClick={handleClose}
            >
              <Close />
            </IconButton>
          </Tooltip>
        </DialogTitle>
        <DialogContent>
          <Grid2
            margin={0}
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Tooltip title="Facebook">
              <IconButton>
                <FacebookOutlined
                  sx={{ fontSize: 40, m: "3px", color: "#316FF6" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Youtube">
              <IconButton>
                <YouTube sx={{ fontSize: 40, m: "3px", color: "red" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton>
                <Instagram
                  sx={{
                    fontSize: 40,
                    m: "3px",
                    background:
                      " radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    borderRadius: "4px",
                    color: "white",
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton>
                <Twitter sx={{ fontSize: 40, m: "3px", color: "#1DA1F2" }} />
              </IconButton>
            </Tooltip>
          </Grid2>
          <TextField
            sx={{ m: 1, width: "55ch", borderRadius: "10px" }}
            defaultValue={window.location.href}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ mr: "3ch", mb: "3ch", mt: "0px", borderRadius: "4ch" }}
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              handleClose();
            }}
            variant="outlined"
          >
            Copy
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShareButton;
