import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  IconButton,
  Grid,
  Checkbox,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function FlashcardForm() {
  const [decks, setDecks] = useState([
    {
      deckId: "",
      questions: [
        {
          question: "",
          responses: ["", ""],
          correctAnswer: 0,
        },
      ],
    },
  ]);

  const handleDeckIdChange = (index, value) => {
    const newDecks = [...decks];
    newDecks[index].deckId = value;
    setDecks(newDecks);
  };

  const handleQuestionChange = (dIndex, qIndex, value) => {
    const newDecks = [...decks];
    newDecks[dIndex].questions[qIndex].question = value;
    setDecks(newDecks);
  };

  const handleResponseChange = (dIndex, qIndex, rIndex, value) => {
    const newDecks = [...decks];
    newDecks[dIndex].questions[qIndex].responses[rIndex] = value;
    setDecks(newDecks);
  };

  const handleCorrectAnswerChange = (dIndex, qIndex, rIndex) => {
    const newDecks = [...decks];
    newDecks[dIndex].questions[qIndex].correctAnswer = rIndex;
    setDecks(newDecks);
  };

  const handleAddDeck = () => {
    setDecks([
      ...decks,
      {
        deckId: "",
        questions: [
          {
            question: "",
            responses: ["", "", ""],
            correctAnswer: 0,
          },
          {
            question: "",
            responses: ["", "", ""],
            correctAnswer: 0,
          },
        ],
      },
    ]);
  };

  const handleAddQuestion = (dIndex) => {
    const newDecks = [...decks];
    newDecks[dIndex].questions.push({
      question: "",
      responses: ["", "", ""],
      correctAnswer: 0,
    });
    setDecks(newDecks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Assumindo que o token JWT está armazenado no localStorage

    const flashcardData = {
      UserDecks: {
        Decks: decks,
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:9001/api/flashcards",
        flashcardData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      alert("Flashcards criados com sucesso!");
    } catch (error) {
      console.error("Erro ao criar os flashcards:", error);
      alert("Erro ao criar os flashcards.");
    }
  };

  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
          Criação de Flashcards
        </Typography>
        {decks.map((deck, dIndex) => (
          <Box key={dIndex} sx={{ mb: 2 }}>
            <TextField
              label={`ID do Deck ${dIndex + 1}`}
              type="text"
              fullWidth
              value={deck.deckId}
              onChange={(e) => handleDeckIdChange(dIndex, e.target.value)}
              required
              margin="normal"
            />
            {deck.questions.map((question, qIndex) => (
              <Box key={qIndex} sx={{ mb: 2 }}>
                <TextField
                  label={`Pergunta ${qIndex + 1}`}
                  type="text"
                  fullWidth
                  value={question.question}
                  onChange={(e) =>
                    handleQuestionChange(dIndex, qIndex, e.target.value)
                  }
                  required
                  margin="normal"
                />
                {question.responses.map((response, rIndex) => (
                  <Box
                    key={rIndex}
                    sx={{ display: "flex", alignItems: "center", mb: 1 }}
                  >
                    <TextField
                      label={`Resposta ${rIndex + 1}`}
                      type="text"
                      fullWidth
                      value={response}
                      onChange={(e) =>
                        handleResponseChange(
                          dIndex,
                          qIndex,
                          rIndex,
                          e.target.value
                        )
                      }
                      required
                      margin="normal"
                    />

                    <Checkbox
                      icon={<CheckBoxOutlineBlankIcon />}
                      checkedIcon={<CheckBoxIcon />}
                      checked={question.correctAnswer === rIndex}
                      onChange={() =>
                        handleCorrectAnswerChange(dIndex, qIndex, rIndex)
                      }
                    />
                  </Box>
                ))}
              </Box>
            ))}
            <Button
              type="button"
              variant="outlined"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => handleAddQuestion(dIndex)}
              sx={{ mb: 2 }}
            >
              Adicionar Pergunta
            </Button>
          </Box>
        ))}
        <Button
          type="button"
          variant="outlined"
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleAddDeck}
        >
          Adicionar Deck
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Criar Flashcards
        </Button>
      </Box>
    </Container>
  );
}

export default FlashcardForm;
