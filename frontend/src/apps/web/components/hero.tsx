import {
  ArrowUpRight,
  ChevronDown,
  Dot,
  Facebook,
  Instagram,
  X as TwitterX,
} from 'lucide-react'

function Hero() {
  const scrollToNextSection = () => {
    const next = document.getElementById('next-section')
    if (next) next.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="../../../../public/website/12920702-sd_640_360_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4 h-full">
        <div className="flex flex-col items-center text-center max-w-3xl w-full">
          <div className="mb-6 bg-transparent border border-[#1a1a1a] p-4 rounded-2xl shadow-inner shadow-[#0d0d0d]">
            <div className="bg-gradient-to-tr from-gray-300 to-white rounded-full p-1">
              <div className="bg-black rounded-full w-5 h-5" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-1 text-sm text-slate-400 mb-3">
            <Dot className="text-blue-500" size={14} />
            <span>What’s New</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-tight text-slate-200">
            Unleash Your Full Potential with{' '}
            <span className="font-light italic">Landio</span>
          </h1>

          <p className="text-sm md:text-base text-slate-400 mb-8">
            Transform Possibilities into Reality with Lio
          </p>

          <button className="flex items-center gap-2 bg-transparent text-slate-200 border border-[#2a2a2a] px-6 py-3 rounded-md font-semibold hover:scale-105 transition-transform duration-300 mb-8">
            Get Started <ArrowUpRight size={16} />
          </button>

          <div className="flex justify-center gap-6 mb-8">
            <TwitterX
              className="text-slate-400 hover:text-white transition"
              size={24}
            />
            <Instagram
              className="text-slate-400 hover:text-white transition"
              size={24}
            />
            <Facebook
              className="text-slate-400 hover:text-white transition"
              size={24}
            />
          </div>

          {/* Scroll Icon */}
          <div
            onClick={scrollToNextSection}
            className="text-slate-500 animate-bounce cursor-pointer"
          >
            <ChevronDown size={24} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
