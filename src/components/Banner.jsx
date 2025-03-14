import { useTheme } from '../context/ThemeContext'
import { ArrowRight } from 'lucide-react'

const Banner = () => {
  const { theme } = useTheme()

  return (
    <div className="mb-8">
      <div className={`w-full max-w-[700px] mx-auto rounded-2xl overflow-hidden ${
        theme === 'light' ? 'bg-white' : 'bg-[#1E222D]'
      } shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1`}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 mix-blend-overlay" />
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Left side - Icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 transform hover:rotate-12 transition-transform duration-300">
                  <div className={`w-full h-full rounded-full ${
                    theme === 'light' ? 'bg-white' : 'bg-[#1E222D]'
                  } flex items-center justify-center`}>
                    <span className="text-5xl md:text-6xl transform hover:scale-110 transition-transform duration-300">🐸</span>
                  </div>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="flex-1 text-center md:text-left">
                <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  Discover FROX
                </h2>
                <p className={`text-sm md:text-base mb-4 ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. 
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity duration-200 transform hover:scale-105">
                    Trade Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border ${
                    theme === 'light'
                      ? 'border-gray-200 hover:border-gray-300 text-gray-700'
                      : 'border-gray-700 hover:border-gray-600 text-gray-300'
                  } font-medium transition-colors duration-200 hover:bg-opacity-10 hover:bg-gray-500 transform hover:scale-105`}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

