export default function BlogPage() {
  const posts = [
    {
      title: "From Campus to Unicorn: The BOX8 Story",
      excerpt: "How ISM alumni built India's fastest growing food tech startup",
      date: "Mar 15, 2024",
      category: "Success Stories"
    },
    // Add more posts
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-12 py-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent text-center">
          E-Cell Blog 📚
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article key={index} className="group relative p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <span className="text-sm text-cyan-400">{post.category}</span>
                <h3 className="text-xl font-semibold mt-2">{post.title}</h3>
                <p className="text-white/70 mt-2">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-white/60">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 