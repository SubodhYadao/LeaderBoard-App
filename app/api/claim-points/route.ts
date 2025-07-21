import { type NextRequest, NextResponse } from "next/server"
import { MongoClient, ObjectId } from "mongodb"

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

// POST - Claim random points for a user
export async function POST(request: NextRequest) {
  try {
    const { userId } = await request.json()

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    const mongoClient = await getMongoClient()
    const db = mongoClient.db(DB_NAME)

    // Find the user
    const user = await db.collection("users").findOne({ _id: new ObjectId(userId) })
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Generate random points (1-10)
    const pointsAwarded = Math.floor(Math.random() * 10) + 1

    // Update user's total points
    await db.collection("users").updateOne({ _id: new ObjectId(userId) }, { $inc: { totalPoints: pointsAwarded } })

    // Create claim history record
    const claimRecord = {
      userId: userId,
      userName: user.name,
      pointsAwarded: pointsAwarded,
      timestamp: new Date(),
    }

    await db.collection("claimHistory").insertOne(claimRecord)

    return NextResponse.json({
      success: true,
      pointsAwarded,
      newTotal: user.totalPoints + pointsAwarded,
    })
  } catch (error) {
    console.error("Error claiming points:", error)
    return NextResponse.json({ error: "Failed to claim points" }, { status: 500 })
  }
}
