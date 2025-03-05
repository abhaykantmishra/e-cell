import { Geist, Geist_Mono } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
  
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

const initiatives = [
  { name: "Campus Ambassador Program", href: "/initiatives/campus-ambassador" },
  { name: "TeamUp", href: "/initiatives/teamup" },
  { name: "Pitch Perfect", href: "/initiatives/pitch-perfect" },
  { name: "E-Summit", href: "/#e-summit" },
]

const organization = [
  { name: "Team", href: "/team" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
]

const socials = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
]

export function Footer() {
  return (
    <footer className={`${geistMono.variable} font-mono border-t border-white/10 bg-black text-white`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-1">
            <Link href="/" className="inline-block">
              <Image
                src="/e-cell-logo.png"
                alt="E-Cell Logo"
                width={64}
                height={64}
                className="rounded-lg"
              />
            </Link>
            <div className="border-t border-white/10 pt-4">
            <p className="text-sm text-neutral-400">
              Fostering Innovation and Entrepreneurship
              <br />at E-Cell IIT ISM Dhanbad
            </p>
            </div>
          </div>

          {/* Initiatives */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Initiatives</h3>
            <ul className="space-y-2">
              {initiatives.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Organization */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Organization</h3>
            <ul className="space-y-2">
              {organization.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Reach us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+910000000000"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  +91 0000 00000
                </a>
              </li>
              <li>
                <a
                  href="mailto:ecell@iitism.ac.in"
                  className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                    ecell@iitism.ac.in
                </a>
              </li>
              <li className="flex gap-2 text-sm text-neutral-400">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <address className="not-italic">
                  Indian Institute of Technology Dhanbad
                  <br />
                  IIT P.O., Dhanbad (826004)
                  <br />
                  Jharkhand, INDIA
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="mt-12 flex flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white/5 p-2 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
              >
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} E-Cell IIT ISM Dhanbad. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}