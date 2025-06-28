const githubHandler = (req, res) => {
  const event = req.headers["x-github-event"];
  const payload = req.body;

  console.log(`Received github event: ${event}`);
  console.log(JSON.stringify(payload, null, 2));

  res.status(200).json({ status: "success", data: event });
};

export default githubHandler;
