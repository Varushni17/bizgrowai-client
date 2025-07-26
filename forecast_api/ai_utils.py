import os
import httpx

SERPER_API_KEY = os.getenv("b79fd425240e17c2c8e6404e474f2fa996c807f5")  # or hardcode temporarily

async def generate_recommendations(summary, products):
    prompt = f"""
You're an AI business assistant. Based on this business data, give 3 helpful recommendations:

Summary:
- Total Revenue: ₹{summary['total_revenue']}
- Active Customers: {summary['active_customers']}
- Pending Orders: {summary['pending_orders']}
- Top Region: {summary['top_region']}

Top Products:
{products}

Give tips to improve operations or increase profit.
"""

    headers = {
        "X-API-KEY": SERPER_API_KEY,
        "Content-Type": "application/json"
    }

    payload = {
        "q": prompt,
        "gl": "in",
        "hl": "en",
    }

    async with httpx.AsyncClient() as client:
        res = await client.post("https://google.serper.dev/chat", headers=headers, json=payload)
        result = res.json()
        message = result.get("text", "")

    # Clean result into a list
    return [line.strip("-• ") for line in message.split("\n") if line.strip()]
