import asyncio
from models import Base, Revenue, Product, Recommendation
from database import engine, AsyncSessionLocal

async def init_db():
    # Step 1: Create tables
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    # Step 2: Insert test data
    async with AsyncSessionLocal() as session:
        session.add_all([
            Revenue(month="Jan", revenue=12000),
            Revenue(month="Feb", revenue=18000),
            Revenue(month="Mar", revenue=24000),
            Product(product="T-Shirt", sales=400),
            Product(product="Shoes", sales=230),
            Recommendation(text="Restock T-Shirts"),
            Recommendation(text="Launch campaign in Chennai")
        ])
        await session.commit()

# Run the async function
asyncio.run(init_db())
