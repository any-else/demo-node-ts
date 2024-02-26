import express, { Express, Request, Response } from "express";
import { rootRoute } from "./routes";
import bodyParser from "body-parser";

const app: Express = express();

/** Middleware */
app.use(express.json());
app.use(bodyParser.json());

/** Router */
rootRoute(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
