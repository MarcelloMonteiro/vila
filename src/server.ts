import express from "express";

const app = express();

app.listen(3000, () => {
  console.log(`TESTE ${process.env.PROJECT_NAME}`)
});