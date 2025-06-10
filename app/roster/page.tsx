"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Filter, Award } from "lucide-react"
import Link from "next/link"

export default function RosterPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [positionFilter, setPositionFilter] = useState("all")
  const [sortBy, setSortBy] = useState("number")

  const fullRoster = [
    {
      id: 1,
      name: "Khaing Khant Aung",
      position: "GoalKeeper",
      number: "1",
      height: "5'8\"",
      weight: "220 lbs",
      age: 23,
      experience: "University participation",
      college: "Dagon University",
      hometown: "Yangon, myanmar",
      stats: {
        foot: "Right",
        rpg: "?",
        apg: "?",
        fg: 47.3,
        ft: 82.1,
        threePt: 35.6,
      },
      bio: "Team Goalkeeper. Known for his clutch performances and leadership on the court.",
      achievements: ["All-Star 2023", "Team GoalKeeper", "Unversity Chanpion 2022"],
    },
    {
      id: 2,
      name: "Htet Wunna Aung",
      position: "Central Back",
      number: "4",
      height: "5'3\"",
      weight: "185 lbs",
      age: 21,
      experience: "University participation",
      college: "East Yangon University",
      hometown: "Yangon, Myanmar",
      stats: {
        foot: "Right",
        rpg: 4,
        apg: 10,
        fg: 44.8,
        ft: 88.5,
        threePt: 38.2,
      },
      bio: "Playing Central Back and Defence Midfielder. Leads the team in assists and defence.",
      achievements: ["Best Defender 2023", "Yangon Galaxy Team 2022"],
    },
    {
      id: 3,
      name: "Maw Khoon",
      position: "Right Back",
      number: "3",
      height: "5'1\"",
      weight: "120 lbs",
      age: 23,
      experience: "?",
      college: "?",
      hometown: "Yangon, Myanmar",
      stats: {
        foot: "Right",
        rpg: 11.2,
        apg: 2.1,
        fg: 52.1,
        ft: 71.3,
        threePt: 28.9,
      },
      bio: "Dominant presence in the paint. Anchor of the team's defense with excellent shot-blocking ability.",
      achievements: [ "All-Star 2021"],
    },
    {
      id: 4,
      name: "Shin Thant Aung",
      position: "Central Back",
      number: "2",
      height: "5'0\"",
      weight: "140 lbs",
      age: 21,
      experience: "?",
      college: "?",
      hometown: "yangon, Myanmar",
      stats: {
        foot: "Right",
        rpg: 4.5,
        apg: 3.2,
        fg: 45.7,
        ft: 85.2,
        threePt: 41.3,
      },
      bio: "Sharpshooter with unlimited range. One of the league's most reliable three-point threats.",
      achievements: ["?"],
    },
    {
      id: 5,
      name: "Aung Thant Hein",
      position: "Left Back",
      number: "17",
      height: "5'1\"",
      weight: "120 lbs",
      age: 21,
      experience: "State Participation",
      college: "?",
      hometown: "yangon, Myanmar",
      stats: {
        foot: "Right",
        rpg: 8.7,
        apg: 2.8,
        fg: 48.9,
        ft: 76.8,
        threePt: 33.1,
      },
      bio: "Versatile forward who can play inside and out. Veteran leadership and playoff experience.",
      achievements: ["Championship Winner 2020", "All-Star 2019"],
    },
    {
      id: 6,
      name: "Han Lin Htet",
      position: "Right Winger",
      number: "11",
      height: "5'3\"",
      weight: "100 lbs",
      age: 19,
      experience: "High School Champion",
      college: "?",
      hometown: "yangon, Myanmar",
      stats: {
        foot: "Left",
        rpg: 5.3,
        apg: 4.1,
        fg: 46.2,
        ft: 79.4,
        threePt: 36.8,
      },
      bio: "Rising star with incredible athleticism. Excellent defender with improving offensive skills.",
      achievements: ["Rising Stars Game 2024", "All-Rookie Second Team 2023"],
    },
    {
      id: 7,
      name: "Han Htoo Aung",
      position: "Attacking Midfielder",
      number: "8",
      height: "5'5\"",
      weight: "110 lbs",
      age: 21,
      experience: "?",
      college: "?",
      hometown: "yangon, Myanmar",
      stats: {
        foot: "Right",
        rpg: 2.8,
        apg: 6.7,
        fg: 42.1,
        ft: 83.6,
        threePt: 34.5,
      },
      bio: "Rookie sensation with great potential. Quick learner with excellent basketball IQ.",
      achievements: ["Rookie of the Month - November 2024"],
    },
    {
      id: 8,
      name: "Aung Kyaw Min",
      position: "Degfensive Midfielder",
      number: "6",
      height: "4'9\"",
      weight: "110 lbs",
      age: 23,
      experience: "University participation",
      college: "Dagon University",
      hometown: "yangon, Myanmar",
      stats: {
        foot: "Right",
        rpg: 7.9,
        apg: 1.4,
        fg: 51.3,
        ft: 68.9,
        threePt: 25.0,
      },
      bio: "Reliable backup center with strong fundamentals. Great team player and locker room presence.",
      achievements: ["Community Service Award 2023"],
    },
  ]

  const filteredRoster = fullRoster
    .filter(
      (player) =>
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.number.includes(searchTerm),
    )
    .filter((player) => positionFilter === "all" || player.position === positionFilter)
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name)
        case "position":
          return a.position.localeCompare(b.position)
        case "ppg":
          return (Number(b.stats.rpg) ?? 0) - (Number(a.stats.rpg) ?? 0)
        default:
          return Number.parseInt(a.number) - Number.parseInt(b.number)
      }
    })

  const positions = ["Forward", "Midfielder", "Second Forward", "Defender", "GoalKeeper"]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
            <div className="h-6 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-xl">Football Team</span>
            </div>
          </div>
          <Button className="bg-pink-600 hover:bg-pink-700">Get Tickets</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-pink-50 to-pink-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Team Players</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the talented athletes who make up the NCU Ai Department family. Each player brings unique skills and
              dedication to our championship pursuit.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search players by name, position, or number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={positionFilter} onValueChange={setPositionFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Filter by position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="number">Jersey Number</SelectItem>
                <SelectItem value="name">Name</SelectItem>
                <SelectItem value="position">Position</SelectItem>
                <SelectItem value="ppg">Points Per Game</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Roster Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRoster.map((player) => (
              <Card key={player.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="relative mb-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={`/placeholder.svg?height=96&width=96`} />
                      <AvatarFallback className="text-xl font-semibold bg-pink-100 text-pink-800">
                        {player.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      {player.number}
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-pink-600 transition-colors">{player.name}</CardTitle>
                  <CardDescription className="font-medium">{player.position}</CardDescription>
                  <div className="flex justify-center space-x-4 text-sm text-muted-foreground mt-2">
                    <span>{player.height}</span>
                    <span>•</span>
                    <span>{player.weight}</span>
                    <span>•</span>
                    <span>Age {player.age}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <div className="font-bold text-lg text-pink-600">{player.stats.foot}</div>
                      <div className="text-xs text-muted-foreground">Strong foot</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-pink-600">{player.stats.rpg}</div>
                      <div className="text-xs text-muted-foreground">goal</div>
                    </div>
                    <div>
                      <div className="font-bold text-lg text-pink-600">{player.stats.apg}</div>
                      <div className="text-xs text-muted-foreground">assists</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">College:</span>
                      <span className="font-medium">{player.college}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Experience:</span>
                      <span className="font-medium">{player.experience}</span>
                    </div>
                  </div>

                  {player.achievements.length > 0 && (
                    <div className="space-y-2">
                      <div className="text-sm font-medium flex items-center">
                        <Award className="w-4 h-4 mr-1 text-pink-600" />
                        Achievements
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {player.achievements.slice(0, 2).map((achievement, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-pink-50 text-pink-700">
                            {achievement}
                          </Badge>
                        ))}
                        {player.achievements.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{player.achievements.length - 2} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredRoster.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground mb-4">No players found matching your search criteria.</div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setPositionFilter("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Team Stats Overview */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Team Statistics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {(fullRoster.reduce((sum, player) => sum + (Number(player.stats.rpg) || 0), 0) / fullRoster.length).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Goals Per Game</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {(fullRoster.reduce((sum, player) => sum + (Number(player.stats.rpg) || 0), 0) / fullRoster.length).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Ranking Per Game</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {(fullRoster.reduce((sum, player) => sum + (Number(player.stats.apg) || 0), 0) / fullRoster.length).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Avg Assists Per Game</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-pink-600 mb-2">
                  {(fullRoster.reduce((sum, player) => sum + player.age, 0) / fullRoster.length).toFixed(1)}
                </div>
                <div className="text-sm text-muted-foreground">Average Age</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Coaching Staff */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Head of Department</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="text-lg font-semibold bg-pink-100 text-pink-800">MR</AvatarFallback>
                </Avatar>
                <CardTitle>Mr Rohit</CardTitle>
                <CardDescription>Head Of Ai and DataScience (NCU)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="text-lg font-semibold bg-pink-100 text-pink-800">TT</AvatarFallback>
                </Avatar>
                <CardTitle>Tr Thway</CardTitle>
                <CardDescription>Assistant Tr</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback className="text-lg font-semibold bg-pink-100 text-pink-800">MD</AvatarFallback>
                </Avatar>
                <CardTitle>Mr Deruv</CardTitle>
                <CardDescription>Assistant Tr</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
