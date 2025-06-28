import crypto from "crypto";

import { WEBHOOK_SECRET } from "../config/env.js";

const verifySignature = (req, res, next) => {
  const signature = req.headers["x-hub-signature-256"];
  const hmac = crypto.createHmac("sha256", WEBHOOK_SECRET);
  const digest = "sha256=" + hmac.update(req.rawBody).digest("hex");

  if (
    !signature ||
    !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(digest))
  ) {
    return res.status(403).send("Invalid signature");
  }

  next();
};

export default verifySignature;
