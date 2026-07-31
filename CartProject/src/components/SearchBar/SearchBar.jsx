function SearchBar({ search, setSearch }) {
  return (
    <>
      <div className="flex gap-2 text-center pt-8 pb-8 pl-32 pr-32">
        <input
          type="text"
          placeholder="Enter Product Name ...."
          className="border w-full p-2 rounded-xl border-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* <button
          className="border rounded-xl p-4 cursor-pointer hover:bg-gray-200 transition-all border-gray-400"
          type="submit"
        >
          Search
        </button> */}
      </div>
    </>
  );
}

export default SearchBar;
