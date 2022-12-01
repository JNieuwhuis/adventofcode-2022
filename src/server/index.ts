import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";

const app: Express = express();

app.use(express.static(path.join(__dirname, "../../public")));

app.get("/", (req: Request, res: Response, next: NextFunction): void => {
  try {
    res.sendFile("index.html");
  } catch (error) {
    next(error);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
