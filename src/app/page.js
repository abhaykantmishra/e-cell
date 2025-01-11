"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Users, Calendar, BookOpen, ChevronRight, ArrowRight, Presentation, Trophy, Store, UserPlus, Edit, Users2 } from 'lucide-react'
import { CountUp } from "@/components/count-up"
import { GridBackground } from "@/components/grid-background"
import { ContactUs } from "@/components/contact-us"
import { useRouter } from 'next/navigation'

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
    }
  
    window.addEventListener('mousemove', handleMouseMove)
  
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  
  const router =  useRouter();

  return (
    <div className="font-mono">
      {/* Hero Section */}
      <GridBackground id='home'>
      <section className="min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div 
          className="absolute bg-blue-500 rounded-full blur-3xl opacity-50 w-64 h-64 transition-all duration-300 ease-out"
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
        <div className="container z-10 px-4 mx-auto">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl" />
              <h1 className="text-4xl md:text-6xl font-bold relative z-10 ">
                E-Cell IIT ISM Dhanbad
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl">
              Fostering Innovation and Entrepreneurship
            </p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-75 animate-pulse"></div>
              <Link href="/#vision" passHref>
                <Button size="lg" className="relative bg-black hover:bg-gray-800 text-white border border-white/20 group transition-all duration-300">
                  Explore
                  <ArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </GridBackground>

      {/* Vision Section */}
      <section id='vision' className="py-20  text-white border-t border-white/10">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-0 md:h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={'/window.svg'}
                alt="E-Cell Event"
                fill
                className="hidden md:block object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Our Vision</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                Our vision is to make students and faculty 'entrepreneurial' in every work that they do. 
                We hope to enable them to solve global challenges as we see students as the greatest 
                capital and intend to nurture them, provide them with opportunities for excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section id='impact' className="py-20 text-white border-t border-white/10">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-bold text-purple-400">
                <CountUp start={0} end={2000} duration={1500} decimals={0} easing="easeOut" />+
              </div>
              <div className="text-neutral-400">Students</div>
            </div>
            <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-bold text-purple-400">
              <CountUp start={0} end={50} duration={1500} decimals={0} easing="easeOut" />+
              </div>
              <div className="text-neutral-400">Startups</div>
            </div>
            <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-bold text-purple-400">
              <CountUp start={0} end={100} duration={1500} decimals={0} easing="easeOut" />+
              </div>
              <div className="text-neutral-400">Events</div>
            </div>
            <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
              <div className="text-4xl font-bold text-purple-400">
              <CountUp start={0} end={250} duration={1500} decimals={0} easing="easeOut" />+
              </div>
              <div className="text-neutral-400">Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* E-summit section  */}
      <section id='e-summit' className="py-20  text-white border-t border-white/10">
        <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-12 text-center">About E-Summit</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={'/vercel.svg'}
                alt="E-Summit Logo"
                width={300}
                height={300}
                className="mb-6"
              />
              <h2 className="text-3xl font-bold mb-4">Soaring Through Shifts</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                Every year, we play host to our flagship event, E-Summit. E-Summit 2024, themed around 
                Soaring Through Shifts is a 4-Conclave model including Youth Conclave, Innovators' Conclave,
                Startup Conclave, and StartUp Essentials along with the social campaign Udaan.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-3 text-center space-y-2 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-bold text-purple-400">
                <CountUp start={0} end={600} duration={1500} decimals={0} easing="easeOut" />+
                </div>
                <div className="text-neutral-400">Campus Ambassadors</div>
              </div>
              <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-bold text-purple-400 hover:text-purple-300">
                  <CountUp start={0} end={50} duration={1500} decimals={0} easing="easeOut" />+
                </div>
                <div className="text-neutral-400">Speakers</div>
              </div>
              <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-bold text-purple-400">
                  <CountUp start={0} end={600} duration={1500} decimals={0} easing="easeOut" />+
                </div>
                <div className="text-neutral-400">Startups</div>
              </div>
              <div className="text-center space-y-2 hover:-translate-y-1 transition-transform">
                <div className="text-4xl font-bold text-purple-400">
                  <CountUp start={0} end={150} duration={1500} decimals={0} easing="easeOut" />+
                </div>
                <div className="text-neutral-400">Investors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiative Section */}
      <section id='initiatives' className="py-20  text-white border-t border-white/10">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-hover-line bg-purple-500/30 border-white/10 hover:bg-purple-500/40 transition-all cursor-pointer group md:col-span-2 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Annual Entrepreneurship Summit</h3>
                <p className="text-neutral-400">Our flagship event bringing together innovators, investors, and industry leaders</p>
                <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-blue-500/30 border-white/10 hover:bg-blue-500/40 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Startup Weekend</h3>
                <p className="text-neutral-400">54-hour event to launch your startup idea</p>
                <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-green-500/30 border-white/10 hover:bg-green-500/40 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">E-Cell LSM</h3>
                <p className="text-neutral-400">Leadership and skill development program</p>
                <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-pink-500/30 border-white/10 hover:bg-pink-500/40 transition-all cursor-pointer group md:col-span-2 hover:-translate-y-1">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Startup Incubation</h3>
                <p className="text-neutral-400">Get resources and mentorship to grow your startup</p>
                <ArrowRight className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources section  */}
      <section id='resources' className="py-20  text-white border-t border-white/10">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">Empowering the Next Generation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-hover-line bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-white/10 hover:from-purple-900/70 hover:to-blue-900/70 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Presentation className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-bold">Lecture Series</h3>
                  <p className="text-neutral-400">Expert talks and workshops from industry leaders</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-white/10 hover:from-blue-900/70 hover:to-cyan-900/70 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Trophy className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold">Competitive Events</h3>
                  <p className="text-neutral-400">Challenges and competitions for budding entrepreneurs</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-gradient-to-br from-cyan-900/50 to-green-900/50 border-white/10 hover:from-cyan-900/70 hover:to-green-900/70 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Store className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-bold">Startup Corner</h3>
                  <p className="text-neutral-400">Resources and support for student startups</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-gradient-to-br from-green-900/50 to-yellow-900/50 border-white/10 hover:from-green-900/70 hover:to-yellow-900/70 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <UserPlus className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-bold">Mentorship Programme</h3>
                  <p className="text-neutral-400">Connect with experienced mentors</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-white/10 hover:from-yellow-900/70 hover:to-orange-900/70 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Edit className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-bold">Editorial Corner</h3>
                  <p className="text-neutral-400">Latest updates and entrepreneurial insights</p>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover-line bg-gradient-to-br from-orange-900/50 to-red-900/50 border-white/10 hover:from-orange-900/70 hover:to-red-900/70 transition-all cursor-pointer group hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <Users2 className="w-8 h-8 text-orange-400" />
                  <h3 className="text-xl font-bold">Competitive Associations</h3>
                  <p className="text-neutral-400">Partner with leading organizations</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id='testimonials' className="py-20  text-white border-t border-white/10">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-12 text-center">What Our Community Says</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all group card-hover-line">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12  flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-neutral-400 mb-4">
                        "E-Cell has been instrumental in shaping my entrepreneurial journey. The mentorship and resources provided are invaluable."
                      </p>
                      <div className="font-bold">Startup Founder</div>
                      <div className="text-sm text-neutral-400">Batch of 2023</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id='newsletter' className="py-20  text-white border-t border-white/10">
        <div className="container px-4 mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-neutral-400 mb-8">Subscribe to our newsletter for the latest updates and opportunities</p>
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/5 border border-white/10 px-4 py-2 focus:outline-none focus:border-purple-500"
            />
            <Button className="hover:bg-white hover:text-black transition-colors border border-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Contact us  */}
      <section id='contact-us'>
      <ContactUs  />
      </section>
    </div>
  )
}