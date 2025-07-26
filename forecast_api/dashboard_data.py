# dashboard_data.py
from fastapi import APIRouter
from datetime import datetime, timedelta

router = APIRouter()

@router.get("/dashboard-data")
def get_dashboard_data():
    today = datetime.today()
    last_7_days = [(today - timedelta(days=i)).strftime("%Y-%m-%d") for i in reversed(range(7))]

    return {
        "sales": [{"date": d, "amount": 1000 + i * 200} for i, d in enumerate(last_7_days)],
        "inventory": [{"item": f"Item {i+1}", "stock": 50 - i * 5} for i in range(5)],
        "leads": [{"date": d, "count": 10 + i * 2} for i, d in enumerate(last_7_days)],
        "marketing": [{"channel": "Instagram", "reach": 2500}, {"channel": "Email", "reach": 1800}]
    }
