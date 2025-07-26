# chat.py
from fastapi import APIRouter, Request
from getAIResponse import get_ai_response

router = APIRouter()

@router.post("/chat")
async def chat(request: Request):
    data = await request.json()
    message = data.get("message")
    business_profile = data.get("businessProfile", {})
    response = await get_ai_response(message, business_profile)
    return {"response": response}
