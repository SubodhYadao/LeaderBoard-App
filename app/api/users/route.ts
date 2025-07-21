import { type NextRequest, NextResponse } from "next/server"
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

// GET - Fetch all users with rankings
export async function GET() {
  try {
    const mongoClient = await getMongoClient()
    const db = mongoClient.db(DB_NAME)
    const users = await db.collection("users").find({}).sort({ totalPoints: -1 }).toArray()

    // Add rankings
    const usersWithRanks = users.map((user, index) => ({
      ...user,
      _id: user._id.toString(),
      rank: index + 1,
    }))

    return NextResponse.json(usersWithRanks)
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 })
  }
}

// POST - Add new user
export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json()

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const mongoClient = await getMongoClient()
    const db = mongoClient.db(DB_NAME)

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ name: name.trim() })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const newUser = {
      name: name.trim(),
      totalPoints: 0,
      createdAt: new Date(),
    }

    const result = await db.collection("users").insertOne(newUser)

    return NextResponse.json(
      {
        _id: result.insertedId.toString(),
        ...newUser,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error adding user:", error)
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 })
  }
}
