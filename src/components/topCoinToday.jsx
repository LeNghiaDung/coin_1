import CoinTable from "./coinTable"

const TopCoinToday = ({ onCoinClick }) => {
  return (
    <div>
      <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Top Coins Today</h2>
      <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
        Discover Leading Cryptocurrencies Voted by the Community in the Last 24 Hours.
      </p>

      {/* Category filters - scrollable on mobile */}
      <div className="flex overflow-x-auto pb-2 mb-3 md:mb-4 gap-2 hide-scrollbar">
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">📊</span> Categories
        </button>
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">🔥</span> Telegram Bots
        </button>
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">🔥</span> DeFi
        </button>
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">🔥</span> AI
        </button>
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">🔥</span> DAO
        </button>
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">🔥</span> AI Agents <span className="ml-1 text-xs bg-purple-600 px-1 rounded">🎁</span>
        </button>
        <button className="flex items-center bg-[#1a1f27] px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm whitespace-nowrap">
          <span className="mr-1">📊</span> Filters
        </button>
      </div>

      <CoinTable type="top" onCoinClick={onCoinClick} />
    </div>
  )
}

export default TopCoinToday

