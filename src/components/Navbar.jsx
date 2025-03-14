import { Menu, Sun, Moon } from "lucide-react"
import Search from "./Search"
import { useTheme } from "../context/ThemeContext"

const Navbar = ({ toggleMobileMenu }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={`sticky top-0 z-30 w-full border-b border-gray-800 ${
      theme === 'light' ? 'bg-white' : 'bg-[#131722]'
    }`}>
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section */}
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="max-w-md w-full">
              <Search />
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full hover:bg-gray-700/50 transition-colors ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

