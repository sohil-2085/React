function Filter({ filter, setFilter, sort, setSort }) {
  return (
    <>
      <div className="w-full max-w-xs mx-4 md:mx-8 lg:mx-32">
        <div className="flex justify-between">
          <div>
            <label
              htmlFor="category-select"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Category
            </label>

            <select
              id="category-select"
              name="category"
              required
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
           invalid:border-gray-500 invalid:text-gray-600
           focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Categories</option>

              <option value="Electronics">Electronics</option>
              <option value="Laptops">Laptops</option>
              <option value="Accessories">Accessories</option>
              <option value="Wearables">Wearables</option>
              <option value="Footwear">Footwear</option>
              <option value="Camera">Camera</option>
              <option value="Monitors">Monitors</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="sort-select"
              className="block text-sm font-medium text-slate-700 mb-2"
            >
              Sort By
            </label>

            <select
              id="sort-select"
              name="sort"
              required
              className="w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
           focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
           invalid:border-gray-500 invalid:text-gray-600
           focus:invalid:border-gray-500 focus:invalid:ring-gray-500"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="Default">Default</option>

              <option value="LtoH">Low → High</option>
              <option value="HtoL">High → Low</option>
              <option value="Rating">Rating</option>
              <option value="AtoZ">A → Z</option>
              <option value="ZtoA">Z → A</option>
            </select>
          </div>
        </div>
        <div className="text-xl mt-2">Showing 12 Products</div>
      </div>
    </>
  );
}

export default Filter;
