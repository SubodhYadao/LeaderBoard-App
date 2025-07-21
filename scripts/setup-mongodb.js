

const db = db.getSiblingDB("leaderboard")


db.users.insertMany([
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
])

db.users.createIndex({ totalPoints: -1 })
db.users.createIndex({ name: 1 }, { unique: true })


db.createCollection("claimHistory")
db.claimHistory.createIndex({ timestamp: -1 })
db.claimHistory.createIndex({ userId: 1 })

print("Database setup completed successfully!")
