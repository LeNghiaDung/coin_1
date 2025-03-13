import { Star, SlidersHorizontal, Menu } from "lucide-react"

export default function TopCoinsToday() {
  return (
    <div className="px-4 py-6">
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl font-bold text-white">Top Coins Today</h2>
        <p className="text-gray-400">Discover Leading Cryptocurrencies Voted by the Community in the Last 24 Hours.</p>
      </div>

      {/* Categories Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <Menu className="h-4 w-4" />
            <span>Categories</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-orange-500">🔥</span>
            <span>Telegram Bots</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-orange-500">🔥</span>
            <span>DeFi</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-orange-500">🔥</span>
            <span>AI</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-orange-500">🔥</span>
            <span>DAO</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
            <span className="text-orange-500">🔥</span>
            <span>AI Agents</span>
            <span>🤖</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-[#1a1f2e] rounded-lg hover:bg-opacity-80">
          <SlidersHorizontal className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>

      {/* Coins Table */}
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
              <th className="py-3 px-2">Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center mr-2">
                    <span>🪙</span>
                  </div>
                  <div>
                    <div className="flex items-center">
                      SPX <span className="ml-1 text-yellow-500">⚠️</span>
                    </div>
                    <div className="text-gray-500 text-sm">SPX6900</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2">$0.3418</td>
              <td className="py-4 px-2 text-green-500">7.13%</td>
              <td className="py-4 px-2 text-green-500">17.42%</td>
              <td className="py-4 px-2 text-green-500">24.43%</td>
              <td className="py-4 px-2">$318.21 M</td>
              <td className="py-4 px-2">$318.21 M</td>
              <td className="py-4 px-2">$8.21 M</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">17 K</div>
                  <div className="text-gray-500 text-sm">187</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">37</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center mr-2">
                    <span>🐶</span>
                  </div>
                  <div>
                    <div>POM</div>
                    <div className="text-gray-500 text-sm">POM</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2">$0.005495</td>
              <td className="py-4 px-2 text-red-500">-0.10%</td>
              <td className="py-4 px-2 text-red-500">-0.06%</td>
              <td className="py-4 px-2 text-green-500">3.57%</td>
              <td className="py-4 px-2">$4.62 M</td>
              <td className="py-4 px-2">$4.62 M</td>
              <td className="py-4 px-2">$198,683</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">2.52 K</div>
                  <div className="text-gray-500 text-sm">106</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">425</td>
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
              <td className="py-4 px-2">$0.006002</td>
              <td className="py-4 px-2">--</td>
              <td className="py-4 px-2 text-green-500">14.22%</td>
              <td className="py-4 px-2 text-green-500">102.00%</td>
              <td className="py-4 px-2">$6,000</td>
              <td className="py-4 px-2">$6,000</td>
              <td className="py-4 px-2">$4,107</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">307</div>
                  <div className="text-gray-500 text-sm">103</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1661</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                    <span>⚔️</span>
                  </div>
                  <div>
                    <div>UNO</div>
                    <div className="text-gray-500 text-sm">Uno</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-red-500">$0.0x53961</td>
              <td className="py-4 px-2 text-red-500">-4.60%</td>
              <td className="py-4 px-2 text-red-500">-20.49%</td>
              <td className="py-4 px-2 text-red-500">-16.70%</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.03 M</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">103</div>
                  <div className="text-gray-500 text-sm">102</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1661</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                    <span>⚔️</span>
                  </div>
                  <div>
                    <div>UNO</div>
                    <div className="text-gray-500 text-sm">Uno</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-red-500">$0.0x53961</td>
              <td className="py-4 px-2 text-red-500">-4.60%</td>
              <td className="py-4 px-2 text-red-500">-20.49%</td>
              <td className="py-4 px-2 text-red-500">-16.70%</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.03 M</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">103</div>
                  <div className="text-gray-500 text-sm">102</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1661</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                    <span>⚔️</span>
                  </div>
                  <div>
                    <div>UNO</div>
                    <div className="text-gray-500 text-sm">Uno</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-red-500">$0.0x53961</td>
              <td className="py-4 px-2 text-red-500">-4.60%</td>
              <td className="py-4 px-2 text-red-500">-20.49%</td>
              <td className="py-4 px-2 text-red-500">-16.70%</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.03 M</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">103</div>
                  <div className="text-gray-500 text-sm">102</div>
                </div>
              </td>
            </tr>
            <tr className="border-t border-gray-800 hover:bg-[#1a1f2e]">
              <td className="py-4 px-2">
                <Star className="h-5 w-5 text-gray-500" />
              </td>
              <td className="py-4 px-2 text-gray-400">1661</td>
              <td className="py-4 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
                    <span>⚔️</span>
                  </div>
                  <div>
                    <div>UNO</div>
                    <div className="text-gray-500 text-sm">Uno</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 text-red-500">$0.0x53961</td>
              <td className="py-4 px-2 text-red-500">-4.60%</td>
              <td className="py-4 px-2 text-red-500">-20.49%</td>
              <td className="py-4 px-2 text-red-500">-16.70%</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.67 M</td>
              <td className="py-4 px-2">$1.03 M</td>
              <td className="py-4 px-2">
                <div className="flex flex-col items-end">
                  <div className="text-blue-500">103</div>
                  <div className="text-gray-500 text-sm">102</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

