// src/api/getAIResponse.js
export const getAIResponse = async (question, businessProfile) => {
  try {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ question, businessProfile })
    });

    const data = await res.json();
    return data.answer;
  } catch (error) {
    console.error("AI Response Error:", error);
    return "Sorry, I couldn't fetch an answer right now.";
  }
};
