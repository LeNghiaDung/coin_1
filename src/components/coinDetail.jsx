"use client"

import { useState, useEffect } from "react"
import { ArrowUp, ArrowDown, ExternalLink } from "lucide-react"
import CoinChart from "./CoinChart"

// Mock data for different coins
const coinData = {
  1: {
    id: 1,
    name: "POM",
    symbol: "POM",
    price: "$0.0055",
    change24h: "3.63%",
    marketCap: "$4.62M",
    volume: "$199,273",
    high24h: "$0.0057",
    low24h: "$0.0053",
    description: "POM is a decentralized cryptocurrency focused on community governance and sustainable growth.",
    positive: true,
    website: "https://pom.com",
    twitter: "@POMcrypto",
    telegram: "t.me/POMcrypto",
    contractAddress: "0x1234567890abcdef",
    rank: "37",
    chartData: [
      /* chart data would go here */
    ],
  },
  2: {
    id: 2,
    name: "BLACK",
    symbol: "BLACK",
    price: "$0.006002",
    change24h: "123.00%",
    marketCap: "$6,000",
    volume: "$4,194",
    high24h: "$0.007",
    low24h: "$0.0025",
    description: "BLACK is a new generation token with deflationary mechanisms and community-driven development.",
    positive: true,
    website: "https://black.crypto",
    twitter: "@BLACKcrypto",
    telegram: "t.me/BLACKcrypto",
    contractAddress: "0xabcdef1234567890",
    rank: "426",
    chartData: [
      /* chart data would go here */
    ],
  },
  3: {
    id: 3,
    name: "PONGO",
    symbol: "PONGO",
    price: "$0.0x71957",
    change24h: "9.82%",
    marketCap: "$1.96M",
    volume: "$61,421",
    high24h: "$0.0x75000",
    low24h: "$0.0x68000",
    description: "PONGO is an innovative DeFi platform that combines yield farming with NFT collectibles.",
    positive: true,
    website: "https://pongo.finance",
    twitter: "@PONGOfinance",
    telegram: "t.me/PONGOfinance",
    contractAddress: "0x7890abcdef123456",
    rank: "97",
    chartData: [
      /* chart data would go here */
    ],
  },
  // Add more coins as needed
}

const CoinDetailPage = ({ coinId }) => {
  const [coin, setCoin] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // Simulate API fetch
    const fetchCoin = async () => {
      setLoading(true)
      try {
        // In a real app, you would fetch from an API
        // For now, we'll use our mock data
        setTimeout(() => {
          const foundCoin = coinData[coinId]
          setCoin(foundCoin || null)
          setLoading(false)
        }, 500) // Simulate network delay
      } catch (error) {
        console.error("Error fetching coin data:", error)
        setLoading(false)
      }
    }

    fetchCoin()
  }, [coinId])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  if (!coin) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-bold mb-4">Coin not found</h2>
        <p className="mb-4">The coin you're looking for doesn't exist or has been removed.</p>
      </div>
    )
  }

  return (
    <>
      {/* Coin header */}
      <div className="bg-[#1a1f27] rounded-lg p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3">
              {coin.symbol.substring(0, 1)}
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold">{coin.name}</h1>
              <p className="text-gray-400">
                {coin.symbol} #{coin.rank}
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-xl md:text-2xl font-bold">{coin.price}</div>
            <div className={`flex items-center ${coin.positive ? "text-green-500" : "text-red-500"}`}>
              {coin.positive ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
              {coin.change24h}
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <div className="bg-[#0d1117] p-2 md:p-3 rounded-md">
            <p className="text-gray-400 text-xs mb-1">Market Cap</p>
            <p className="font-bold text-sm md:text-base">{coin.marketCap}</p>
          </div>
          <div className="bg-[#0d1117] p-2 md:p-3 rounded-md">
            <p className="text-gray-400 text-xs mb-1">Volume (24h)</p>
            <p className="font-bold text-sm md:text-base">{coin.volume}</p>
          </div>
          <div className="bg-[#0d1117] p-2 md:p-3 rounded-md">
            <p className="text-gray-400 text-xs mb-1">24h High</p>
            <p className="font-bold text-sm md:text-base">{coin.high24h}</p>
          </div>
          <div className="bg-[#0d1117] p-2 md:p-3 rounded-md">
            <p className="text-gray-400 text-xs mb-1">24h Low</p>
            <p className="font-bold text-sm md:text-base">{coin.low24h}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto mb-6 border-b border-gray-800 hide-scrollbar">
        <button
          className={`px-3 py-2 md:px-4 font-medium text-xs md:text-sm whitespace-nowrap ${activeTab === "overview" ? "text-white border-b-2 border-yellow-500" : "text-gray-400"}`}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={`px-3 py-2 md:px-4 font-medium text-xs md:text-sm whitespace-nowrap ${activeTab === "markets" ? "text-white border-b-2 border-yellow-500" : "text-gray-400"}`}
          onClick={() => setActiveTab("markets")}
        >
          Markets
        </button>
        <button
          className={`px-3 py-2 md:px-4 font-medium text-xs md:text-sm whitespace-nowrap ${activeTab === "social" ? "text-white border-b-2 border-yellow-500" : "text-gray-400"}`}
          onClick={() => setActiveTab("social")}
        >
          Social
        </button>
        <button
          className={`px-3 py-2 md:px-4 font-medium text-xs md:text-sm whitespace-nowrap ${activeTab === "contract" ? "text-white border-b-2 border-yellow-500" : "text-gray-400"}`}
          onClick={() => setActiveTab("contract")}
        >
          Contract
        </button>
      </div>

      {/* Chart */}
      <CoinChart coin={coin} />

      {/* Tab content */}
      {activeTab === "overview" && (
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">About {coin.name}</h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">{coin.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h3 className="text-md md:text-lg font-medium mb-2 md:mb-3">Key Information</h3>
              <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
                <div className="flex justify-between py-2 border-b border-gray-800 text-sm md:text-base">
                  <span className="text-gray-400">Website</span>
                  <a href="#" className="text-blue-400 hover:underline">
                    {coin.website}
                  </a>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800 text-sm md:text-base">
                  <span className="text-gray-400">Twitter</span>
                  <a href="#" className="text-blue-400 hover:underline">
                    {coin.twitter}
                  </a>
                </div>
                <div className="flex justify-between py-2 text-sm md:text-base">
                  <span className="text-gray-400">Telegram</span>
                  <a href="#" className="text-blue-400 hover:underline">
                    {coin.telegram}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-md md:text-lg font-medium mb-2 md:mb-3">Price Statistics</h3>
              <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
                <div className="flex justify-between py-2 border-b border-gray-800 text-sm md:text-base">
                  <span className="text-gray-400">Price Change (24h)</span>
                  <span className={coin.positive ? "text-green-500" : "text-red-500"}>{coin.change24h}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800 text-sm md:text-base">
                  <span className="text-gray-400">All-time High</span>
                  <span>$0.0098</span>
                </div>
                <div className="flex justify-between py-2 text-sm md:text-base">
                  <span className="text-gray-400">All-time Low</span>
                  <span>$0.0012</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "markets" && (
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Markets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-gray-400 text-xs md:text-sm border-b border-gray-800">
                  <th className="py-3 px-2 md:px-4">Exchange</th>
                  <th className="py-3 px-2 md:px-4">Pair</th>
                  <th className="py-3 px-2 md:px-4">Price</th>
                  <th className="py-3 px-2 md:px-4 hidden md:table-cell">Volume (24h)</th>
                  <th className="py-3 px-2 md:px-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800 text-xs md:text-sm">
                  <td className="py-3 px-2 md:px-4 md:py-4">Binance</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">{coin.symbol}/USDT</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">{coin.price}</td>
                  <td className="py-3 px-2 md:px-4 md:py-4 hidden md:table-cell">$120,456</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">
                    <a href="#" className="text-blue-400 hover:underline">
                      Trade
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 text-xs md:text-sm">
                  <td className="py-3 px-2 md:px-4 md:py-4">Coinbase</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">{coin.symbol}/USD</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">{coin.price}</td>
                  <td className="py-3 px-2 md:px-4 md:py-4 hidden md:table-cell">$98,765</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">
                    <a href="#" className="text-blue-400 hover:underline">
                      Trade
                    </a>
                  </td>
                </tr>
                <tr className="border-b border-gray-800 text-xs md:text-sm">
                  <td className="py-3 px-2 md:px-4 md:py-4">KuCoin</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">{coin.symbol}/BTC</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">{coin.price}</td>
                  <td className="py-3 px-2 md:px-4 md:py-4 hidden md:table-cell">$76,543</td>
                  <td className="py-3 px-2 md:px-4 md:py-4">
                    <a href="#" className="text-blue-400 hover:underline">
                      Trade
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "social" && (
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Social Media</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
              <h3 className="font-medium mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <span className="mr-2">🐦</span> Twitter
              </h3>
              <a href="#" className="text-blue-400 hover:underline mb-2 block text-sm md:text-base">
                {coin.twitter}
              </a>
              <p className="text-gray-300 text-xs md:text-sm">Follow for the latest updates and announcements</p>
            </div>

            <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
              <h3 className="font-medium mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <span className="mr-2">📱</span> Telegram
              </h3>
              <a href="#" className="text-blue-400 hover:underline mb-2 block text-sm md:text-base">
                {coin.telegram}
              </a>
              <p className="text-gray-300 text-xs md:text-sm">Join the community discussion</p>
            </div>

            <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
              <h3 className="font-medium mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <span className="mr-2">🌐</span> Website
              </h3>
              <a href="#" className="text-blue-400 hover:underline mb-2 block text-sm md:text-base">
                {coin.website}
              </a>
              <p className="text-gray-300 text-xs md:text-sm">Official project website</p>
            </div>

            <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
              <h3 className="font-medium mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <span className="mr-2">📄</span> Medium
              </h3>
              <a href="#" className="text-blue-400 hover:underline mb-2 block text-sm md:text-base">
                medium.com/{coin.symbol.toLowerCase()}
              </a>
              <p className="text-gray-300 text-xs md:text-sm">Read detailed articles and updates</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === "contract" && (
        <div className="mt-6">
          <h2 className="text-lg md:text-xl font-bold mb-4">Contract Information</h2>
          <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4 mb-4 md:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 md:mb-4">
              <div>
                <p className="text-gray-400 text-xs md:text-sm mb-1">Contract Address</p>
                <p className="font-mono break-all text-xs md:text-sm">{coin.contractAddress}</p>
              </div>
              <button className="mt-2 md:mt-0 px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-xs md:text-sm">
                Copy Address
              </button>
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-blue-400 hover:underline flex items-center text-xs md:text-sm">
                View on Explorer <ExternalLink className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <h3 className="text-md md:text-lg font-medium mb-2 md:mb-3">Token Information</h3>
              <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
                <div className="flex justify-between py-2 border-b border-gray-800 text-xs md:text-sm">
                  <span className="text-gray-400">Token Type</span>
                  <span>ERC-20</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800 text-xs md:text-sm">
                  <span className="text-gray-400">Network</span>
                  <span>Ethereum</span>
                </div>
                <div className="flex justify-between py-2 text-xs md:text-sm">
                  <span className="text-gray-400">Decimals</span>
                  <span>18</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-md md:text-lg font-medium mb-2 md:mb-3">Supply Information</h3>
              <div className="bg-[#1a1f27] rounded-lg p-3 md:p-4">
                <div className="flex justify-between py-2 border-b border-gray-800 text-xs md:text-sm">
                  <span className="text-gray-400">Total Supply</span>
                  <span>1,000,000,000</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800 text-xs md:text-sm">
                  <span className="text-gray-400">Circulating Supply</span>
                  <span>750,000,000</span>
                </div>
                <div className="flex justify-between py-2 text-xs md:text-sm">
                  <span className="text-gray-400">Max Supply</span>
                  <span>1,000,000,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CoinDetailPage

