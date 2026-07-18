import { HuggingFaceStream } from "ai";

export default async function handler(req, res) {
  const response = await fetch("https://api-inference.huggingface.co/models/distilgpt2", {
    headers: { Authorization: `Bearer ${process.env.HF_API_KEY}` },
    method: "POST",
    body: JSON.stringify({ inputs: req.body.prompt }),
  });
  const result = await response.json();
  res.status(200).json({ text: result[0].generated_text });
}
