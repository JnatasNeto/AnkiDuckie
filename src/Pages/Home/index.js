import * as React from "react";
import { Link } from "react-router-dom";
// Body
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
//  Typography, Header
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
// Style
import "./style.css";

//Imagens Card
const CardAzul =
  require("../../assets/images/cards-home/Card-Home-Azul.svg").ReactComponent;
const CardLaranja =
  require("../../assets/images/cards-home/Card-Home-Laranja.svg").ReactComponent;
const CardRosa =
  require("../../assets/images/cards-home/Card-Home-Rosa.svg").ReactComponent;
const CardRoxo =
  require("../../assets/images/cards-home/Card-Home-Roxo.svg").ReactComponent;
const CardVerde =
  require("../../assets/images/cards-home/Card-Home-Verde.svg").ReactComponent;
const CardVermelho =
  require("../../assets/images/cards-home/Card-Home-Vermelho.svg").ReactComponent;

const Logo = require("../../logo.svg").ReactComponent;

function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="100vw"
        sx={{
          height: "100vh",
          margin: "0px !important",
          padding: "0px !important",
          overflow: "hidden",
          bgcolor: "#cfe8fc",
        }}
      >
        {/* Header */}
        <AppBar
          position="static"
          sx={{
            background: "transparent",
            boxShadow: "none",
            color: "black",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box>
              <Logo />
            </Box>
            <Box>
              <Link to="/subscribe">
                <Button
                  variant="text"
                  color="inherit"
                  sx={{
                    background: "none",
                    textTransform: "capitalize",
                    padding: ".5rem 1rem",
                    color: "black"
                  }}
                >
                  Cadastrar
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="text"
                  sx={{
                    background: "linear-gradient(45deg, #20212B, #16171F)",
                    padding: ".5rem 1rem",
                    borderRadius: ".5rem",
                    textTransform: "capitalize",
                    color: "#FFF",
                  }}
                >
                  Login
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        {/* Contation */}
        <Box
          component="section"
          sx={{
            height: "-webkit-fill-available",
            alignContent: "space-around",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: '"Plus Jakarta Sans", "Poppins", sans-serif',
                fontWeight: 600,
                lineHeight: "normal",
                textAlign: "center",
              }}
            >
              Aprenda com flashcards,
              <br /> estude menos!
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                fontWeight: 500,
                lineHeight: "normal",
                textAlign: "center",
              }}
              gutterBottom
            >
              Esqueça o medo das provas e aprenda idiomas com facilidade! <br />
              A repetição espaçada, com comprovação científica, é a sua aliada.
            </Typography>
          </Box>
          <Box>
            <Box
              className="ContainerCards-1"
              sx={{
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                gap: ".5rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardAzul className="Card-Column-1" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardLaranja className="Card-Column-1" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardRosa className="Card-Column-1" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardRoxo className="Card-Column-1" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardVerde className="Card-Column-1" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardVermelho className="Card-Column-1" />
              </Box>
            </Box>
            <Box
              className="ContainerCards-2"
              sx={{
                width: "fit-content",
                display: "flex",
                flexDirection: "row",
                gap: ".5rem",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardAzul className="Card-Column-2" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardLaranja className="Card-Column-2" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardRosa className="Card-Column-2" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardRoxo className="Card-Column-2" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardVerde className="Card-Column-2" />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: ".5rem",
                  width: "20rem",
                  transform: "scale(1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <CardVermelho className="Card-Column-2" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Home;