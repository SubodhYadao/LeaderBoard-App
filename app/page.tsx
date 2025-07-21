"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Trophy, Crown, Medal, Star, Plus } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface User {
  _id: string
  name: string
  totalPoints: number
  rank: number
  avatar?: string
}

interface ClaimHistory {
  _id: string
  userId: string
  userName: string
  pointsAwarded: number
  timestamp: string
}

export default function LeaderboardApp() {
  const [users, setUsers] = useState<User[]>([])
  const [selectedUserId, setSelectedUserId] = useState<string>("")
  const [newUserName, setNewUserName] = useState("")
  const [claimHistory, setClaimHistory] = useState<ClaimHistory[]>([])
  const [lastClaimedPoints, setLastClaimedPoints] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)

  // Fetch users and leaderboard
  const fetchUsers = async () => {
    try {
      const response = await fetch("/api/users")
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.error("Error fetching users:", error)
    }
  }

  // Fetch claim history
  const fetchClaimHistory = async () => {
    try {
      const response = await fetch("/api/claim-history")
      const data = await response.json()
      setClaimHistory(data.slice(0, 10)) // Show last 10 claims
    } catch (error) {
      console.error("Error fetching claim history:", error)
    }
  }

  // Add new user
  const addUser = async () => {
    if (!newUserName.trim()) return

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newUserName.trim() }),
      })

      if (response.ok) {
        setNewUserName("")
        fetchUsers()
      }
    } catch (error) {
      console.error("Error adding user:", error)
    }
  }

  // Claim points for selected user
  const claimPoints = async () => {
    if (!selectedUserId) return

    setLoading(true)
    try {
      const response = await fetch("/api/claim-points", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: selectedUserId }),
      })

      const data = await response.json()
      if (response.ok) {
        setLastClaimedPoints(data.pointsAwarded)
        fetchUsers()
        fetchClaimHistory()
        setTimeout(() => setLastClaimedPoints(null), 3000)
      }
    } catch (error) {
      console.error("Error claiming points:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
    fetchClaimHistory()
  }, [])

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />
      default:
        return <Trophy className="w-5 h-5 text-gray-500" />
    }
  }

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-400 to-yellow-600"
      case 2:
        return "bg-gradient-to-r from-gray-300 to-gray-500"
      case 3:
        return "bg-gradient-to-r from-amber-400 to-amber-600"
      default:
        return "bg-gradient-to-r from-blue-400 to-blue-600"
    }
  }

  const topThree = users.slice(0, 3)
  const otherUsers = users.slice(3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-50 to-yellow-200">
      <div className="container mx-auto p-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🏆 Live Ranking</h1>
          <p className="text-gray-600">Claim points and climb the leaderboard!</p>
        </div>

        {/* User Management Section */}
        <Card className="mb-6 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="newUser">Add New User</Label>
                <Input
                  id="newUser"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                  placeholder="Enter user name"
                  onKeyDown={(e) => e.key === "Enter" && addUser()}
                />
              </div>
              <Button onClick={addUser} className="mt-6">
                Add User
              </Button>
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <Label htmlFor="userSelect">Select User to Claim Points</Label>
                <Select value={selectedUserId} onValueChange={setSelectedUserId}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a user" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user._id} value={user._id}>
                        {user.name} ({user.totalPoints} points)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={claimPoints}
                disabled={!selectedUserId || loading}
                className="mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
              >
                {loading ? "Claiming..." : "Claim Points"}
              </Button>
            </div>

            {lastClaimedPoints && (
              <div className="text-center p-4 bg-green-100 rounded-lg border-2 border-green-300">
                <p className="text-green-800 font-semibold">🎉 Awarded {lastClaimedPoints} points!</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Top 3 Users */}
        {topThree.length > 0 && (
          <Card className="mb-6 shadow-lg bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-center text-2xl">🏆 Top Champions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {topThree.map((user, index) => (
                  <div key={user._id} className="text-center">
                    <div className={`relative inline-block p-4 rounded-full ${getRankBadgeColor(user.rank)} shadow-lg`}>
                      <Avatar className="w-16 h-16 border-4 border-white">
                        <AvatarImage src={user.avatar || "/placeholder.svg"} />
                        <AvatarFallback className="text-lg font-bold">
                          {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-2 -right-2">{getRankIcon(user.rank)}</div>
                    </div>
                    <h3 className="font-bold text-lg mt-2">{user.name}</h3>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-semibold text-lg">{user.totalPoints.toLocaleString()}</span>
                    </div>
                    <Badge className={`mt-1 ${getRankBadgeColor(user.rank)} text-white`}>Rank #{user.rank}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Full Leaderboard */}
        <Card className="mb-6 shadow-lg">
          <CardHeader>
            <CardTitle>📊 Full Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {users.map((user) => (
                <div
                  key={user._id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full ${getRankBadgeColor(user.rank)} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {user.rank}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-500">Rank #{user.rank}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-bold text-lg">{user.totalPoints.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Claims History */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>📈 Recent Claims</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {claimHistory.map((claim) => (
                <div key={claim._id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                  <span className="font-medium">{claim.userName}</span>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">+{claim.pointsAwarded} pts</Badge>
                    <span className="text-xs text-gray-500">{new Date(claim.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
