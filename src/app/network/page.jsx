import Image from 'next/image'

const startups = [
  { name: "WebEngage", subtitle: "Customer Engagement Platform" },
  { name: "Mailmodo", subtitle: "Interactive Email Marketing" },
  { name: "Solarium Green Energy Limited", subtitle: "Sustainable Energy Solutions" },
  { name: "Badho", subtitle: "Rural Empowerment Platform" },
  { name: "mCaffeine", subtitle: "India's 1st Caffeinated Personal Care" },
  { name: "FieldAssist", subtitle: "Pharma Sales Automation" },
  { name: "Intelisa", subtitle: "Smart Manufacturing Solutions" },
  { name: "Rebhu Computing", subtitle: "AI-Powered Analytics" },
  { name: "Wayfield® Ag", subtitle: "Agricultural Technology Innovators" },
  { name: "BOX8", subtitle: "Food Tech Unicorn" },
  { name: "Covesto", subtitle: "SEBI-registered Stock Advisory" },
  { name: "Nyun AI", subtitle: "Generative AI Solutions" },
  { name: "Flick2Know", subtitle: "Computer Vision Platform" },
  { name: "LoginRadius", subtitle: "CIAM Platform Leader" },
  { name: "PingSafe", subtitle: "Cloud Security (Acquired by SentinelOne)" },
  { name: "Chezuba", subtitle: "Corporate Volunteering Platform" },
  { name: "Dehat", subtitle: "Rural Handicraft Marketplace" },
  { name: "Floryo", subtitle: "Agri-Fintech Solutions" },
  { name: "Codingal", subtitle: "Kids Coding Education" },
  { name: "abCoffee", subtitle: "Social Coffee Networking" },
  { name: "Alhena.ai", subtitle: "Healthcare AI Solutions" },
  { name: "Aidetic", subtitle: "Medical Imaging AI" }
];

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-12 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-slate-50 bg-clip-text text-transparent px-4 text-center">
            IIT (ISM) Dhanbad{' '}
            <span className="block mt-2 md:mt-0 md:inline">Startup Ecosystem</span>
          </h1>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 p-4 md:p-10">
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all">
              <Image
                src="/statup.jpeg"
                alt="IIT ISM Startups"
                fill
                priority
                className="object-cover md:object-contain object-center hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-4 md:space-y-6 md:w-1/2">
              <p className="text-2xl md:text-3xl font-semibold text-white/90 text-center md:text-left">
                Rising as a Startup Powerhouse! ⚡
              </p>
              
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-white/80">
                <p className="text-center md:text-left">
                  While the design and layout of this pie wheel might not be perfect, 
                  the story of ISM DHANBAD is way ahead⏳️. Long known for earth sciences 
                  and engineering, our alma mater now leads in entrepreneurship across 
                  tech, fintech, sustainability, logistics, health, and AI.
                </p>
                
                <p className="text-center md:text-left">
                  From agri-tech to cybersecurity, e-commerce to SaaS - our founders 
                  are redefining industries, proving IIT (ISM) isn't just about 
                  rocks and mines, but building the future! 🚀💡
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
      

        {/* Startups Grid */}
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            📢 Founded by ISMites
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {startups.map((startup, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl border border-white/10 hover:border-white/30 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white/10 p-3 rounded-lg group-hover:bg-white/20 transition-all">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{startup.name}</h3>
                    {startup.subtitle && (
                      <p className="text-sm text-white/60 mt-1">
                        {startup.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="py-12 text-center">
          <div className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 backdrop-blur-lg">
            <p className="text-lg font-medium animate-pulse">
              💡 More groundbreaking startups joining every month!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 