"use client"

import { useState } from "react"
import {
  ChevronDown,
  Share2,
  Globe,
  Twitter,
  MessageCircle,
  BarChart2,
  TrendingUp,
  Settings,
  ZoomIn,
  Maximize2,
} from "lucide-react"

const CoinChart = ({ coin }) => {
  const [timeframe, setTimeframe] = useState("15m")
  const [showFaq, setShowFaq] = useState(false)

  const timeframes = [
    { value: "1s", label: "1s" },
    { value: "1m", label: "1m" },
    { value: "5m", label: "5m" },
    { value: "15m", label: "15m" },
    { value: "1h", label: "1h" },
    { value: "4h", label: "4h" },
    { value: "1d", label: "1D" },
  ]

  const faqQuestions = [
    { question: "What is the current price of 1 POM token?", answer: `The current price is ${coin?.price}` },
    {
      question: "How much POM tokens can I purchase with $100 USD?",
      answer: "Based on the current price, you can purchase approximately 31,250 POM tokens with $100 USD.",
    },
    { question: "What is the market cap of POM coin?", answer: `The current market cap is ${coin?.marketCap}` },
    { question: "What is the fully diluted valuation (FDV) of POM coin?", answer: `The current FDV is ${coin?.fdv}` },
    { question: "What is the contract address for POM (POM) on Bsc?", answer: coin?.contractAddress },
    { question: "What is the daily trading volume of POM (POM)?", answer: `The 24h trading volume is ${coin?.volume}` },
    { question: "What is the liquidity of POM (POM)?", answer: "The current liquidity pool value is $479,277" },
    { question: "How do I buy POM tokens?", answer: "You can buy POM tokens on PancakeSwap using BNB." },
    {
      question: "How to add POM (POM) to MetaMask?",
      answer: "Click the MetaMask button above or manually import the token contract address.",
    },
  ]

  return (
    <div className="flex flex-col space-y-4 md:space-y-6">
      {/* Chart section */}
      <div className="bg-[#0d1117] rounded-lg overflow-hidden">
        {/* Chart header */}
        <div className="flex items-center justify-between p-2 md:p-4 border-b border-gray-800">
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex items-center">
              <img
                src={coin?.icon || "/placeholder.svg?height=32&width=32"}
                alt={coin?.name}
                className="w-6 h-6 md:w-8 md:h-8 rounded-full"
              />
              <div className="ml-2">
                <h2 className="font-bold text-sm md:text-base">{coin?.name}</h2>
                <p className="text-xs md:text-sm text-gray-400">{coin?.symbol}</p>
              </div>
            </div>
            <div className="text-xs md:text-sm px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-800 rounded">
              #{coin?.rank || "37"}
            </div>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <Share2 className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <Globe className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <Twitter className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </div>

        {/* Chart controls */}
        <div className="flex items-center justify-between p-1 md:p-2 border-b border-gray-800 overflow-x-auto hide-scrollbar">
          <div className="flex items-center space-x-1">
            {timeframes.map((tf) => (
              <button
                key={tf.value}
                onClick={() => setTimeframe(tf.value)}
                className={`px-2 py-1 text-xs rounded ${timeframe === tf.value ? "bg-blue-600" : "hover:bg-gray-800"}`}
              >
                {tf.label}
              </button>
            ))}
          </div>
          <div className="flex items-center space-x-1 md:space-x-2">
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <BarChart2 className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <Settings className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <ZoomIn className="w-3 h-3 md:w-4 md:h-4" />
            </button>
            <button className="p-1 md:p-2 hover:bg-gray-800 rounded-md">
              <Maximize2 className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        </div>

        {/* TradingView Chart - responsive height */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative">
          <iframe
            src="https://www.tradingview.com/widgetembed/?symbol=POM/USDT&interval=15"
            style={{ width: "100%", height: "100%" }}
            title="UniqueTitleForIFrame"
            allowTransparency="true"
            allowFullScreen
          />
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        <div className="bg-[#1a1f27] p-2 md:p-4 rounded-lg">
          <p className="text-xs md:text-sm text-gray-400">Market Cap</p>
          <p className="text-sm md:text-lg font-bold">{coin?.marketCap || "$2.69M"}</p>
        </div>
        <div className="bg-[#1a1f27] p-2 md:p-4 rounded-lg">
          <p className="text-xs md:text-sm text-gray-400">FDV</p>
          <p className="text-sm md:text-lg font-bold">{coin?.fdv || "$2.69M"}</p>
        </div>
        <div className="bg-[#1a1f27] p-2 md:p-4 rounded-lg">
          <p className="text-xs md:text-sm text-gray-400">24h Volume</p>
          <p className="text-sm md:text-lg font-bold">{coin?.volume || "$319,155"}</p>
        </div>
        <div className="bg-[#1a1f27] p-2 md:p-4 rounded-lg">
          <p className="text-xs md:text-sm text-gray-400">Liquidity</p>
          <p className="text-sm md:text-lg font-bold">$479,277</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
        <button
          className="flex items-center justify-between w-full text-left font-bold mb-2 md:mb-4 text-sm md:text-base"
          onClick={() => setShowFaq(!showFaq)}
        >
          <span>POM Live Price & FAQs</span>
          <ChevronDown
            className={`w-4 h-4 md:w-5 md:h-5 transform transition-transform ${showFaq ? "rotate-180" : ""}`}
          />
        </button>

        {showFaq && (
          <div className="space-y-3 md:space-y-4">
            {faqQuestions.map((faq, index) => (
              <div key={index} className="border-b border-gray-800 pb-2 md:pb-4">
                <button className="flex items-center justify-between w-full text-left text-xs md:text-sm hover:text-gray-300">
                  <span>{faq.question}</span>
                  <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2">
        <div className="bg-[#1a1f27] px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm">Bsc Ecosystem</div>
        <div className="bg-[#1a1f27] px-3 py-1.5 md:px-4 md:py-2 rounded-md text-xs md:text-sm">Memes</div>
      </div>
    </div>
  )
}

export default CoinChart

