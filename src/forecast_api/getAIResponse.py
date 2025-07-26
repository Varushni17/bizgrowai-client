def get_ai_response(message: str) -> str:
    if "hello" in message.lower():
        return "Hi there! How can I help you today?"
    elif "bye" in message.lower():
        return "Goodbye! Have a great day."
    else:
        return f"You said: {message}"
