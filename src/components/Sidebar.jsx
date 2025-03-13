import { Home, Star, Grid, Plus, Share, MessageSquare } from "lucide-react"

const Sidebar = ({ isMobile, toggleMobileMenu }) => {
  const handleClick = () => {
    console.log("Clicked")
  }
  if (isMobile) return null

  return (
    <div className="w-16 h-screen bg-[#0d1117] border-r border-gray-800 flex flex-col items-center py-4 fixed left-0 top-0 z-30">
      <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mb-8">
        C
      </div>

      <div className="flex flex-col items-center gap-6 flex-1">
        <button onClick={handleClick} className="text-gray-400 hover:text-white">
          <Home size={20} />
        </button>
        <button onClick={handleClick} className="text-gray-400 hover:text-white">
          <Star size={20} />
        </button>
        <button onClick={handleClick} className="text-gray-400 hover:text-white">
          <Grid size={20} />
        </button>
        <button onClick={handleClick} className="text-gray-400 hover:text-white">
          <Plus size={20} />
        </button>
        <button onClick={handleClick} className="text-gray-400 hover:text-white">
          <Share size={20} />
        </button>
        <button onClick={handleClick} className="text-gray-400 hover:text-white">
          <MessageSquare size={20} />
        </button>
      </div>
    </div>
  )
}

export default Sidebar

