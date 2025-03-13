
import { ArrowLeft } from "lucide-react"

export default function CoinChart({ symbol, onBack }) {
  const getChartImageUrl = (symbol) => {
    // const chartImages = {
    //   POM: "https://i.imgur.com/JRCgQZs.png",
    //   SPX: "https://i.imgur.com/8XMTfyv.png",
    //   BLACK: "https://i.imgur.com/vD8ywbO.png",
    //   PONGO: "https://i.imgur.com/L5hQPzf.png",
    //   UNO: "https://i.imgur.com/2YHhwBj.png",
    //   BPEP: "https://i.imgur.com/JRCgQZs.png",
    // }
  }
  return (
    <div className="w-full">
      {/* Back button */}
      <div className="mb-4">
        <button onClick={onBack} className="flex items-center text-gray-400 hover:text-white">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span>Back to Dashboard</span>
        </button>
      </div>
      {/* Chart container */}
      <div className="relative w-full h-[400px]">
        {/* Chart image */}
        <img src="./cc.jpg" className="w-full h-full object-cover" />
        {/* Overlay with coin info */}
        <div className="absolute top-4 left-4 bg-[#0a0e17]/80 p-3 rounded-lg">
          <div className="text-lg font-bold">{symbol}/USDT</div>
          <div className="text-green-500 font-bold">$0.005491 (+3.51%)</div>
        </div>
      </div>
    </div>
  )
}

