import express from "express";
import webhookRoutes from "./routes/webhook.js";

const app = express();

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.use("/webhook", webhookRoutes);

export default app;
