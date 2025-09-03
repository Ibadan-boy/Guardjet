import { CartContext } from '../API/cartContext';
import { useContext } from 'react';

export default function Cart() {
  const { items, updateCartItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );
  const formattedTotalPrice = `₦${totalPrice.toFixed(2)}`;

  return (
    <div
      id="cart"
      className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-2xl"
    >
      {items.length === 0 && (
        <p className="text-center text-gray-500 font-medium">
          No items in cart!
        </p>
      )}

      {items.length > 0 && (
        <ul id="cart-items" className="divide-y divide-gray-200">
          {items.map((item) => {
            const formattedPrice = `₦${Number(item.price).toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex items-center justify-between py-4"
              >
                {/* Item Info */}
                <div className="flex flex-col">
                  <span className="text-gray-800 font-semibold">
                    {item.name}
                  </span>
                  <span className="text-sm text-gray-500">
                    {formattedPrice}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => updateCartItemQuantity(item.id, -1)}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    -
                  </button>
                  <span className="text-gray-700 font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateCartItemQuantity(item.id, 1)}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p
        id="cart-total-price"
        className="mt-6 text-lg font-semibold text-gray-800 text-right"
      >
        Cart Total: <strong className="text-indigo-600">{formattedTotalPrice}</strong>
      </p>

      <p>Clear Cart</p>
    </div>
  );
}
