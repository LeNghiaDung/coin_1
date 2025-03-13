"use client"

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
import { Menu, X, ArrowLeft } from "lucide-react"

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [selectedCoinId, setSelectedCoinId] = useState(null)

  // Check if screen is mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Close mobile menu when page changes
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
    // Scroll to top when navigating to detail page
    window.scrollTo(0, 0)
  }

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-white">
      {/* Sidebar - Chỉ hiển thị khi không phải điện thoại */}
      {!isMobile && <Sidebar />}
  
      {/* Mobile menu button */}
      {isMobile && (
        <button
          className="mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
  
      {/* Mobile menu */}
      {isMobile && mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-80">
          <div className="h-full w-64 bg-[#0d1117] p-5 flex flex-col">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-3">
                C
              </div>
              <span className="text-lg font-bold">COINMON</span>
            </div>
  
            <nav className="flex flex-col gap-4">
              <button
                onClick={navigateToHome}
                className="flex items-center text-left text-gray-300 hover:text-white py-2"
              >
                <span className="mr-3">🏠</span>
                <span>Home</span>
              </button>
              <button className="flex items-center text-left text-gray-300 hover:text-white py-2">
                <span className="mr-3">⭐</span>
                <span>Favorites</span>
              </button>
              <button className="flex items-center text-left text-gray-300 hover:text-white py-2">
                <span className="mr-3">📊</span>
                <span>Dashboard</span>
              </button>
            </nav>
          </div>
        </div>
      )}
  
      <div className={`flex-1 flex flex-col ${!isMobile ? "md:ml-16" : ""}`}>
        {/* Trending ticker bar - scrollable on mobile */}
        <div className="w-full overflow-x-auto border-b border-gray-800">
          <div className="trending-coins">
            <div className="flex items-center mr-4">
              <span className="text-yellow-500 mr-2">🔥</span>
              <span className="font-medium">Trending</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <span className="text-gray-400 mr-1">#9</span>
                <span className="font-medium mr-1">PEPE</span>
                <span className="text-green-500">+8.31%</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-1">#10</span>
                <span className="font-medium mr-1">SWIF</span>
                <span className="text-red-500">-1.79%</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Top navigation with search */}
        <Navbar />
  
        {/* Main content */}
        <main className="flex-1">
          {currentPage === "home" ? (
            <div className="p-4">
              {/* Category tabs - scrollable on mobile */}
              <div className="w-full overflow-x-auto mb-4">
                <Tab />
              </div>
  
              {/* COINMON Banner */}
              <Banner />
  
              {/* Promoted Coins Section */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Promoted Coins</h2>
                <div className="overflow-x-auto">
                  <CoinTable type="promoted" onCoinClick={navigateToCoinDetail} />
                </div>
              </div>
  
              {/* Top Coins Today Section */}
              <TopCoinToday onCoinClick={navigateToCoinDetail} />
            </div>
          ) : currentPage === "coinDetail" ? (
            <div className="p-4 md:p-6">
              {/* Back button */}
              <button
                onClick={navigateToHome}
                className="inline-flex items-center text-gray-400 hover:text-white mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all coins
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

export default App

