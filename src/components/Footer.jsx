import { useTheme } from '../context/ThemeContext'
import { Twitter, MessageCircle, Github } from 'lucide-react'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className="bg-[#0d1117] border-t border-gray-800">
      <div className="container mx-auto px-4 py-4">
        {/* Pagination row */}
        <div className="flex items-center gap-2 text-sm mb-4 overflow-x-auto hide-scrollbar">
          <button className="bg-[#5b4dff] text-white px-3 py-1 rounded whitespace-nowrap">1</button>
          {[2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className="px-3 py-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded whitespace-nowrap"
            >
              {page}
            </button>
          ))}
          <span className="text-gray-400">...</span>
          <button className="px-3 py-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded whitespace-nowrap">
            91
          </button>
          <button className="px-3 py-1 text-gray-400 hover:text-white hover:bg-gray-800 rounded whitespace-nowrap">
            &gt;
          </button>
        </div>

        {/* Info text row */}
        <div className="text-sm text-gray-400 mb-4 text-center md:text-left">
          Find section info here.{" "}
          <button className="text-[#5b4dff] hover:underline">Read More</button>
        </div>

        {/* Bottom row with copyright and links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <div className="text-gray-500 text-sm order-2 md:order-1">© 2025 CoinMun</div>
          
          <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar w-full md:w-auto order-1 md:order-2 justify-center">
            <button className="text-gray-400 hover:text-white whitespace-nowrap text-sm">Advertise</button>
            <button className="text-gray-400 hover:text-white whitespace-nowrap text-sm">Listing</button>
            <button className="text-gray-400 hover:text-white whitespace-nowrap text-sm">Support</button>
            <button className="text-gray-400 hover:text-white flex items-center gap-1 whitespace-nowrap text-sm">
              Legal <span className="text-xs">▼</span>
            </button>
          </div>

          <div className="flex items-center gap-4 order-3">
            <button className="text-gray-400 hover:text-white p-2">
              <Twitter className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white p-2">
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stats text */}
        <div className="text-sm text-gray-500 text-center md:text-right">
          Showing 1 to 20 of 1812
        </div>
      </div>
    </footer>
  )
}

export default Footer

