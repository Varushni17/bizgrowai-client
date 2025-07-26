import requests

url = "http://127.0.0.1:8000/chat"

data = {
    "message": "Hello, what can you do?"
}

response = requests.post(url, json=data)

print("Response from chatbot:", response.json())
