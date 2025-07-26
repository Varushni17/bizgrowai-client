// src/api.js
export async function fetchChatbotResponse(query) {
  const response = await fetch('http://127.0.0.1:8000/api/get-ai-response/', {



    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const data = await response.json();
  return data.response;
}
