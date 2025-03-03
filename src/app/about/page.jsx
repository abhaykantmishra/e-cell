import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-12 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="space-y-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            About E-Cell IIT ISM 🚀
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-98 rounded-2xl overflow-hidden border border-white/20">
            <Image
              src="/e-cell-logo.png"
              alt="About Us"
              fill
              className="object-contain hover:scale-105 transition-transform"
            />
          </div>
          
          <div className="space-y-6 text-white/80">
            <p className="text-2xl font-semibold text-white/90">
              Fostering Innovation Since 2012 💡
            </p>
            <p>
              The Entrepreneurship Cell of IIT (ISM) Dhanbad has been the driving force behind 
              the institute's startup ecosystem, nurturing 150+ startups and 3000+ entrepreneurs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🚀', title: 'Startups Incubated', value: '150+' },
                { icon: '💡', title: 'Workshops', value: '200+' },
                { icon: '🌟', title: 'Investors Network', value: '100+' },
                { icon: '🏆', title: 'Awards Won', value: '50+' },
              ].map((item, index) => (
                <div key={index} className="p-4 rounded-lg border border-white/10 hover:border-white/30 transition-all">
                  <div className="text-2xl">{item.icon}</div>
                  <p className="text-xl font-bold mt-2">{item.value}</p>
                  <p className="text-sm text-white/60">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 