import * as React from "react";

import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
// Body
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//  Typography
import Typography from "@mui/material/Typography";
// Header
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// Input
import { Input } from "@mui/base/Input";

// Images
import BackgroundImageHome from "../../assets/images/Background-Gradient.svg";
const Logo = require("../../logo.svg").ReactComponent;

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{
          margin: "0",
          padding: "0 !important",
          minWidth: "100vw",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            bgcolor: "#cfe8fc",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
            backgroundImage: `url('${BackgroundImageHome}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <AppBar
            position="static"
            sx={{
              background: "transparent",
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            <Toolbar sx={{ justifyContent: "space-between" }}>
              <Logo />
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "top",
              alignItems: "center",
              height: "-webkit-fill-available",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF" }}
            >
              Aprenda com flashcards, <br /> estude menos!
            </Typography>

            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "25ch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  variant="filled"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  variant="filled"
                />
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="filled"
                />
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Home;
