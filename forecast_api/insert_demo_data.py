import asyncio
from models import Revenue, Product
from database import AsyncSessionLocal, engine, Base

async def seed_data():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    async with AsyncSessionLocal() as session:
        # Add monthly revenue data
        session.add_all([
            Revenue(month="January", revenue=12000),
            Revenue(month="February", revenue=15000),
            Revenue(month="March", revenue=18000),
            Revenue(month="April", revenue=20000),
        ])

        # Add product performance data
        session.add_all([
            Product(product="T-Shirt", sales=500),
            Product(product="Shoes", sales=300),
            Product(product="Cap", sales=150),
            Product(product="Jeans", sales=200),
        ])

        await session.commit()
        print("✅ Demo data inserted successfully.")

asyncio.run(seed_data())
