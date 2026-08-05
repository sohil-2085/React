import {
  MdOutlineCategory,
  MdAttachMoney,
  MdOutlineStar,
} from "react-icons/md";
import React from "react";

function ProductCard({ product, addToCart }) {
  const { title, category, price, rating, image } = product;
  console.log("ProductCard Render:", product.title);

  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-800 shadow-xl shadow-slate-900/20 transition hover:-translate-y-0.5 hover:shadow-2xl">
      <div className="overflow-hidden bg-slate-700">
        <img
          src={image}
          alt={title}
          className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <div className="mt-4 space-y-3 text-sm text-slate-200">
          <div className="flex items-center gap-2">
            <MdOutlineCategory size={20} className="text-cyan-300" />
            <span className="truncate">Category: {category}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdAttachMoney size={20} className="text-emerald-300" />
            <span>Price: ₹{price}</span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineStar size={20} className="text-amber-300" />
            <span>Rating: {rating}</span>
          </div>
        </div>
        <button
          className="mt-6 w-full rounded-2xl border cursor-pointer border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-500/15 hover:text-cyan-100"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
