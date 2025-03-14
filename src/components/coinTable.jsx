"use client"

import { useState, useEffect } from "react"
import { Star, ChevronDown, TrendingUp, TrendingDown } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

const CoinTable = ({ type, onCoinClick }) => {
  const [promotedCoins] = useState([
    {
      id: 1,
      star: false,
      number: "37",
      icon: "🦊",
      name: "POM",
      symbol: "POM",
      warning: false,
      price: "$0.003475",
      change1h: "3.61%",
      change6h: "6.54%",
      change24h: "-36.88%",
      marketCap: "$2.92M",
      fdv: "$2.92M",
      volume: "$337,862",
      votes: "2.54K",
      voteCount: "129",
    },
    {
      id: 2,
      star: false,
      number: "91",
      icon: "🦍",
      name: "PONGO",
      symbol: "PONGO",
      warning: false,
      price: "$0.072036",
      change1h: "-0.21%",
      change6h: "-1.31%",
      change24h: "8.98%",
      marketCap: "$2.04M",
      fdv: "$2.04M",
      volume: "$27,185",
      votes: "1.2K",
      voteCount: "62",
    },
    {
      id: 3,
      star: false,
      number: "11",
      icon: "🐸",
      name: "FWOG",
      symbol: "FWOG",
      warning: true,
      price: "$0.04353",
      change1h: "-2.09%",
      change6h: "-1.17%",
      change24h: "1.46%",
      marketCap: "$42.47M",
      fdv: "$42.47M",
      volume: "$1.29M",
      votes: "8.18K",
      voteCount: "52",
    },
    {
      id: 4,
      star: false,
      number: "415",
      icon: "⚫",
      name: "BLACK",
      symbol: "BLACK",
      warning: true,
      price: "$0.006084",
      change1h: "--",
      change6h: "3.61%",
      change24h: "1.37%",
      marketCap: "$6,082",
      fdv: "$6,082",
      volume: "$1,972",
      votes: "312",
      voteCount: "45",
    },
    {
      id: 5,
      star: false,
      number: "22",
      icon: "💎",
      name: "FRACTIONS",
      symbol: "Fractions",
      warning: true,
      price: "$0.0000437",
      change1h: "1.61%",
      change6h: "5.56%",
      change24h: "-0.12%",
      marketCap: "$42,259",
      fdv: "$42,259",
      volume: "$391",
      votes: "3.9K",
      voteCount: "26",
    },
    {
      id: 6,
      star: false,
      number: "6",
      icon: "🌙",
      name: "TSUKI",
      symbol: "Tsuki",
      warning: true,
      price: "$0.001097",
      change1h: "1.55%",
      change6h: "-3.17%",
      change24h: "-6.65%",
      marketCap: "$1.04M",
      fdv: "$1.04M",
      volume: "$9,900",
      votes: "10.84K",
      voteCount: "18",
    },
    {
      id: 7,
      star: false,
      number: "1837",
      icon: "🪙",
      name: "BPEP",
      symbol: "Bitcoin Pepe",
      warning: false,
      price: "PRESALE",
      change1h: "--",
      change6h: "--",
      change24h: "--",
      marketCap: "--",
      fdv: "--",
      volume: "--",
      votes: "87",
      voteCount: "9",
    },
  ])
  const { theme } = useTheme()
  const [hoveredRow, setHoveredRow] = useState(null)
  const [starredCoins, setStarredCoins] = useState(new Set())

  const handleStarClick = (e, coinId) => {
    e.stopPropagation()
    setStarredCoins(prev => {
      const newStarred = new Set(prev)
      if (newStarred.has(coinId)) {
        newStarred.delete(coinId)
      } else {
        newStarred.add(coinId)
      }
      return newStarred
    })
  }

  const getPercentageColor = (value) => {
    if (value === "--") return "text-gray-400"
    return value.startsWith("-") ? "text-red-500" : "text-green-500"
  }

  const formatPercentage = (value) => {
    if (value === "--") return value
    const isNegative = value.startsWith("-")
    return (
      <div className="flex items-center gap-1 justify-end">
        {isNegative ? (
          <TrendingDown className="w-3 h-3" />
        ) : (
          <TrendingUp className="w-3 h-3" />
        )}
        {value}
      </div>
    )
  }

  return (
    <div className={`w-full ${theme === 'light' ? 'bg-white' : 'bg-[#0d1117]'} rounded-lg shadow-lg transition-all duration-300`}>
      {/* Mobile View */}
      <div className="block lg:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <table className="w-full border-separate border-spacing-0 min-w-[800px]">
          <thead className={`sticky top-0 z-10 ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0B0E17]'}`}>
            <tr className={`${theme === 'light' ? 'text-gray-500' : 'text-gray-400'} text-xs`}>
              <th className={`text-left p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium sticky left-0 ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0B0E17]'} transition-colors duration-200`}>#</th>
              <th className={`text-left p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium min-w-[200px] sticky left-16 ${theme === 'light' ? 'bg-gray-50' : 'bg-[#0B0E17]'} transition-colors duration-200`}>Asset</th>
              <th className={`text-right p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium transition-colors duration-200`}>%6h</th>
              <th className={`text-right p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium transition-colors duration-200`}>%24h</th>
              <th className={`text-right p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium transition-colors duration-200`}>Market Cap</th>
              <th className={`text-right p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium transition-colors duration-200`}>FDV</th>
              <th className={`text-right p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium transition-colors duration-200`}>24h Volume</th>
              <th className={`text-right p-3 pb-2 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} font-medium transition-colors duration-200`}>
                <div className="flex items-center justify-end gap-1 group cursor-pointer">
                  Votes 
                  <ChevronDown size={12} className="group-hover:translate-y-0.5 transition-transform duration-200" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {promotedCoins.map((coin) => (
              <tr
                key={coin.id}
                onClick={() => onCoinClick?.(coin.id)}
                onMouseEnter={() => setHoveredRow(coin.id)}
                onMouseLeave={() => setHoveredRow(null)}
                className={`group cursor-pointer transition-all duration-200 ${
                  hoveredRow === coin.id
                    ? theme === 'light'
                      ? 'bg-gray-50'
                      : 'bg-[#1E222D]'
                    : ''
                }`}
              >
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200 text-gray-500' : 'border-gray-800 text-gray-400'} sticky left-0 ${theme === 'light' ? 'bg-white' : 'bg-[#0d1117]'} transition-colors duration-200 group-hover:${theme === 'light' ? 'bg-gray-50' : 'bg-[#1E222D]'}`}>
                  <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => handleStarClick(e, coin.id)}
                      className={`p-1 rounded-full transition-all duration-200 ${
                        theme === 'light' ? 'hover:bg-gray-200' : 'hover:bg-gray-700/50'
                      }`}
                    >
                      <Star
                        size={14}
                        className={`transition-colors duration-200 ${
                          starredCoins.has(coin.id)
                            ? 'text-yellow-500 fill-yellow-500'
                            : 'text-gray-400 hover:text-yellow-500'
                        }`}
                      />
                  </button>
                    #{coin.number}
                  </div>
                </td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} sticky left-16 ${theme === 'light' ? 'bg-white' : 'bg-[#0d1117]'} transition-colors duration-200 group-hover:${theme === 'light' ? 'bg-gray-50' : 'bg-[#1E222D]'}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full overflow-hidden ${theme === 'light' ? 'bg-gray-100' : 'bg-[#1E222D]'} flex-shrink-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <span className="text-xl">{coin.icon}</span>
                    </div>
                    <div>
                      <div className={`font-medium ${theme === 'light' ? 'text-gray-900' : 'text-white'} flex items-center gap-1`}>
                        {coin.name}
                        {coin.warning && (
                          <span className="text-yellow-500 text-xs transition-opacity hover:opacity-80 cursor-help">⚠️</span>
                        )}
                        {coin.isMeme && (
                          <span className="text-xs bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded animate-pulse">MEME</span>
                        )}
                      </div>
                      <div className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>{coin.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} text-right transition-colors duration-200`}>
                  <span className={`${getPercentageColor(coin.change6h)}`}>
                    {formatPercentage(coin.change6h)}
                  </span>
                </td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} text-right transition-colors duration-200`}>
                  <span className={`${getPercentageColor(coin.change24h)}`}>
                    {formatPercentage(coin.change24h)}
                  </span>
                </td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} text-gray-400 text-right transition-colors duration-200`}>{coin.marketCap}</td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} text-gray-400 text-right transition-colors duration-200`}>{coin.fdv}</td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} text-gray-400 text-right transition-colors duration-200`}>{coin.volume}</td>
                <td className={`p-3 border-b ${theme === 'light' ? 'border-gray-200' : 'border-gray-800'} text-right transition-colors duration-200`}>
                  <div className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200">{coin.votes}</div>
                  <div className={`text-xs ${theme === 'light' ? 'text-gray-500' : 'text-gray-400'}`}>({coin.voteCount})</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block w-full overflow-hidden">
        <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <table className="w-full border-separate border-spacing-0">
            <thead className="sticky top-0 z-10 bg-[#0B0E17]">
              <tr className="text-gray-400 text-xs">
                <th className="sticky left-0 z-20 bg-[#0B0E17] text-left p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">
                  <Star size={14} className="text-gray-500 transition-colors hover:text-yellow-500" />
                </th>
                <th className="sticky left-12 bg-[#0B0E17] text-left p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">#</th>
                <th className="sticky left-24 bg-[#0B0E17] text-left p-3 pb-2 border-b border-gray-800 font-medium min-w-[200px] whitespace-nowrap">Asset</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">Price</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">%1h</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">%6h</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">%24h</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">Market Cap</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">FDV</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">24h Volume</th>
                <th className="text-right p-3 pb-2 border-b border-gray-800 font-medium whitespace-nowrap">
                  <div className="flex items-center justify-end">
                    Votes <ChevronDown size={12} className="ml-1" />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {promotedCoins.map((coin) => (
                <tr
                  key={coin.id}
                  onClick={() => onCoinClick?.(coin.id)}
                  className="cursor-pointer hover:bg-[#1E222D] transition-colors"
                >
                  <td className="p-3 border-b border-gray-800">
                    <button
                      onClick={(e) => handleStarClick(e, coin.id)}
                      className="text-gray-500 hover:text-yellow-500 transition-colors"
                    >
                      <Star size={14} />
                    </button>
                  </td>
                  <td className="p-3 border-b border-gray-800 text-gray-400">#{coin.number}</td>
                  <td className="p-3 border-b border-gray-800">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#1E222D] flex items-center justify-center text-xl">
                        {coin.icon}
                      </div>
                      <div>
                        <div className="font-medium text-white flex items-center gap-1">
                          {coin.name}
                          {coin.warning && <span className="text-yellow-500 text-xs">⚠️</span>}
                          {coin.isMeme && (
                            <span className="text-xs bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded">MEME</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-400">{coin.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 border-b border-gray-800 text-right">
                    <span className={coin.price === "PRESALE" ? "text-orange-500 font-medium" : "text-white"}>
                  {coin.price}
                    </span>
                </td>
                  <td className="p-3 border-b border-gray-800 text-right">
                    <span
                      className={
                    coin.change1h === "--"
                      ? "text-gray-400"
                      : coin.change1h.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                      }
                >
                  {coin.change1h}
                    </span>
                </td>
                  <td className="p-3 border-b border-gray-800 text-right">
                    <span
                      className={
                    coin.change6h === "--"
                      ? "text-gray-400"
                      : coin.change6h.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                      }
                >
                  {coin.change6h}
                    </span>
                </td>
                  <td className="p-3 border-b border-gray-800 text-right">
                    <span
                      className={
                    coin.change24h === "--"
                      ? "text-gray-400"
                      : coin.change24h.startsWith("-")
                        ? "text-red-500"
                        : "text-green-500"
                      }
                >
                  {coin.change24h}
                    </span>
                </td>
                  <td className="p-3 border-b border-gray-800 text-gray-400 text-right">{coin.marketCap}</td>
                  <td className="p-3 border-b border-gray-800 text-gray-400 text-right">{coin.fdv}</td>
                  <td className="p-3 border-b border-gray-800 text-gray-400 text-right">{coin.volume}</td>
                  <td className="p-3 border-b border-gray-800 text-right">
                  <div className="text-blue-400">{coin.votes}</div>
                  <div className="text-xs text-gray-400">({coin.voteCount})</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  )
}

export default CoinTable

