function Search({ isSearchOpen, setIsSearchOpen }) {
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed h-screen inset-0 bg-black opacity-70 z-50 ${
          isSearchOpen ? "block" : "hidden"
        }`}
        onClick={() => {
          setIsSearchOpen(false);
        }}
      ></div>
      <div
        className={` w-[800px] absolute top-16 right-1/2 transform translate-x-1/2 bg-white border border-gray-300 rounded-md shadow-md p-4 ${
          isSearchOpen ? "block" : "hidden"
        } z-60`}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
}

export default Search;
