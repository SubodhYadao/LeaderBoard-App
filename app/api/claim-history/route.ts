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

// GET - Fetch claim history
export async function GET() {
  try {
    const mongoClient = await getMongoClient()
    const db = mongoClient.db(DB_NAME)

    const history = await db.collection("claimHistory").find({}).sort({ timestamp: -1 }).limit(50).toArray()

    const historyWithStringIds = history.map((record) => ({
      ...record,
      _id: record._id.toString(),
    }))

    return NextResponse.json(historyWithStringIds)
  } catch (error) {
    console.error("Error fetching claim history:", error)
    return NextResponse.json({ error: "Failed to fetch claim history" }, { status: 500 })
  }
}
