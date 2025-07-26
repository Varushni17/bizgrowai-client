const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// POST endpoint to search info using Serper + ChatGPT fallback
app.post('/api/search', async (req, res) => {
  const { message } = req.body;

  try {
    // Step 1: Try Serper API
    const serperResponse = await axios.post(
      'https://google.serper.dev/search',
      { q: message },
      {
        headers: {
          'X-API-KEY': '4a05cb980f0e43309ae8bae5d5f39ba17c0b2f5b',
          'Content-Type': 'application/json',
        },
      }
    );

    const result = serperResponse.data.organic?.[0];
    if (result?.snippet) {
      const answer = `${result.title}: ${result.snippet}`;
      return res.json({ reply: answer });
    }

    // Step 2: Fallback to OpenAI ChatGPT if no good answer
    const chatGptResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const chatAnswer = chatGptResponse.data.choices?.[0]?.message?.content || "No response from ChatGPT.";
    res.json({ reply: chatAnswer });
  } catch (error) {
    console.error("Search Error:", error.message);
    res.status(500).json({ reply: "Oops! Couldn't fetch info right now." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ BizGrowAI server is running on http://localhost:${PORT}`);
});
