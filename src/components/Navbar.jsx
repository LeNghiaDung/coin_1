import { Search, Moon } from "lucide-react"

const Navbar = () => {
  return (
    <div className="bg-[#0B0E17] px-4 py-3 flex items-center justify-between border-b border-[#1F2937]">
      {/* Logo and search section */}
      <div className="flex items-center flex-1">
        <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-4">
          C
        </div>
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1F2937] rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-yellow-500"
          />
        </div>
      </div>

      {/* Theme toggle */}
      <button className="ml-4">
        <Moon className="h-5 w-5 text-gray-400" />
      </button>
    </div>
  )
}

export default Navbar

