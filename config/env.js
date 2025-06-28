import dotenv from "dotenv";
dotenv.config();

if (!process.env.WEBHOOK_SECRET) {
  throw new Error("WEBHOOK SECRET is required");
}

export const PORT = process.env.PORT || 3001;
export const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;
export const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
