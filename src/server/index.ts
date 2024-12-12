import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

app.post("/upload", (req: Request, res: Response) => {
  const { make, model, badge, logbook } = req.body;

  if (!make || !model || !badge || !logbook) {
    res.status(400).json({ error: "Required field missing" });
  }

  try {
    res.status(200).send({ make, model, badge, logbook });
  } catch (error) {
    console.error(error);
  }
});

// TODO: If we want to make this application live
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
