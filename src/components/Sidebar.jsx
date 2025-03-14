"use client"

import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { 
  CircleDot, 
  Coins, 
  Star, 
  Grid, 
  Plus, 
  Wand2,
  Twitter,
  Send
} from 'lucide-react'

const Sidebar = () => {
  const { theme } = useTheme()
  const [isExpanded, setIsExpanded] = useState(false)

  const menuItems = [
    {
      id: 'logo',
      icon: CircleDot,
      label: 'COINMON'
    },
    {
      id: 'coins',
      icon: Coins,
      label: 'Coins'
    },
    {
      id: 'watchlist',
      icon: Star,
      label: 'Watchlist'
    },
    {
      id: 'categories',
      icon: Grid,
      label: 'Categories'
    },
    {
      id: 'add-coin',
      icon: Plus,
      label: 'Add Coin'
    },
    {
      id: 'advertise',
      icon: Wand2,
      label: 'Advertise'
    }
  ]

  const socialItems = [
    {
      id: 'twitter',
      icon: Twitter,
      label: 'Follow us on X'
    },
    {
      id: 'telegram',
      icon: Send,
      label: 'Join Telegram'
    }
  ]

  return (
    <div 
      className={`fixed left-0 top-0 h-full ${
        isExpanded ? 'w-64' : 'w-16'
      } bg-[#0d1117] transition-all duration-300 ease-in-out z-50 flex flex-col`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Main Navigation */}
      <nav className="flex-1 py-4 border-b border-gray-800">
        {menuItems.map((item, index) => {
          const Icon = item.icon
          const isLogo = index === 0

          return (
            <button
              key={item.id}
              className={`w-full flex items-center px-4 py-3 text-gray-400 hover:text-white transition-colors duration-200 ${
                !isLogo ? 'hover:bg-gray-800' : ''
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Icon className={`w-5 h-5 ${isLogo ? 'text-yellow-500' : ''}`} />
                  {isExpanded && (
                    <span className={`ml-3 transition-opacity duration-300 ${
                      isLogo ? 'font-bold text-white' : ''
                    }`}>
                      {item.label}
                    </span>
                  )}
                </div>
              </div>
            </button>
          )
        })}
      </nav>

      {/* Social Links */}
      <nav className="py-4">
        {socialItems.map((item) => {
          const Icon = item.icon
          
          return (
            <button
              key={item.id}
              className="w-full flex items-center px-4 py-3 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <div className="flex items-center">
                <Icon className="w-5 h-5" />
                {isExpanded && (
                  <span className="ml-3 transition-opacity duration-300">
                    {item.label}
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default Sidebar

