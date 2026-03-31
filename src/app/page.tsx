'use client'

import { useState } from 'react'
import { Menu, X, ChevronDown, ArrowRight, Play, Star, CheckCircle, Code, Palette, Rocket, MessageSquare, Phone, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <span className="font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">
                Braciarido
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition">Home</a>
              <a href="#services" className="text-sm text-gray-300 hover:text-white transition">Services</a>
              <a href="#portfolio" className="text-sm text-gray-300 hover:text-white transition">Portfolio</a>
              <a href="#blog" className="text-sm text-gray-300 hover:text-white transition">Blog</a>
              <a href="#contact" className="text-sm text-gray-300 hover:text-white transition">Contact</a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition">
                  Industries <ChevronDown size={14} />
                </button>
              </div>
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-medium rounded-full hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0a0f] border-t border-white/5 py-4">
            <nav className="flex flex-col gap-4 px-4">
              <a href="#" className="text-gray-300 hover:text-white">Home</a>
              <a href="#services" className="text-gray-300 hover:text-white">Services</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/5 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Star size={14} className="text-cyan-400" />
            <span className="text-sm text-gray-300">Premium Web Design Studio</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Websites That</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Convert & Captivate
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Custom websites for Real Estate, Healthcare & Local Businesses. Mobile-responsive, fast-loading, and SEO-optimized for maximum visibility.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-full hover:opacity-90 transition"
            >
              Get Free Mockup <ArrowRight size={18} />
            </a>
            <a 
              href="#portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition"
            >
              <Play size={18} /> View Our Work
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-cyan-400" />
              <span>No commitment required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-cyan-400" />
              <span>Arizona-based team</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-cyan-400" />
              <span>48-hour turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Projects Delivered</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div className="text-gray-400 uppercase tracking-wider text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Everything you need to establish a powerful online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/50 transition group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Code size={28} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Web Development</h3>
              <p className="text-gray-400">
                Tailored websites built from scratch to match your brand and business goals perfectly.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/50 transition group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Palette size={28} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
              <p className="text-gray-400">
                Beautiful, intuitive designs that engage visitors and drive conversions.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-cyan-500/50 transition group">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Rocket size={28} className="text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">SEO Optimization</h3>
              <p className="text-gray-400">
                Get found by your ideal customers with search engine optimized websites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Healthcare', 'Real Estate', 'Legal', 'Finance', 'E-Commerce', 'Restaurants', 'Construction', 'Nonprofits'].map((industry) => (
              <div 
                key={industry}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center hover:border-cyan-500/50 hover:bg-white/10 transition cursor-pointer"
              >
                <span className="text-gray-300">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Get a free mockup of your new website in 48 hours. No commitment required.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-full text-lg hover:opacity-90 transition"
          >
            Get Your Free Mockup <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 lg:py-32 bg-gradient-to-t from-cyan-500/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Let's Build Something Amazing</h2>
              <p className="text-gray-400 mb-8">
                Ready to take your business to the next level? Get in touch and let's discuss your project.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Phone size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Phone</div>
                    <div className="font-medium">(480) 555-0123</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <Mail size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email</div>
                    <div className="font-medium">hello@braciarido.com</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center">
                    <MapPin size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Location</div>
                    <div className="font-medium">Phoenix, Arizona</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-cyan-500 focus:outline-none transition h-32 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-400 text-black font-semibold rounded-lg hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center">
                <span className="font-bold text-sm">B</span>
              </div>
              <span className="font-semibold">Braciarido</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Braciarido. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Privacy</a>
              <a href="#" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
