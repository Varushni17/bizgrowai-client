from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend access (this is optional but useful)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Route to handle GET requests at http://127.0.0.1:8000/
@app.get("/")
def read_root():
    return {"message": "Welcome to the BizGrow AI Backend!"}

# ✅ Route to handle chat messages
@app.post("/chat")
async def chat(request: Request):
    data = await request.json()
    message = data.get("message", "")
    if not message:
        return {"response": "Please send a message."}
    return {"response": f"You said: {message}"}
