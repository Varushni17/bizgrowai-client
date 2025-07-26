// server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { OpenAI } from "openai";

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// OpenAI initialization
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Basic test route
app.get("/", (req, res) => {
  res.send("🚀 BizGrowAI Chatbot Backend is Running");
});

// Route: AI Response
app.post("/api/ai-response", async (req, res) => {
  const { input, context } = req.body;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo" if needed
      messages: [
        { role: "system", content: "You're a helpful AI assistant for business growth." },
        { role: "user", content: `${context}\n\n${input}` },
      ],
    });

    const reply = chatResponse.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error("AI Error:", error.message);
    res.status(500).json({ error: "AI response failed." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
