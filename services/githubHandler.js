import { SLACK_WEBHOOK_URL } from "../config/env.js";

const githubHandler = async (req, res) => {
  const event = req.headers["x-github-event"];
  const payload = req.body;

  const pusher = payload.pusher?.name || "someone";
  const repo = payload.repository?.name || "repo";
  const msg = `🚀 *${pusher}* pushed to *${repo}*:\n${payload.head_commit?.message}`;

  try {
    await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: msg }),
    });
    console.log("Webhook received and sent to Slack");
    res.status(200).json({ message: "Webhook received and sent to Slack" });
  } catch (err) {
    console.log("Slack notification failed", err);
    res.status(500).json({ error: "Slack notification failed" });
  }
};

export default githubHandler;
