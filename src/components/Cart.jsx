import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const increaseQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const decreaseQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    } else {
      removeFromCart(id); // Remove item if quantity goes to 0
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <ShoppingCartIcon className="h-6 w-6 text-blue-500" />
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty. Add some items!</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">
                  Rs {item.price} x {item.quantity}
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => decreaseQuantity(item.id, item.quantity)}
                  className="text-red-500 hover:text-red-600"
                >
                  <MinusCircleIcon className="h-6 w-6" />
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id, item.quantity)}
                  className="text-green-500 hover:text-green-600"
                >
                  <PlusCircleIcon className="h-6 w-6" />
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-500"
                >
                  <TrashIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">
            Total:{" "}
            <span className="text-blue-600">
              Rs {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
            </span>
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
