'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react'

export function ContactUs() {
  return (
    <section className="py-20 bg-black text-white border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
              <p className="text-neutral-400">Have questions? We&apos;d love to hear from you.</p>
            </div>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-neutral-500"
                />
              </div>
              <Button className="w-full hover:bg-white hover:text-black transition-colors border border-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
              <p className="text-neutral-400">Reach out to us through any of these channels.</p>
            </div>
            
            <div className="space-y-6">
              {/* Website Queries */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Website Queries</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <a href="tel:+917488858825" className="text-neutral-400 hover:text-white transition-colors">
                      +91 0000 000000 (XYZ)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:webops_ecell@smail.iitism.ac.in" className="text-neutral-400 hover:text-white transition-colors">
                      ecell@iitism.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* General Queries */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">General Queries</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <a href="tel:+919711232001" className="text-neutral-400 hover:text-white transition-colors">
                      +91 0000 000000 (XYZ)
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <a href="mailto:ecell@iitism.ac.in" className="text-neutral-400 hover:text-white transition-colors">
                      ecell@iitism.ac.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <p className="text-neutral-400">
                    E-Cell Office<br />
                    IIT ISM Dhanbad<br />
                    Jharkhand - 826004
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-white/5 hover:bg-white/10 flex items-center justify-center rounded-full transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
