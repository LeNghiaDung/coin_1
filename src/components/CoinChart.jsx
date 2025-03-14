"use client"

import { useState } from "react"
import {
  Share2,
  Settings,
} from "lucide-react"

const CoinChart = ({ coin }) => {
  const [timeframe, setTimeframe] = useState("15m")
  
  const timeframes = ["1s", "1m", "5m", "15m", "1h", "4h", "D"]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6">
      {/* Chart Section - Takes up 3 columns */}
      <div className="lg:col-span-3 bg-[#1E222D] rounded-lg overflow-hidden">
        {/* Chart controls */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border-b border-gray-800 gap-4 sm:gap-0">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar w-full sm:w-auto">
            {timeframes.map((tf) => (
              <button
                key={tf}
                onClick={() => setTimeframe(tf)}
                className={`px-3 py-1 rounded whitespace-nowrap ${
                  timeframe === tf 
                    ? 'bg-gray-700 text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tf}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-700 rounded">
              <Settings className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-gray-700 rounded">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* TradingView Chart */}
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px]">
          <iframe
            src="https://www.tradingview.com/widgetembed/?symbol=POM/USDT&interval=15"
            style={{ width: "100%", height: "100%" }}
            title="TradingView Chart"
            allowTransparency="true"
            allowFullScreen
          />
        </div>
      </div>

      {/* Stats Section - Takes up 1 column */}
      <div className="lg:col-span-1 space-y-4">
        {/* Vote Button */}
        <div className="bg-[#1E222D] p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-400">Votes</span>
            <span className="text-gray-400 flex items-center gap-1">
              <span>24h</span>
            </span>
          </div>
          <button className="w-full bg-[#5b4dff] hover:bg-[#4a3ef7] text-white py-3 rounded-lg flex items-center justify-center gap-2">
            🚀 Vote for BLACK
          </button>
        </div>

        {/* Market Cap & FDV */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1E222D] p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold">$5,608</div>
            <div className="text-sm text-gray-400">Market Cap</div>
          </div>
          <div className="bg-[#1E222D] p-4 rounded-lg">
            <div className="text-xl sm:text-2xl font-bold">$5,608</div>
            <div className="text-sm text-gray-400">FDV</div>
          </div>
        </div>

        {/* Price Changes */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#1E222D] p-4 rounded-lg">
            <div className="text-base sm:text-lg">--</div>
            <div className="text-sm text-gray-400">1h Change</div>
          </div>
          <div className="bg-[#1E222D] p-4 rounded-lg">
            <div className="text-base sm:text-lg text-green-500">2.33%</div>
            <div className="text-sm text-gray-400">6h Change</div>
          </div>
        </div>

        <div className="bg-[#1E222D] p-4 rounded-lg">
          <div className="text-base sm:text-lg text-red-500">-2.58%</div>
          <div className="text-sm text-gray-400">24h Change</div>
        </div>

        {/* Supply & Volume Info */}
        <div className="bg-[#1E222D] p-4 rounded-lg space-y-6">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-gray-400">Total Supply</span>
              <span>999.63 K</span>
            </div>
            <div className="h-1.5 bg-[#2c3139] rounded-full">
              <div className="h-full w-full bg-[#5b4dff] rounded-full"></div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-gray-400">Circ. Supply 100.00%</span>
              <span className="text-sm">999.63 K</span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">24h Volume</span>
            <span>$302</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Volume / MC</span>
            <span>0.054</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Total Liquidity</span>
            <span>$3,580</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoinChart

