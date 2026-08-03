function Cart({ cart }) {
  return (
    <div className="mx-auto mt-8 flex w-full max-w-md justify-center p-4 md:p-8 lg:p-8">
      <div className="w-full rounded-2xl border border-slate-300 bg-white p-6 shadow-sm">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Your Cart</p>
            <h2 className="text-xl font-semibold text-slate-800">
              Order Summary
            </h2>
          </div>

          <div className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600">
            {cart.reduce((total, item) => total + (item.quantity || 1), 0)}{" "}
            Items
          </div>
        </div>

        {/* Cart Items */}
        <div className="space-y-3 border-t border-slate-100 py-4">
          {cart.length === 0 ? (
            <p className="text-center text-slate-500">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-lg bg-slate-50 p-3"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-slate-700">
                    {item.title}
                  </span>
                  <span className="text-sm text-slate-500">
                    Qty: {item.quantity || 1}
                  </span>
                </div>

                <span className="font-semibold text-blue-600">
                  ₹{(Number(item.price) * (item.quantity || 1)).toFixed(2)}
                </span>
              </div>
            ))
          )}
        </div>

        {/* Summary */}
        <div className="space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Items</span>
            <span className="font-medium text-slate-800">
              {cart.reduce((total, item) => total + (item.quantity || 1), 0)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span className="font-medium text-green-600">Free</span>
          </div>

          <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-base font-semibold text-slate-800">
            <span>Total</span>
            <span className="font-medium text-slate-800">
              ₹
              {cart
                .reduce(
                  (acc, curr) =>
                    acc + Number(curr.price || 0) * (curr.quantity || 1),
                  0,
                )
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
