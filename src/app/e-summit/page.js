import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { GridBackground } from "@/components/grid-background"
import { ArrowRight } from "lucide-react"

export default function ESummitPage() {
  const blogContent = [
    {
      image: "/ecell1.jpg",
      title: "Keynote Session",
      description: "Visionary talks from industry leaders shaping the future of entrepreneurship and innovation."
    },
    {
      image: "/ecell2.jpg",
      title: "Startup Showcase",
      description: "Emerging startups present their groundbreaking ideas to investors and industry experts."
    },
    {
      image: "/ecell1.jpg",
      title: "Panel Discussion",
      description: "Interactive debates on sustainable business practices and digital transformation."
    },
    {
      image: "/ecell4.jpg",
      title: "Workshops",
      description: "Hands-on sessions covering pitch development, fundraising strategies, and growth hacking."
    },
    {
      image: "/ecell13.jpg",
      title: "Networking Lounge",
      description: "Exclusive space for founders to connect with venture capitalists and angel investors."
    },
    {
      image: "/esummit-6.jpg",
      title: "Awards Ceremony",
      description: "Celebrating outstanding achievements in innovation and social entrepreneurship."
    },
    {
      image: "/esummit-7.jpg",
      title: "Mentorship Hub",
      description: "One-on-one sessions with experienced entrepreneurs and business leaders."
    },
    {
      image: "/esummit-8.jpg",
      title: "Closing Gala",
      description: "Culmination of the summit with live performances and networking dinners."
    }
  ];

  return (
    <div className="font-mono">
      <GridBackground>
        <section className="min-h-screen py-20 text-white">
          <div className="container px-4 mx-auto max-w-6xl">
            <header className="mb-16 text-center">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
                E-Summit 2025
              </h1>
              <p className="text-xl text-neutral-300">March 01-02 • IIT ISM Dhanbad</p>
            </header>

            {/* Featured Post */}
            <div className="mb-20 group">
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer">
                <CardContent className="p-0 overflow-hidden">
                  <div className="relative h-96 w-full">
                    <Image
                      src="/ecell1.jpg"
                      alt="Featured Summit Session"
                      fill
                      className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 space-y-4">
                      <span className="bg-purple-500/30 text-purple-300 px-4 py-2 rounded-full text-sm">
                        Featured Event
                      </span>
                      <h2 className="text-4xl font-bold">Innovation Keynote</h2>
                      <p className="text-neutral-300 max-w-2xl">
                        Join industry pioneers as they unveil the future of technology and entrepreneurship in our flagship session.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Event Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogContent.map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all cursor-pointer group h-full flex flex-col">
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <div className="relative h-56 w-full flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <span className="text-sm text-purple-300">Session {i+1}</span>
                        <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                        <p className="text-neutral-400 line-clamp-3">{item.description}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm text-neutral-400">
                        <span>Sept 15, 2024</span>
                        <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity w-5 h-5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </GridBackground>
    </div>
  )
} 