import connectToMongo from "./db.js";
import express from "express";
import cors from "cors";
import form from "./routes/form.js";
// const express = require("express");
// var cors = require("cors");
// const connectToMongo = require("./db");

connectToMongo();
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use("/api/form", form);

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
