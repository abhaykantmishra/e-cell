import { LinkedinIcon, TwitterIcon, GithubIcon } from '@/components/icons'
import Image from 'next/image'

const team = [
  {
    name: "Rahul Sharma",
    role: "President",
    image: "/team-1.jpg",
    social: { linkedin: "#", twitter: "#", github: "#" }
  },
  {
    name: "Priya Gupta",
    role: "Vice President",
    image: "/team-2.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Anish Kumar Singh",
    role: "Technical Head",
    image: "/team-3.jpg",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Neha Singh",
    role: "Events Lead",
    image: "/team-4.jpg",
    social: { linkedin: "#", twitter: "#", instagram: "#" }
  },
  {
    name: "Rohan Verma",
    role: "PR & Marketing Head",
    image: "/team-5.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Ananya Reddy",
    role: "Startup Relations",
    image: "/team-6.jpg",
    social: { linkedin: "#", medium: "#" }
  },
  {
    name: "Vikram Joshi",
    role: "Finance Head",
    image: "/team-7.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Sneha Malhotra",
    role: "Design Lead",
    image: "/team-8.jpg",
    social: { linkedin: "#", behance: "#" }
  },
  {
    name: "Aryan Khanna",
    role: "Web Development Lead",
    image: "/team-9.jpg",
    social: { linkedin: "#", github: "#" }
  },
  {
    name: "Ishita Chatterjee",
    role: "Content Strategist",
    image: "/team-10.jpg",
    social: { linkedin: "#", twitter: "#" }
  },
  {
    name: "Rajat Mehta",
    role: "Operations Manager",
    image: "/team-11.jpg",
    social: { linkedin: "#" }
  },
  {
    name: "Kavya Srinivasan",
    role: "Alumni Relations",
    image: "/team-12.jpg",
    social: { linkedin: "#", twitter: "#" }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-12 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-slate-50 bg-clip-text text-transparent text-center">
          Meet the Team
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div key={index} className="group relative p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all">
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-white/70">{member.role}</p>
              <div className="flex gap-3 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-white/60 hover:text-white">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-white/60 hover:text-white">
                    <TwitterIcon className="w-5 h-5" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-white/60 hover:text-white">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 