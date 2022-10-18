import express, { Router } from "express";
import cors from "cors";
import { makePersonFactory } from "./src/factories/person-factory";

const app = express();
const router = Router();

const personFactory = makePersonFactory(router);

app.use(express.json());
app.use(cors());

app.use("/api", personFactory.route());

app.listen(3000, () => console.log("http://localhost:3000"));
