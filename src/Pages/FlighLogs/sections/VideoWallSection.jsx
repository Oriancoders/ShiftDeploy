import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Section 3: Video Wall (Optional)
function VideoWallSection() {
  const [visibleVideos, setVisibleVideos] = useState([])
  const sectionRef = useRef(null)

  const videoTestimonials = [
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      author: "Sarah Chen",
      role: "CTO @ GrowthLabs",
      duration: "2:34",
      title: "How ShiftDeploy saved our deployment process",
      tag: "DevOps",
      color: "from-blue-500 to-indigo-600",
    },
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      author: "Marcus Rodriguez",
      role: "Founder @ DataFlow",
      duration: "1:58",
      title: "Scaling from 10K to 100K users",
      tag: "Infra",
      color: "from-green-500 to-emerald-600",
    },
    {
      thumbnail: "/placeholder.svg?height=300&width=400",
      author: "Jennifer Park",
      role: "CEO @ UserFlow",
      duration: "3:12",
      title: "From MVP to Series A in 8 months",
      tag: "Full Build",
      color: "from-purple-500 to-pink-600",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoTestimonials.forEach((_, index) => {
            setTimeout(() => {
              setVisibleVideos((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hear it
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              directly
            </span>
          </h2>
          <p className="text-xl text-gray-600">Video testimonials from teams who trusted us with their missions.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {videoTestimonials.map((video, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 transform ${
                visibleVideos.includes(index) ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                {/* Video Thumbnail */}
                <div className="relative">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={`${video.author} testimonial`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${video.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {video.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">{video.duration}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{video.title}</h3>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                    <div>
                      <div className="font-medium text-gray-900">{video.author}</div>
                      <div className="text-sm text-gray-600">{video.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default VideoWallSection