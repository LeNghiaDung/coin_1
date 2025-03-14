import { Search, User, Moon } from "lucide-react";
export default function Searchbar() {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1a1f2e] text-gray-300 pl-10 pr-4 py-2 rounded-lg w-[500px] focus:outline-none"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-500">/</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-800">
          <User className="h-5 w-5 text-gray-400" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-800">
          <Moon className="h-5 w-5 text-gray-400" />
        </button>
      </div>
    </div>
  )
}

