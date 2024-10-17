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

  res.status(201).json(req.body);
});

app.get("/usuarios", async (req, res) => {
  const users = await prisma.user.findMany();

  res.status(200).json(users);
});

app.put("/usuarios/:id", async (req, res) => {
  console.log(req);

  await prisma.user.update({
    where: {
      id: req.params.id,
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
      id: req.params.id,
    },
  });

  res
    .status(200)
    .json({ message: "Usuario deletado com sucess, ouuei yeeear!!!" });
});

app.listen(3000);

// BANCO DE DADOS - MONGO DB
// usuario: vitortisocimol
// senha: HMjRXaAU4ZDCvzyY
