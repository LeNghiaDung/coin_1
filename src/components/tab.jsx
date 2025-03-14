import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const Tab = () => {
  const [activeTab, setActiveTab] = useState('top-today')

  const tabs = [
    {
      id: 'top-today',
      label: 'Top Today',
      icon: '⌚'
    },
    {
      id: 'top-all-time',
      label: 'Top All Time',
      icon: '🏆'
    },
    {
      id: 'presales',
      label: 'Presales',
      icon: '⏳'
    },
    {
      id: 'new-listings',
      label: 'New Listings',
      icon: '📋'
    },
    {
      id: 'trending',
      label: 'Trending',
      icon: '🔥'
    },
    {
      id: 'gainers',
      label: 'Gainers',
      icon: '📈'
    },
    {
      id: 'losers',
      label: 'Losers',
      icon: '📉'
    }
  ]

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-2 px-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-200 ${
              isActive 
                ? 'bg-[#1E222D] text-white' 
                : 'bg-transparent text-gray-400 hover:text-white'
            }`}
          >
            <span className="text-base">{tab.icon}</span>
            <span className="whitespace-nowrap text-sm">{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default Tab

