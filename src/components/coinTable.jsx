import { Star, ChevronDown } from "lucide-react"
import { useState } from "react"
import CoinDetail from "./coinDetail"
export default function CoinTable() {
  const [selectedCoin, setSelectedCoin] = useState(null)
  const handleCoinClick = (symbol) => {
    setSelectedCoin(symbol)
  }
  const handleBackToDashboard = () => {
    setSelectedCoin(null)
  }

  if (selectedCoin) {
    return <CoinDetail symbol={selectedCoin} onBack={handleBackToDashboard} />
  }
  return (
    // Promoted Coins
    <div className="px-4 py-2">
      <h2 className="text-2xl font-bold mb-4">Promoted Coins</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-gray-400 text-sm">
              <th className="py-3 px-2 w-10"></th>
              <th className="py-3 px-2 w-10">#</th>
              <th className="py-3 px-2">Asset</th>
              <th className="py-3 px-2">Price</th>
              <th className="py-3 px-2">%1h</th>
              <th className="py-3 px-2">%6h</th>
              <th className="py-3 px-2">%24h</th>
              <th className="py-3 px-2">Market Cap</th>
              <th className="py-3 px-2">FDV</th>
              <th className="py-3 px-2">24h Volume</th>
              <th className="py-3 px-2">
                <div className="flex items-center">
                  <span>Votes</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]" onClick={() => handleCoinClick("POM")}>
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">41</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center mr-2">
                    <span>Chó</span>
                  </div>
                  <div>
                    <div>POM</div>
                    <div className="text-gray-500 text-sm">POM</div>
                  </div>
                  <div className="ml-2 bg-yellow-600 p-1 rounded">
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-red-500">$0.0055</td>
              <td className="py-4 px-2 text-red-500">-0.12%</td>
              <td className="py-4 px-2 text-green-500">0.47%</td>
              <td className="py-4 px-2 text-green-500">3.63%</td>
              <td className="py-4 px-2">$4.62 M</td>
              <td className="py-4 px-2">$4.62 M</td>
              <td className="py-4 px-2">$199,273</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">2.45 K</div>
                  <div className="text-gray-500 text-sm">116</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]" onClick={() => handleCoinClick("BLACK")}>
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">426</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                    <span className="text-black font-bold">B</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      BLACK <span className="ml-1 text-yellow-500">⚠️</span>
                    </div>
                    <div className="text-gray-500 text-sm">BLACK</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-white">$0.006002</td>
              <td className="py-4 px-2 text-red-500">-0.85%</td>
              <td className="py-4 px-2 text-green-500">14.22%</td>
              <td className="py-4 px-2 text-green-500">123.00%</td>
              <td className="py-4 px-2">$6,000</td>
              <td className="py-4 px-2">$6,000</td>
              <td className="py-4 px-2">$4,194</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">306</div>
                  <div className="text-gray-500 text-sm">102</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]" onClick={() => handleCoinClick("PONGO")}>
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">97</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center mr-2">
                    <span>Ếch</span>
                  </div>
                  <div>
                    <div>PONGO</div>
                    <div className="text-gray-500 text-sm">PONGO</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-green-500">$0.0x71957</td>
              <td className="py-4 px-2 text-green-500">3.87%</td>
              <td className="py-4 px-2 text-green-500">1.59%</td>
              <td className="py-4 px-2 text-green-500">9.82%</td>
              <td className="py-4 px-2">$1.96 M</td>
              <td className="py-4 px-2">$1.96 M</td>
              <td className="py-4 px-2">$61,421</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">1.14 K</div>
                  <div className="text-gray-500 text-sm">72</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]" onClick={() => handleCoinClick("BPEP")}>
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1849</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                    <span className="text-black">B</span>
                  </div>
                  <div>
                    <div>BPEP</div>
                    <div className="text-gray-500 text-sm">Bitcoin Pepe</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-orange-500">PRESALE</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">78</div>
                  <div className="text-gray-500 text-sm">35</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">6</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                    <span className="text-black">B</span>
                  </div>
                  <div>
                    <div>BPEP</div>
                    <div className="text-gray-500 text-sm">Bitcoin Pepe</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-">$0.240493</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">78</div>
                  <div className="text-gray-500 text-sm">35</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1844</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                    <span className="text-black">B</span>
                  </div>
                  <div>
                    <div>BPEP</div>
                    <div className="text-gray-500 text-sm">Bitcoin Pepe</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-orange-500">PRESALE</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">78</div>
                  <div className="text-gray-500 text-sm">35</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">22</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                    <span className="text-black">B</span>
                  </div>
                  <div>
                    <div>BPEP</div>
                    <div className="text-gray-500 text-sm">Bitcoin Pepe</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-green-500">$0.00012</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">1.59%</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2">$1.95M</td>
              <td className="py-4 px-2">$61.084</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">78</div>
                  <div className="text-gray-500 text-sm">35</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> 
  )
}


