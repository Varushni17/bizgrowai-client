export const callOpenAI = async (prompt) => {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `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`, // Replace this
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content?.trim();
};

export const callSerperAI = async (query) => {
  const res = await fetch("https://google.serper.dev/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": "4a05cb980f0e43309ae8bae5d5f39ba17c0b2f5b", // Replace this
    },
    body: JSON.stringify({ q: query }),
  });

  const data = await res.json();
  return data?.organic?.[0]?.snippet || null;
};
