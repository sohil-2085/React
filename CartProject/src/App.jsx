import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Filter from "./components/Filter/Filter";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import products from "./data/Product";

function App() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Default");
  const [cart, setCart] = useState([]);

  console.log("Filtering and Sorting is running...");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = filter === "All" || product.category === filter;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  switch (sort) {
    case "LtoH":
      sortedProducts.sort((a, b) => a.price - b.price);
      break;

    case "HtoL":
      sortedProducts.sort((a, b) => b.price - a.price);
      break;

    case "Rating":
      sortedProducts.sort((a, b) => b.rating - a.rating);
      break;

    case "AtoZ":
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "ZtoA":
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
      break;

    default:
      break;
  }

  return (
    <>
      <h1 className="text-center font-bold text-3xl py-4">
        🛒 Product Dashboard
      </h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <ProductList
        products={filteredProducts && sortedProducts}
        addToCart={addToCart}
      />
      <Cart cart={cart} />
    </>
  );
}

export default App;
