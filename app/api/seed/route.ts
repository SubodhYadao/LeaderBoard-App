import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
const DB_NAME = "leaderboard"

let client: MongoClient | null = null

async function getMongoClient() {
  if (!client) {
    client = new MongoClient(MONGODB_URI)
    await client.connect()
  }
  return client
}

// POST - Seed initial users
export async function POST() {
  try {
    const mongoClient = await getMongoClient()
    const db = mongoClient.db(DB_NAME)

    // Check if users already exist
    const existingUsers = await db.collection("users").countDocuments()
    if (existingUsers > 0) {
      return NextResponse.json({ message: "Users already exist" })
    }

    const initialUsers = [
      { name: "Rahul", totalPoints: 0, createdAt: new Date() },
      { name: "Kamal", totalPoints: 0, createdAt: new Date() },
      { name: "Sanak", totalPoints: 0, createdAt: new Date() },
      { name: "Priya", totalPoints: 0, createdAt: new Date() },
      { name: "Amit", totalPoints: 0, createdAt: new Date() },
      { name: "Sneha", totalPoints: 0, createdAt: new Date() },
      { name: "Vikram", totalPoints: 0, createdAt: new Date() },
      { name: "Anita", totalPoints: 0, createdAt: new Date() },
      { name: "Ravi", totalPoints: 0, createdAt: new Date() },
      { name: "Meera", totalPoints: 0, createdAt: new Date() },
    ]

    await db.collection("users").insertMany(initialUsers)

    return NextResponse.json({
      message: "Successfully seeded 10 initial users",
      count: initialUsers.length,
    })
  } catch (error) {
    console.error("Error seeding users:", error)
    return NextResponse.json({ error: "Failed to seed users" }, { status: 500 })
  }
}
