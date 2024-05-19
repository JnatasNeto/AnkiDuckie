import React, { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import axios from "axios";
import { GOOGLE_API_KEY } from "./config";

// Importando módulos e componentes necessários

export function Gemini() {
  // Criando uma instância do GoogleGenerativeAI com a chave API fornecida
  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);

  // Definindo o nome do modelo generativo a ser utilizado
  const MODEL_NAME = "gemini-1.5-pro-latest";

  // Obtendo a instância do modelo generativo
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  // Utilizando hooks do React para gerenciar o estado
  const [value, setValue] = useState(""); // Estado para o valor de entrada do usuário
  const [chatHistoryUser, setChatHistoryUser] = useState([]); // Estado para o histórico de chat do usuário
  const [chatHistoryModel, setChatHistoryModel] = useState([]); // Estado para o histórico de chat do modelo

  // Atualizando o histórico de chat do usuário com a última entrada
  const updatedChatHistoryUser = [...chatHistoryUser, value];

  // Recuperando a última mensagem enviada pelo modelo
  const lastModelMessage = chatHistoryModel.slice(-1)[0];

  // Função para perguntar algo ao modelo Gemini
  async function askGemini() {
    // Iniciando uma sessão de chat com o modelo
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: updatedChatHistoryUser.join("") }],
        },
        {
          role: "model",
          parts: [{ text: lastModelMessage || "" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000, // Limitando o número máximo de tokens na saída gerada
      },
    });

    const msg = value; // Atribuindo a mensagem de entrada do usuário
    const result = await chat.sendMessageStream(msg); // Enviando a mensagem para o modelo para processamento

    let text = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText; // Acumulando os pedaços de texto recebidos do modelo
    }

    // Atualizando o histórico de chat com a resposta do modelo
    setChatHistoryModel((prevChatHistoryModel) => [
      ...prevChatHistoryModel,
      text,
    ]);

    // Atualizando o histórico de chat do usuário com a última entrada
    setChatHistoryUser(updatedChatHistoryUser);
  }

  // Função para criar uma pergunta com base na entrada do usuário
  async function createQuestion() {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash-latest",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Crie 5 perguntas, cada pergunta deve ter 4 opções de resposta e apenas uma deve ser correta, e a resposta correta deve vir logo após as opções de resposta, com o texto fornecido. Me retorne somente as perguntas e respostas, nenhum texto, além disso",
            },
          ],
        },
        {
          role: "model",
          parts: [[{ text: lastModelMessage || "" }]],
        },
        {
          role: "user",
          parts: [
            {
              text: "Coloque essas perguntas e respostas para ficar de acordo com esse estrutura, não me retorne nenhum texto além dessa estrutura: const UserFlashcards = {   userId: 'user_id_here',   flashcards: [     {       flashcardId: 'flashcard_id_1',       questions: [         {           question: 'Question 1',           responses: ['Response 1', 'Response 2', 'Response 3'],           correctAnswer: 0         },         {           question: 'Question 2',           responses: ['Response A', 'Response B', 'Response C'],           correctAnswer: 1         }         // Add more questions here if needed       ]     },     // Adicionar mais flashcards aqui   ] };",
            },
          ],
        },
        {
          role: "model",
          parts: [
            {
              text: '{\n  "UserDecks": {\n    "Decks": [\n      {\n        "DeckId": "dekc_id_title",\n        "questions": [\n          {\n            "question": "",\n            "responses": [\n              "",\n              "",\n              "",\n              ""\n            ],\n            "correctAnswer": 2\n          },\n          {\n            "question": "",\n            "responses": [\n              "",\n              "",\n              "",\n              ""\n            ],\n            "correctAnswer": 2\n          },\n          {\n            "question": "",\n            "responses": [\n              "",\n              "",\n              "",\n              ""\n            ],\n            "correctAnswer": 3\n          },\n          {\n            "question": "",\n            "responses": [\n              "",\n              "",\n              "",\n              ""\n            ],\n            "correctAnswer": 3\n          },\n          {\n            "question": "",\n            "responses": [\n              "",\n              "",\n              "",\n              ""\n            ],\n            "correctAnswer": 0\n          }\n        ]\n      }\n    ]\n  }\n}',
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(lastModelMessage);
    const responseObject = JSON.parse(result.response.text());
    console.log(responseObject);

    // Enviar o JSON para o backend
    try {
      const response = await axios.post(
        "http://localhost:9001/api/flashcards",
        responseObject,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "SECRET",
          },
        }
      );
      console.log("Sucesso:", response.data);
    } catch (error) {
      console.error("Erro:", error);
    }
  }

  return (
    <section className="container-fluid">
      <form>
        <div className="prompt-box">
          <label>
            <input
              name="prompt"
              placeholder="O que você quer saber?"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <button type="button" onClick={askGemini}>
            perguntar
          </button>
          <button type="button" onClick={createQuestion}>
            Criar
          </button>
        </div>
      </form>
      <div className="chat-history">
        {chatHistoryUser.map((userMessage, index) => (
          <React.Fragment key={index}>
            <p>User: {userMessage}</p>
            {chatHistoryModel[index] && <p>Model: {chatHistoryModel[index]}</p>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
