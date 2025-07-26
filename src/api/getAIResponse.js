// src/api/getAIResponse.js

export const getAIResponse = async (question, profile) => {
  try {
    const response = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, profile }),
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.statusText}`);
    }

    const data = await response.json();
    return data.answer || "Sorry, I couldn't find an answer.";
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Sorry, something went wrong while fetching the answer.";
  }
};
