import * as express from "express";
import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import reviews from "./routes/reviews";
import users from "./routes/users";

const app = express();
export const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/reviews", reviews);
app.use("/api/users", users);

const server = app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}/api`);
});
server.on("error", console.error);
