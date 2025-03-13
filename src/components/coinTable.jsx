"use client"

import { useState } from "react"
import { Star, ChevronDown } from "lucide-react"

const CoinTable = ({ type, onCoinClick }) => {
  const [promotedCoins] = useState([
    {
      id: 1,
      star: false,
      number: "41",
      icon: "POM",
      name: "POM",
      symbol: "POM",
      price: "$0.0055",
      change1h: "-0.12%",
      change6h: "0.47%",
      change24h: "3.63%",
      marketCap: "$4.62 M",
      fdv: "$4.62 M",
      volume: "$199,273",
      votes: "2.45 K",
      voteCount: "116",
    },
    {
      id: 2,
      star: false,
      number: "426",
      icon: "B",
      name: "BLACK",
      symbol: "BLACK",
      warning: true,
      price: "$0.006002",
      change1h: "-0.85%",
      change6h: "14.22%",
      change24h: "123.00%",
      marketCap: "$6,000",
      fdv: "$6,000",
      volume: "$4,194",
      votes: "306",
      voteCount: "102",
    },
    {
      id: 3,
      star: false,
      number: "97",
      icon: "Eca",
      name: "PONGO",
      symbol: "PONGO",
      price: "$0.0x71957",
      change1h: "3.87%",
      change6h: "1.59%",
      change24h: "9.82%",
      marketCap: "$1.96 M",
      fdv: "$1.96 M",
      volume: "$61,421",
      votes: "1.14 K",
      voteCount: "72",
    },
    {
      id: 4,
      star: false,
      number: "1849",
      icon: "B",
      name: "BPEP",
      symbol: "Bitcoin Pepe",
      price: "PRESALE",
      change1h: "--",
      change6h: "--",
      change24h: "--",
      marketCap: "--",
      fdv: "--",
      volume: "--",
      votes: "78",
      voteCount: "38",
    },
    {
      id: 5,
      star: false,
      number: "6",
      icon: "B",
      name: "BPEP",
      symbol: "Bitcoin Pepe",
      price: "$0.240493",
      change1h: "--",
      change6h: "--",
      change24h: "--",
      marketCap: "--",
      fdv: "--",
      volume: "--",
      votes: "78",
      voteCount: "35",
    },
    {
      id: 6,
      star: false,
      number: "1844",
      icon: "B",
      name: "BPEP",
      symbol: "Bitcoin Pepe",
      price: "PRESALE",
      change1h: "--",
      change6h: "--",
      change24h: "--",
      marketCap: "--",
      fdv: "--",
      volume: "--",
      votes: "78",
      voteCount: "35",
    },
    {
      id: 7,
      star: false,
      number: "22",
      icon: "B",
      name: "BPEP",
      symbol: "Bitcoin Pepe",
      price: "$0.00012",
      change1h: "--",
      change6h: "1.59%",
      change24h: "--",
      marketCap: "--",
      fdv: "$1.95M",
      volume: "$61,084",
      votes: "78",
      voteCount: "35",
    },
  ])

  const [topCoins] = useState([
    // You would populate this with top coins data
    // For now using the same data as promoted for demonstration
    ...promotedCoins.slice(0, 5),
  ])

  const coins = type === "promoted" ? promotedCoins : topCoins

  // Handle coin click to navigate to detail page
  const handleCoinClick = (coinId) => {
    if (onCoinClick) {
      onCoinClick(coinId)
    }
  }

  // Handle star click without navigating
  const handleStarClick = (e, coinId) => {
    e.stopPropagation() // Prevent navigation
    // Add your star/favorite logic here
    console.log(`Starred coin ${coinId}`)
  }

  // Mobile card view for small screens
  const renderMobileCard = (coin) => (
    <div
      key={coin.id}
      className="bg-[#1a1f27] p-4 rounded-lg mb-3 cursor-pointer hover:bg-gray-800/30 transition-colors duration-200 sm:hidden"
      onClick={() => handleCoinClick(coin.id)}
    >
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-black mr-2">
            {coin.icon}
          </div>
          <div>
            <div className="font-medium flex items-center">
              {coin.name}
              {coin.warning && <span className="ml-1 text-yellow-500">⚠️</span>}
            </div>
            <div className="text-xs text-gray-400">{coin.symbol}</div>
          </div>
        </div>
        <div className="flex items-center">
          <button className="text-gray-400 hover:text-yellow-400" onClick={(e) => handleStarClick(e, coin.id)}>
            <Star className="h-4 w-4" />
          </button>
          <span className="ml-2 text-gray-400">{coin.number}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <div>
          <div className="text-xs text-gray-400">Price</div>
          <div className={`font-medium ${coin.price === "PRESALE" ? "text-orange-500" : ""}`}>{coin.price}</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">24h</div>
          <div
            className={`font-medium ${coin.change24h.startsWith("-") ? "text-red-500" : coin.change24h !== "--" ? "text-green-500" : ""}`}
          >
            {coin.change24h}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div>
          <div className="text-xs text-gray-400">Volume</div>
          <div className="font-medium">{coin.volume}</div>
        </div>
        <div className="text-right">
          <div className="text-xs text-gray-400">Votes</div>
          <div className="text-blue-400">
            {coin.votes} <span className="text-xs text-gray-400">({coin.voteCount})</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full">
      {/* Mobile card view */}
      <div className="sm:hidden">{coins.map(renderMobileCard)}</div>

      {/* Table view for tablet and desktop */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm border-b border-gray-800">
              <th className="py-3 px-4">#</th>
              <th className="py-3 px-4">Asset</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4 hidden md:table-cell">%1h</th>
              <th className="py-3 px-4 hidden lg:table-cell">%6h</th>
              <th className="py-3 px-4 hidden md:table-cell">%24h</th>
              <th className="py-3 px-4 hidden lg:table-cell">Market Cap</th>
              <th className="py-3 px-4 hidden lg:table-cell">FDV</th>
              <th className="py-3 px-4 hidden md:table-cell">24h Volume</th>
              <th className="py-3 px-4 flex items-center">
                Votes <ChevronDown className="ml-1 h-4 w-4" />
              </th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-gray-800 hover:bg-gray-800/30 cursor-pointer transition-colors duration-200"
                onClick={() => handleCoinClick(coin.id)}
              >
                <td className="py-4 px-4 flex items-center">
                  <button
                    className="mr-2 text-gray-400 hover:text-yellow-400"
                    onClick={(e) => handleStarClick(e, coin.id)}
                  >
                    <Star className="h-4 w-4" />
                  </button>
                  {coin.number}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-xs text-black mr-2">
                      {coin.icon}
                    </div>
                    <div>
                      <div className="font-medium flex items-center">
                        {coin.name}
                        {coin.warning && <span className="ml-1 text-yellow-500">⚠️</span>}
                      </div>
                      <div className="text-xs text-gray-400">{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className={`py-4 px-4 ${coin.price === "PRESALE" ? "text-orange-500" : ""}`}>{coin.price}</td>
                <td
                  className={`py-4 px-4 hidden md:table-cell ${coin.change1h.startsWith("-") ? "text-red-500" : coin.change1h !== "--" ? "text-green-500" : ""}`}
                >
                  {coin.change1h}
                </td>
                <td
                  className={`py-4 px-4 hidden lg:table-cell ${coin.change6h.startsWith("-") ? "text-red-500" : coin.change6h !== "--" ? "text-green-500" : ""}`}
                >
                  {coin.change6h}
                </td>
                <td
                  className={`py-4 px-4 hidden md:table-cell ${coin.change24h.startsWith("-") ? "text-red-500" : coin.change24h !== "--" ? "text-green-500" : ""}`}
                >
                  {coin.change24h}
                </td>
                <td className="py-4 px-4 hidden lg:table-cell">{coin.marketCap}</td>
                <td className="py-4 px-4 hidden lg:table-cell">{coin.fdv}</td>
                <td className="py-4 px-4 hidden md:table-cell">{coin.volume}</td>
                <td className="py-4 px-4">
                  <div className="text-blue-400">{coin.votes}</div>
                  <div className="text-xs text-gray-400">{coin.voteCount}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CoinTable

