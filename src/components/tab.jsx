
export default function Tab({ activeTab, setActiveTab }) {
  return (
    <div className="flex space-x-2 px-4 py-2 overflow-x-auto scrollbar-hide">
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "topToday" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("topToday")}
      >
        <span className="text-gray-300">🕒</span>
        <span>Top Today</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "topAllTime" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("topAllTime")}
      >
        <span className="text-yellow-500">🏆</span>
        <span>Top All Time</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "presales" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("presales")}
      >
        <span className="text-yellow-500">🏅</span>
        <span>Presales</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "newListings" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("newListings")}
      >
        <span className="text-blue-500">🆕</span>
        <span>New Listings</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "trending" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("trending")}
      >
        <span className="text-orange-500">🔥</span>
        <span>Trending</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "gainers" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("gainers")}
      >
        <span className="text-red-500">🚀</span>
        <span>Gainers</span>
      </button>
      <button
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg ${
          activeTab === "losers" ? "bg-[#1a1f2e]" : "hover:bg-[#1a1f2e]"
        }`}
        onClick={() => setActiveTab("losers")}
      >
        <span className="text-blue-500">📉</span>
        <span>Losers</span>
      </button>
    </div>
  )
}

