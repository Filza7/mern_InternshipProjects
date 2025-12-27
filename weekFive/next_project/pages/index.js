

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-gray-800 p-4 md:p-6">
        <div className="text-white text-2xl font-bold">My Website</div>
        <ul className="flex gap-4 flex-wrap justify-center text-white text-sm md:text-base">
          <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          <li><a href="#" className="hover:text-yellow-400">Our Story</a></li>
          <li><a href="#" className="hover:text-yellow-400">History</a></li>
          <li><a href="#" className="hover:text-yellow-400">Cart</a></li>
        </ul>
      </nav>

      {/* Center Container */}
      <div className="min-h-[calc(100vh-70px)] flex flex-col justify-start items-center text-center pt-36 px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">Insightful</h1>
        <input
          type="text"
          placeholder="Enter your text here"
          className="p-3 w-full max-w-sm border border-gray-300 rounded-md text-center text-base"
        />
      </div>

      {/* Big Links */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 pb-24 px-4">
        <a href="#" className="text-lg text-gray-800 border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all text-center w-[120px] sm:w-[150px] md:w-[200px]">Link One</a>
        <a href="#" className="text-lg text-gray-800 border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all text-center w-[120px] sm:w-[150px] md:w-[200px]">Link Two</a>
        <a href="#" className="text-lg text-gray-800 border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all text-center w-[120px] sm:w-[150px] md:w-[200px]">Link Three</a>
        <a href="#" className="text-lg text-gray-800 border border-gray-800 px-6 py-2 rounded-lg hover:bg-gray-800 hover:text-white transition-all text-center w-[120px] sm:w-[150px] md:w-[200px]">Link Four</a>
      </div>

      {/* Fixed Button */}
      <a
        href="#"
        className="fixed bottom-5 right-5 text-white bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-all text-sm sm:text-base"
      >
        CUSTOMIZE
      </a>
    </>
  );
}
