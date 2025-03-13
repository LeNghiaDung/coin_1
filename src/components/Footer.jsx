const Footer = () => {
  return (
    <footer className="py-4 px-4 mt-8">
      {/* Pagination section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <button className="w-8 h-8 flex items-center justify-center rounded-md bg-[#6366f1] text-white">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-800">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-800">3</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-800">4</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-800">5</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-800">91</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
        <div className="text-sm text-gray-400">Showing 1 to 20 of 1808</div>
      </div>

      {/* Info text and Read More */}
      <div className="mb-6 text-sm">
        <span className="text-gray-400">Find section info here. </span>
        <button className="text-[#6366f1] hover:underline">Read More</button>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-800">
        <div className="text-sm text-gray-400 mb-4 md:mb-0">© 2025 CoinMun</div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">
              Advertise
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Listing
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Support
            </a>
            <div className="relative group">
              <button className="text-gray-400 hover:text-white flex items-center">
                Legal
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4L12 14.01l-3-3" />
                <path d="M22 4L15 20l-3-3" />
                <path d="M2 20l3-3" />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5c0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

