import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, MapPin, Trophy, Star, ArrowRight, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function SportTeamWebsite() {
  const players = [
    { name: "Khaing Khant Aung", position: "GoalKeeper", number: "1", stats: "21 age" },
    { name: "Htet Wunna Aung", position: "CentralBack", number: "2", stats: "Captain" },
    { name: "Maw Khoon", position: "RightBack", number: "3", stats: "22 age" },
    { name: "Aung Thant Hein", position: "LeftBack", number: "20", stats: "21 age" },
  ]

  const upcomingGames = [
    { opponent: "NCU Team", date: "?", time: "?", location: "NCU Field-1" },
    { opponent: "NCU Team", date: "?", time: "?", location: "NCU Field-1" },
    { opponent: "Indian College Team", date: "Dec", time: "?", location: "NCU Stadium" },
  ]

  const recentNews = [
    {
      title: "New Finalists in the Championship",
      excerpt: "After many games, We filtered the finalists.We are proud to announce that our team has made it to the finals of the 2025 North ChiangMai University Championship.",
      date: "Oct 10, 2024",
    },
    {
      title: "Marcus Johnson Named Player of the Month",
      excerpt: "Our star forward receives recognition for outstanding performance in November.",
      date: "Dec 8, 2024",
    },
    {
      title: "New Training Facility Opens",
      excerpt: "State-of-the-art facility will enhance player development and fan experience.",
      date: "Dec 5, 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-xl">Football Team</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Home
            </Link>
            <Link href="/roster" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Roster
            </Link>
            <Link href="#schedule" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Schedule
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-pink-600 transition-colors">
              News
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-pink-600 transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-pink-600 hover:bg-pink-700">Get Tickets</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100"></div>
        <div className="container mx-auto px-4 lg:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">2025 North ChiangMai University Championship Finalists</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                <span className="text-pink-600">AI</span>
                Football
                <span className="text-pink-600"> Team</span>
              </h1>
              <p className="text-sm text-muted-foreground max-w-lg">
                We are a football club representing North ChiangMai University, AI and DataScience Department. Our aim is to produce outstanding footballers from university level to national level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  Buy Season Tickets
                </Button>
                <Button size="lg" variant="outline">
                  Watch Highlights
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Wins</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">6</div>
                  <div className="text-sm text-muted-foreground">Losses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">#3</div>
                  <div className="text-sm text-muted-foreground">League Rank</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/photos/ncu.png"
                alt="Lightning Wolves Team"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-8 h-8 text-pink-600" />
                  <div>
                    <div className="font-semibold">Next Game</div>
                    <div className="text-sm text-muted-foreground">Dec  vs India Colleg Team</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Roster */}
      <section id="roster" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our talented roster of athletes dedicated to excellence on and off the court.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={`/placeholder.svg?height=80&width=80`} />
                    <AvatarFallback className="text-lg font-semibold bg-pink-100 text-pink-800">
                      {player.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{player.name}</CardTitle>
                  <CardDescription>
                    {player.position} • #{player.number}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-pink-50 text-pink-700">
                    {player.stats}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/roster">
              <Button variant="outline" size="lg">
                View Full Roster <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Upcoming Games</h2>
            <p className="text-xl text-muted-foreground">Don't miss our next games. Get your tickets now!</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {upcomingGames.map((game, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-sm text-muted-foreground">VS</div>
                          <div className="font-semibold text-lg">{game.opponent}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{game.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>{game.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{game.location}</span>
                        </div>
                      </div>
                      <Button className="bg-pink-600 hover:bg-pink-700">Get Tickets</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-xl text-muted-foreground">Stay updated with the latest team news and announcements.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
                    <Star className="w-8 h-8 text-pink-600" />
                  </div>
                  <CardTitle className="group-hover:text-pink-600 transition-colors">{article.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="ghost" className="p-0 h-auto text-pink-600 hover:text-pink-700">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-pink-600 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join the Pack</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the NCU University, Ai and DataScience Department family. Get exclusive access to games, merchandise, and behind-the-scenes
            content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-pink-600 hover:bg-gray-100">
              Season Membership
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Fan Newsletter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
                <span className="font-bold text-xl">Ai FootballTeam</span>
              </div>
              <p className="text-gray-400 mb-4">
                University Football team committed to excellence and community engagement.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Roster
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Stats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Tickets</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Season Tickets
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Single Game
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Group Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Premium Seating
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>NCU Information center</p>
                <p>NCU IRC Department</p>
                <p>City, HangDong</p>
                <p className="pt-2">
                  <Link href="tel:555-123-4567" className="hover:text-white transition-colors">
                    (+65) 09-70-1020-41
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Football Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
