import * as React from "react";

//import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
// Body
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
//  Typography
import Typography from "@mui/material/Typography";
// Header
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";



// Images
import BackgroundImageHome from "../../assets/images/Background-Gradient.svg";
const CardAzul =
  require("../../assets/images/cards-home/Azul.svg").ReactComponent;
const CardVerde =
  require("../../assets/images/cards-home/Verde.svg").ReactComponent;
const CardRosa =
  require("../../assets/images/cards-home/Rosa.svg").ReactComponent;
const Logo = require("../../logo.svg").ReactComponent;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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
            height: "95vh",
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
              paddingRight: "2rem"
            }}
          >
            <Toolbar sx={{justifyContent: "space-between"}}>
              <Logo/>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  background: "#FFF",
                  color: "#000",
                  boxShadow: "none",
                  borderRadius: ".625rem",
                  "&:hover": {
                    boxShadow: "none",
                    background: "#FFF",
                  },
                }}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "-webkit-fill-available",
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF" }}
            >
              Aprenda com flashcards, <br /> estude menos!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ textAlign: "center", color: "#FFF" }}
            >
              Esqueça o medo das provas e aprenda idiomas com facilidade! <br />{" "}
              A repetição espaçada, com comprovação científica, é a sua aliada.
            </Typography>
            <Button
              variant="contained"
              size="medium"
              sx={{
                width: "max-content",
                padding: "1rem",
                borderRadius: "1.5rem",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                },
              }}
            >
              Começar Agora
            </Button>
          </Box>
        </Box>
        <Box>
          <Box sx={{ flexGrow: 1, padding: "3rem 3rem" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CardAzul />
                </Box>
                <Box sx={{ marginTop: "-6rem" }}>
                  <CardVerde />
                </Box>
                <Box sx={{ marginTop: "-6rem" }}>
                  <CardRosa />
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sx={{ alignSelf: "center" }}>
                <Typography variant="h3" component="h3">
                  Esquecer? Jamais! A era da memória impecável chegou!
                </Typography>
                <Typography variant="h6" component="h6">
                  Lembrar-se de tudo se tornou tão simples quanto amarrar os
                  cadarços. Tarefas, compromissos, ideias geniais... nada mais
                  escapa da sua mente afiada!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Home;