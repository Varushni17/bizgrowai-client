# forecast_api/app.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from forecast_api.getAIResponse import get_ai_response  # ✅ absolute import

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    message = data.get("message", "")
    business_profile = data.get("businessProfile", "")

    ai_response = get_ai_response(message, business_profile)
    return {"reply": ai_response}
