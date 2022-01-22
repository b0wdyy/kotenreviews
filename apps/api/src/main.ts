import * as express from "express";

const app = express();

const greeting = { message: "Welcome to api!" };

app.get("/api", (_req, res) => {
  res.send(greeting);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log("Listening at http://localhost:" + port + "/api");
});
server.on("error", console.error);
