export default function InitiativesPage() {
  const initiatives = [
    { 
      title: "Startup Grind", 
      description: "Monthly founder fireside chats with industry leaders",
      status: "Ongoing",
      icon: "🔥"
    },
    {
      title: "Seed Fund Program",
      description: "Early-stage funding for student startups",
      status: "Upcoming",
      icon: "💸"
    },
    // Add more initiatives
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-12 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-center">
          Our Initiatives 💪
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((initiative, index) => (
            <div key={index} className="p-6 rounded-xl border border-white/10 hover:border-white/30 bg-black/50 backdrop-blur-sm transition-all">
              <div className="flex items-start gap-4">
                <span className="text-3xl p-3 bg-white/10 rounded-lg">{initiative.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{initiative.title}</h3>
                  <p className="text-white/70 mt-2">{initiative.description}</p>
                  <span className="inline-block mt-3 px-3 py-1 text-sm rounded-full bg-green-900/20 text-green-400">
                    {initiative.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 