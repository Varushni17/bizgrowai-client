export async function getRecommendations(profile) {
  const response = await fetch("http://127.0.0.1:8000/recommendations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });

  const data = await response.json();
  return data.recommendations;
}
