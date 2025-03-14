import { useState, useMemo, useCallback, useEffect } from 'react'
import { Search as SearchIcon, X, Star, Loader2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const { theme } = useTheme()

  // Sample data - you can replace this with your actual data
  const allCoins = [
    { id: 1, name: 'FWOG', symbol: 'FWOG', icon: '🐸', votes: '11', promoted: true },
    { id: 2, name: 'FRACTIONS', symbol: 'Fractions', icon: '💎', votes: '22', promoted: true },
    { id: 3, name: 'BLACK', symbol: 'BLACK', icon: '⚫', votes: '415', promoted: false },
    { id: 4, name: 'TSUKI', symbol: 'Tsuki', icon: '🌙', votes: '6', promoted: true },
    { id: 5, name: 'POM', symbol: 'POM', icon: '🦊', votes: '37', promoted: false }
  ]

  const filteredCoins = useMemo(() => {
    if (!searchQuery) return []
    return allCoins.filter(coin => 
      coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery])

  // Simulate loading state
  useEffect(() => {
    if (searchQuery) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [searchQuery])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e) => {
    if (filteredCoins.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev => 
        prev < filteredCoins.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : prev)
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault()
      handleCoinSelect(filteredCoins[selectedIndex])
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      setSearchQuery('')
    }
  }, [filteredCoins, selectedIndex])

  const handleCoinSelect = (coin) => {
    console.log('Selected coin:', coin)
    setIsOpen(false)
    setSearchQuery('')
  }

  // Reset selected index when filtered results change
  useEffect(() => {
    setSelectedIndex(-1)
  }, [filteredCoins])

  // Close search on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest('.search-container')) {
        setIsOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className="relative w-full search-container">
      {!isOpen ? (
        <div className="relative w-full">
          <SearchIcon className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${
            theme === 'light' ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <input
            type="text"
            placeholder="Name, Symbol or Contract"
            onClick={() => setIsOpen(true)}
            className={`w-full pl-9 pr-4 py-1.5 text-sm rounded-lg outline-none transition-colors duration-200 ${
              theme === 'light'
                ? 'bg-gray-100 text-gray-900 placeholder-gray-500 hover:bg-gray-200 focus:bg-gray-200'
                : 'bg-[#1E222D] text-white placeholder-gray-400 hover:bg-[#262b38] focus:bg-[#262b38]'
            }`}
            readOnly
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <kbd className={`px-1.5 py-0.5 text-xs rounded border ${
              theme === 'light' 
                ? 'bg-gray-100 text-gray-500 border-gray-300'
                : 'bg-gray-800 text-gray-400 border-gray-700'
            }`}>/</kbd>
          </div>
        </div>
      ) : (
        <div className={`fixed inset-0 z-50 ${theme === 'light' ? 'bg-white/95' : 'bg-[#131722]/95'} backdrop-blur-sm`}>
          <div className="max-w-3xl mx-auto px-4 py-4 search-container">
            <div className="flex items-center gap-4">
              <form className="flex-1" onSubmit={e => e.preventDefault()}>
                <div className="relative">
                  {isLoading ? (
                    <Loader2 className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 animate-spin ${
                      theme === 'light' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                  ) : (
                    <SearchIcon className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                      theme === 'light' ? 'text-gray-400' : 'text-gray-500'
                    }`} />
                  )}
                  <input
                    type="text"
                    placeholder="Name, Symbol or Contract"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className={`w-full pl-12 pr-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                      theme === 'light'
                        ? 'bg-gray-100 text-gray-900 placeholder-gray-500 hover:bg-gray-200 focus:bg-gray-200'
                        : 'bg-[#1E222D] text-white placeholder-gray-400 hover:bg-[#262b38] focus:bg-[#262b38]'
                    }`}
                    autoFocus
                  />
                </div>
              </form>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setSearchQuery('')
                }}
                className={`p-2 rounded-full transition-all duration-200 ${
                  theme === 'light'
                    ? 'text-gray-700 hover:bg-gray-200'
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                <kbd className={`px-2 py-1 text-xs rounded border ${
                  theme === 'light' 
                    ? 'bg-gray-100 text-gray-500 border-gray-300'
                    : 'bg-gray-800 text-gray-400 border-gray-700'
                }`}>ESC</kbd>
              </button>
            </div>

            {/* Search Results */}
            <div className="mt-4">
              {searchQuery && (
                <div className={`rounded-lg overflow-hidden shadow-lg transition-all duration-200 ${
                  theme === 'light' ? 'bg-white' : 'bg-[#1E222D]'
                }`}>
                  <div className="p-3 border-b border-gray-800">
                    <h3 className={`text-sm font-medium ${
                      theme === 'light' ? 'text-gray-900' : 'text-white'
                    }`}>Promoted</h3>
                  </div>
                  
                  {isLoading ? (
                    <div className="p-8 text-center">
                      <Loader2 className={`w-6 h-6 animate-spin mx-auto ${
                        theme === 'light' ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    </div>
                  ) : filteredCoins.length > 0 ? (
                    <div className="divide-y divide-gray-800">
                      {filteredCoins.map((coin, index) => (
                        <div
                          key={coin.id}
                          onClick={() => handleCoinSelect(coin)}
                          className={`flex items-center justify-between p-3 cursor-pointer transition-all duration-200 ${
                            selectedIndex === index
                              ? theme === 'light'
                                ? 'bg-gray-100'
                                : 'bg-gray-700/30'
                              : ''
                          } ${
                            theme === 'light'
                              ? 'hover:bg-gray-50'
                              : 'hover:bg-gray-700/20'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-8 h-8 rounded-full overflow-hidden transition-all duration-200 ${
                              theme === 'light' ? 'bg-gray-100' : 'bg-[#131722]'
                            } flex items-center justify-center`}>
                              <span className="text-xl transform hover:scale-110 transition-transform">{coin.icon}</span>
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <span className={`font-medium ${
                                  theme === 'light' ? 'text-gray-900' : 'text-white'
                                }`}>{coin.name}</span>
                                <span className={`text-xs ${
                                  theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                                }`}>#{coin.votes}</span>
                              </div>
                              <div className={`text-xs ${
                                theme === 'light' ? 'text-gray-500' : 'text-gray-400'
                              }`}>{coin.symbol}</div>
                            </div>
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation()
                              console.log('Starred:', coin.name)
                            }}
                            className={`p-1.5 rounded-full transition-all duration-200 ${
                              theme === 'light'
                                ? 'hover:bg-gray-200'
                                : 'hover:bg-gray-700/50'
                            }`}
                          >
                            <Star className="w-4 h-4 text-gray-400 hover:text-yellow-500 transition-colors" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center text-gray-500">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 