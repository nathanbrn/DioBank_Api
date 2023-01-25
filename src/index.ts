import { router } from './routes';
import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.use(router);

app.get("/", (request: Request, response: Response) => {
    return response.status(200).json({ message: "DioBank API" });
});



app.listen(3001, () => {
  console.log("🚀 Server is running on port 3001");
});