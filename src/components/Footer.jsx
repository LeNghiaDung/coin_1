import { ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"
export default function Footer() {
  const [selectedCoin, setSelectedCoin] = useState(null)
  const handleClick = (symbol) => {
    setSelectedCoin(symbol)
  }
  return (
    <div className="px-4 py-6 space-y-6 border-t border-gray-800">
      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#4f46e5] text-white">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1f2e] text-gray-400">
            2
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1f2e] text-gray-400">
            3
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1f2e] text-gray-400">
            4
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1f2e] text-gray-400">
            5
          </button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1f2e] text-gray-400">
            91
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#1a1f2e] text-gray-400">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="text-gray-400 text-sm">Showing 1 to 20 of 1808</div>
      </div>

      {/* Section Info */}
      <div className="text-gray-400 text-sm">
        Find section info here.{" "}
        <button onClick={handleClick} className="text-blue-500 hover:underline">
          Read More
        </button>
      </div>

      {/* Bottom Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
        <div className="text-gray-400 text-sm">© 2025 CoinMun</div>
        <div className="flex items-center space-x-6">
          <button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">
            Advertise
          </button>
          <button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">
            Listing
          </button>
          <button onClick={handleClick} className="text-gray-400 hover:text-white text-sm">
            Support
          </button>
          <div className="relative group">
            <button className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm">
              <span>Legal</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleClick} className="text-gray-400 hover:text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button onClick={handleClick} className="text-gray-400 hover:text-white">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.1 11.5C22.1 16.7467 17.8467 21 12.6 21L12.1 20.9999L11.6 21C6.35329 21 2.1 16.7467 2.1 11.5C2.1 6.25329 6.35329 2 11.6 2L12.1 2.00008L12.6 2C17.8467 2 22.1 6.25329 22.1 11.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6 8.30005H12.6H11.6C9.93875 8.30005 8.59998 9.63882 8.59998 11.3V11.7C8.59998 13.3612 9.93875 14.7 11.6 14.7H12.6M8.59998 11.3H15.6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

