import { useState, useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Banner from "./components/Banner"
import Tab from "./components/tab"
import CoinTable from "./components/coinTable"
import TopCoinToday from "./components/topCoinToday"
import Footer from "./components/Footer"
import CoinDetailPage from "./components/coinDetail"
import { ArrowLeft } from "lucide-react"
import { ThemeProvider, useTheme } from "./context/ThemeContext"

function AppContent() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedCoinId, setSelectedCoinId] = useState(null)
  const { theme } = useTheme()

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [currentPage])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navigateToHome = () => {
    setCurrentPage("home")
    setSelectedCoinId(null)
  }

  const navigateToCoinDetail = (coinId) => {
    setCurrentPage("coinDetail")
    setSelectedCoinId(coinId)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={`flex min-h-screen ${
      theme === 'light' ? 'bg-gray-100' : 'bg-[#0d1117]'
    } ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Menu Overlay - Only visible when menu is open on mobile */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-80 backdrop-blur-sm transition-opacity" 
          onClick={toggleMobileMenu}
        >
          <div 
            className={`h-full w-72 ${
              theme === 'light' ? 'bg-white' : 'bg-[#0d1117]'
            } p-6 flex flex-col transform transition-transform duration-300 ease-out`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3">
                  C
                </div>
                <span className="text-lg font-bold">COINMON</span>
              </div>
            </div>
            <nav className="flex flex-col gap-4">
              <button onClick={navigateToHome} className="flex items-center text-gray-300 hover:text-white py-2">
                <span className="mr-3">🏠</span> <span>Home</span>
              </button>
              <button className="flex items-center text-gray-300 hover:text-white py-2">
                <span className="mr-3">⭐</span> <span>Favorites</span>
              </button>
              <button className="flex items-center text-gray-300 hover:text-white py-2">
                <span className="mr-3">📈</span> <span>Top Gainers</span>
              </button>
              <button className="flex items-center text-gray-300 hover:text-white py-2">
                <span className="mr-3">📉</span> <span>Top Losers</span>
              </button>
              <button className="flex items-center text-gray-300 hover:text-white py-2">
                <span className="mr-3">🔍</span> <span>Search</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col w-full lg:ml-14 overflow-hidden">
        {/* Trending Coins Banner */}
        <div className="w-full bg-[#131722] border-b border-gray-800">
          <div className="flex items-center h-10 px-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex items-center gap-1">
                <span className="text-orange-500">🔥</span>
                <span className="text-orange-500">Trending</span>
              </div>
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="flex items-center gap-4 animate-marquee">
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#6</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🌊</span>
                      <span className="text-gray-200">TOSHI</span>
                      <span className="text-green-500">14.23%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#7</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🏛️</span>
                      <span className="text-gray-200">TRUMP</span>
                      <span className="text-green-500">4.79%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#8</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🐸</span>
                      <span className="text-gray-200">PEPE</span>
                      <span className="text-green-500">5.32%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#9</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🐕</span>
                      <span className="text-gray-200">$WIF</span>
                      <span className="text-green-500">6.83%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#10</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🥜</span>
                      <span className="text-gray-200">Pnut</span>
                      <span className="text-green-500">6.39%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#11</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">⚗️</span>
                      <span className="text-gray-200">ALCH</span>
                      <span className="text-red-500">-4.61%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#12</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🐱</span>
                      <span className="text-gray-200">KEYCAT</span>
                      <span className="text-green-500">84.28%</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400">#13</span>
                    <span className="flex items-center gap-1">
                      <span className="text-xl">🔑</span>
                      <span className="text-gray-200">KET</span>
                      <span className="text-green-500">10.59%</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Navbar toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={mobileMenuOpen} />

        <main className="flex-1">
          {currentPage === "home" ? (
            <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto w-full">
              <div className="w-full mb-6">
                <Tab />
              </div>
              <Banner />
              <div className="mb-8 lg:mb-12">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Promoted Coins</h2>
                <div className="w-full">
                  <CoinTable type="promoted" onCoinClick={navigateToCoinDetail} />
                </div>
              </div>
              <TopCoinToday onCoinClick={navigateToCoinDetail} />
            </div>
          ) : currentPage === "coinDetail" ? (
            <div className="p-4 md:p-6 lg:p-8 max-w-[1600px] mx-auto">
              <button
                onClick={navigateToHome}
                className="inline-flex items-center text-gray-400 hover:text-white mb-6 md:mb-8"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> Back to all coins
              </button>
              <CoinDetailPage coinId={selectedCoinId} />
            </div>
          ) : null}
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

