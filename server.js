import cors from "cors";
import express from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/usuarios", async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });
  api.interceptors.response.use(
    response => response,
    error => {
      console.error("Erro na API:", error);
      alert("Ocorreu um erro ao se comunicar com o servidor.");
      return Promise.reject(error);
    }
  );

  res.status(201).json(req.body);
});

app.get("/usuarios", async (req, res) => {
  let users = [];

  if (req.query) {
    users = await prisma.user.findMany({
      where: {
        name: req.query.name,
        email: req.query.email,
        age: req.query.age,
      },
    });
  }

  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  await prisma.user.update({
    where: {
      id: req.params.id, // convertendo para string
    },
    data: {
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
    },
  });

  res.status(201).json(req.body);
});

app.delete("/usuarios/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id, // Converta o ID para string
    },
  });

  res.status(200).json({ message: "Usuario deletado com sucesso!" });
});

app.listen(3000);

// BANCO DE DADOS - MONGO DB
// usuario: vitortisocimol
// senha: HMjRXaAU4ZDCvzyY
