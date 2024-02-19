import React from "react";

const Cart = ({ cart, setCart }) => {
  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto py-8">
      {cart.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-r">Product</th>
                <th className="py-2 px-4 border-r">Price</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4 border-r">
                    <div className="flex items-center justify-center">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-12 h-12 object-cover rounded mr-4"
                      />
                      <div>
                        <strong className="text-lg">{item.title}</strong>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)} x {item.quantity}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-r text-center">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-500 text-white py-1 px-4 rounded-lg hover:text-red-700 focus:outline-none"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-200">
              <tr className="font-extrabold" >
                <td colSpan={2} className="text-center md:py-4">Total Amount:</td>
                <td  className="text-center text-2xl text-blue-600">${totalAmount}.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No items in the cart yet
        </div>
      )}
    </div>
  );
};

export default Cart;
