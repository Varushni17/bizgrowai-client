# forecast_api/getAIResponse.py

import os
import requests
from dotenv import load_dotenv

load_dotenv()  # Load variables from .env

def get_ai_response(message, business_profile):
    api_key = os.getenv("SERPER_API_KEY", "your_serper_api_key_here")  # Replace fallback if needed

    headers = {
        "X-API-KEY": api_key,
        "Content-Type": "application/json",
    }

    payload = {
        "q": f"{message} [Business Profile: {business_profile}]",
    }

    try:
        response = requests.post("https://google.serper.dev/search", json=payload, headers=headers)
        data = response.json()

        # Check for smart answer box
        if "answerBox" in data and data["answerBox"].get("answer"):
            return data["answerBox"]["answer"]
        # Else use first organic snippet
        elif "organic" in data and len(data["organic"]) > 0:
            return data["organic"][0]["snippet"]
        else:
            return "Sorry, I couldn’t find an exact answer, but I’m learning!"
    except Exception as e:
        return f"Error occurred: {str(e)}"
