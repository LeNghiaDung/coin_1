import { Star, Copy } from "lucide-react"
import CoinChart from "./CoinChart"

export default function CoinDetail({ symbol, onBack }) {
  // Mock data for the coin (in a real app, this would come from an API)
  const coinData = {
    POM: {
      name: "POM",
      fullName: "POM",
      iconBg: "bg-orange-300",
      price: "$0.005491",
      priceChange: "3.51%",
      isPriceUp: true,
      volume: "$198,670",
      marketCap: "$4.61M",
      votes: "2.54 K",
      voteCount24h: "129",
      contract: "0xFbf...5D4D6",
      rank: "#37",
      stars: "164",
      hourChange: "-0.18%",
      sixHourChange: "-0.13%",
      dayChange: "3.51%",
      totalSupply: "1 B",
      circulatingSupply: "100.00%",
      burned: "15.97%",
      burnedAmount: "159.72 M",
      volume24h: "$198,670",
      volumeMC: "0.043",
      liquidity: "$624,764",
    },
    SPX: {
      name: "SPX",
      fullName: "SPX6900",
      iconBg: "bg-yellow-500",
      price: "$0.3418",
      priceChange: "24.43%",
      isPriceUp: true,
      volume: "$8.21 M",
      marketCap: "$318.21 M",
      votes: "17 K",
      voteCount24h: "187",
      contract: "0xAbc...1234",
      rank: "#1",
      stars: "245",
      hourChange: "7.13%",
      sixHourChange: "17.42%",
      dayChange: "24.43%",
      totalSupply: "1 B",
      circulatingSupply: "100.00%",
      burned: "5.23%",
      burnedAmount: "52.3 M",
      volume24h: "$8.21 M",
      volumeMC: "0.026",
      liquidity: "$1.24 M",
    },
    BLACK: {
      name: "BLACK",
      fullName: "BLACK",
      icon: "B",
      iconBg: "bg-white",
      iconTextColor: "text-black font-bold",
      price: "$0.006002",
      priceChange: "123.00%",
      isPriceUp: true,
      volume: "$4,194",
      marketCap: "$6,000",
      votes: "306",
      voteCount24h: "102",
      contract: "0xDef...5678",
      rank: "#426",
      stars: "98",
      hourChange: "-0.85%",
      sixHourChange: "14.22%",
      dayChange: "123.00%",
      totalSupply: "1 M",
      circulatingSupply: "100.00%",
      burned: "0%",
      burnedAmount: "0",
      volume24h: "$4,194",
      volumeMC: "0.699",
      liquidity: "$12,000",
    },
    PONGO: {
      name: "PONGO",
      fullName: "PONGO",
      iconBg: "bg-green-600",
      price: "$0.0x71957",
      priceChange: "9.82%",
      isPriceUp: true,
      volume: "$61,421",
      marketCap: "$1.96 M",
      votes: "1.14 K",
      voteCount24h: "72",
      contract: "0xGhi...9012",
      rank: "#97",
      stars: "132",
      hourChange: "3.87%",
      sixHourChange: "1.59%",
      dayChange: "9.82%",
      totalSupply: "100 M",
      circulatingSupply: "85.00%",
      burned: "15.00%",
      burnedAmount: "15 M",
      volume24h: "$61,421",
      volumeMC: "0.031",
      liquidity: "$320,000",
    },
    UNO: {
      name: "UNO",
      fullName: "Uno",
      iconBg: "bg-gray-700",
      price: "$0.0x53961",
      priceChange: "-16.70%",
      isPriceUp: false,
      volume: "$1.03 M",
      marketCap: "$1.67 M",
      votes: "103",
      voteCount24h: "102",
      contract: "0xJkl...3456",
      rank: "#1661",
      stars: "45",
      hourChange: "-4.60%",
      sixHourChange: "-20.49%",
      dayChange: "-16.70%",
      totalSupply: "50 M",
      circulatingSupply: "90.00%",
      burned: "10.00%",
      burnedAmount: "5 M",
      volume24h: "$1.03 M",
      volumeMC: "0.617",
      liquidity: "$450,000",
    },
    BPEP: {
      name: "BPEP",
      fullName: "Bitcoin Pepe",
      iconBg: "bg-yellow-500",
      iconTextColor: "text-black",
      price: "PRESALE",
      priceChange: "N/A",
      isPriceUp: null,
      volume: "N/A",
      marketCap: "N/A",
      votes: "78",
      voteCount24h: "35",
      contract: "0xMno...7890",
      rank: "#1849",
      stars: "23",
      hourChange: "N/A",
      sixHourChange: "N/A",
      dayChange: "N/A",
      totalSupply: "1 B",
      circulatingSupply: "0%",
      burned: "0%",
      burnedAmount: "0",
      volume24h: "N/A",
      volumeMC: "N/A",
      liquidity: "N/A",
    },
  }

  // Get the data for the selected coin, or use POM as default
  const coin = coinData[symbol] || coinData.POM

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white p-4">
      {/* Header */}
      <div className="border-b border-gray-800 pb-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className={`w-12 h-12 rounded-full ${coin.iconBg} flex items-center justify-center`}>
                <span className={`text-xl ${coin.iconTextColor || ""}`}>{coin.icon}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold">{coin.name}</h1>
                <Star className="h-5 w-5 text-gray-400" />
                <span className="text-gray-400">{coin.stars}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>{coin.fullName}</span>
                <span className="px-2 py-1 bg-yellow-600/20 rounded-full text-yellow-500 text-xs">{coin.rank}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <div>
              <div
                className={`text-2xl font-bold ${coin.isPriceUp === null ? "text-orange-500" : coin.isPriceUp ? "text-green-500" : "text-red-500"}`}
              >
                {coin.price}
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <span className="text-gray-400">Vol</span>
                <span>{coin.volume}</span>
                <span className="text-gray-400">MC</span>
                <span>{coin.marketCap}</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{coin.votes}</div>
              <div className="text-sm text-gray-400">Votes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{coin.voteCount24h}</div>
              <div className="text-sm text-gray-400">24h</div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <CoinChart symbol={symbol} onBack={onBack} />

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center space-x-4 my-6">
        <div className="flex items-center space-x-2 px-3 py-2 bg-[#1a1f2e] rounded-lg">
          <span className="text-yellow-500">📦</span>
          <span className="text-sm font-mono">{coin.contract}</span>
          <Copy className="h-4 w-4 text-gray-400 cursor-pointer hover:text-white" />
        </div>
        <button className="flex items-center space-x-2 px-3 py-2 bg-[#1a1f2e] rounded-lg">
          <img src="/placeholder.svg?height=16&width=16" alt="BSC" className="h-4 w-4" />
          <span className="text-sm">bscscan.com</span>
        </button>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-lg">🌐</span>
          </button>
          <button className="p-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-lg">𝕏</span>
          </button>
          <button className="p-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-lg">✈️</span>
          </button>
        </div>
        <div className="ml-auto">
          <button className="px-6 py-2 bg-[#4f46e5] text-white rounded-lg hover:bg-opacity-90">
            🚀 Vote for {coin.name}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-[#1a1f2e] rounded-lg">
          <h3 className="text-lg font-bold mb-4">Market Stats</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Market Cap</span>
              <span>{coin.marketCap}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">FDV</span>
              <span>{coin.marketCap}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">24h Volume</span>
              <span>{coin.volume24h}</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#1a1f2e] rounded-lg">
          <h3 className="text-lg font-bold mb-4">Price Changes</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">1h Change</span>
              <span className={coin.hourChange.startsWith("-") ? "text-red-500" : "text-green-500"}>
                {coin.hourChange}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">6h Change</span>
              <span className={coin.sixHourChange.startsWith("-") ? "text-red-500" : "text-green-500"}>
                {coin.sixHourChange}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">24h Change</span>
              <span className={coin.dayChange.startsWith("-") ? "text-red-500" : "text-green-500"}>
                {coin.dayChange}
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-[#1a1f2e] rounded-lg">
          <h3 className="text-lg font-bold mb-4">Supply Info</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-400">Total Supply</span>
              <span>{coin.totalSupply}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Circulating</span>
              <span>{coin.circulatingSupply}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Burned</span>
              <span className="text-orange-500">{coin.burned}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

