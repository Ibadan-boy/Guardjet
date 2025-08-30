const Cart = ({ cart }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 mt-6">
      <h2 className="text-xl font-bold text-gray-800 border-b pb-3 mb-4">
        Your Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center py-3"
            >
              <span className="font-medium text-gray-700">{item.name}</span>
              <span className="text-gray-600">${item.price}</span>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="flex justify-between items-center border-t pt-4 mt-4">
          <span className="font-semibold text-gray-800">Total:</span>
          <span className="font-bold text-indigo-600">
            $
            {cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Cart;
