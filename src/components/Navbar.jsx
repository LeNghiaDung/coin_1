import { ChevronDown } from "lucide-react"

export default function Navbar() {
  return (
    <div className="flex items-center px-4 py-2 border-b border-gray-800 overflow-x-auto scrollbar-hide">
      <div className="flex items-center space-x-2 text-sm">
        <div className="flex items-center space-x-1">
          <span className="text-orange-500">🔥</span>
          <span className="font-medium">Trending</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
        <span className="text-red-500">-10%</span>
        <span className="text-gray-500">#8</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-xs">🐸</span>
          </div>
          <span>PEPE</span>
          <span className="text-green-500">8.31%</span>
        </div>
        <span className="text-gray-500">#9</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-orange-300 flex items-center justify-center">
            <span className="text-xs">🐶</span>
          </div>
          <span>SWIF</span>
          <span className="text-red-500">-1.79%</span>
        </div>
        <span className="text-gray-500">#10</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xs">🐧</span>
          </div>
          <span>PENGU</span>
          <span className="text-red-500">-1.32%</span>
        </div>
        <span className="text-gray-500">#11</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-xs">₮</span>
          </div>
          <span>TRISIG</span>
          <span className="text-green-500">133.00%</span>
        </div>
        <span className="text-gray-500">#12</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-xs">🪙</span>
          </div>
          <span>TOSHI</span>
          <span className="text-green-500">18.62%</span>
        </div>
        <span className="text-gray-500">#13</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-xs">🐝</span>
          </div>
          <span>swarms</span>
          <span className="text-green-500">2.00%</span>
        </div>
        <span className="text-gray-500">#14</span>
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 rounded-full bg-yellow-300 flex items-center justify-center">
            <span className="text-xs">🥚</span>
          </div>
          <span>EGGS</span>
        </div>
      </div>
    </div>
  )
}

