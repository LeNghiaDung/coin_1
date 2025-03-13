const Tab = () => {
  const tabs = [
    { icon: "⭐", label: "Top Today" },
    { icon: "🏆", label: "Top All Time" },
    { icon: "🔥", label: "Presales" },
    { icon: "📋", label: "New Listings" },
    { icon: "🔥", label: "Trending" },
    { icon: "📈", label: "Gainers" },
    { icon: "📉", label: "Losers" },
  ]

  return (
    <div className="flex space-x-2 md:space-x-4 py-2 md:py-4 min-w-max">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium flex items-center whitespace-nowrap ${
            index === 0 ? "bg-gray-700" : "bg-transparent hover:bg-gray-700"
          }`}
        >
          <span className="mr-1 md:mr-2">{tab.icon}</span>
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default Tab

