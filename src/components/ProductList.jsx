import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { PlusCircleIcon, MinusCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Products = [
    { id: 1, name: 'Coffee', price: 20 },
    { id: 2, name: 'Tea', price: 10 },
    { id: 3, name: 'Biscuit', price: 5 },
];

const ProductList = () => {
    const { cart, addToCart, updateQuantity, removeFromCart } = useContext(CartContext);

    const increaseQuantity = (product) => {
        const currentItem = cart.find((item) => item.id === product.id);
        if (currentItem) {
            updateQuantity(product.id, currentItem.quantity + 1);
        }
    };

    const decreaseQuantity = (product) => {
        const currentItem = cart.find((item) => item.id === product.id);
        if (currentItem) {
            if (currentItem.quantity > 1) {
                updateQuantity(product.id, currentItem.quantity - 1);
            } else {
                removeFromCart(product.id);
            }
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Explore Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Products.map((product) => {
                    const currentItem = cart.find((item) => item.id === product.id);
                    return (
                        <div
                            key={product.id}
                            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center"
                        >
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <p className="text-gray-600 mb-4">Price: ₹{product.price}</p>
                            {currentItem ? (
                                <div className="flex items-center justify-center">
                                    <button
                                        onClick={() => decreaseQuantity(product)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <MinusCircleIcon className="w-6 h-6" />
                                    </button>
                                    <span className="mx-4 text-lg font-medium text-gray-700">
                                        {currentItem.quantity}
                                    </span>
                                    <button
                                        onClick={() => increaseQuantity(product)}
                                        className="text-green-500 hover:text-green-700"
                                    >
                                        <PlusCircleIcon className="w-6 h-6" />
                                    </button>
                                </div>
                            ) : (
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600"
                                >
                                    <ShoppingCartIcon className="w-5 h-5 mr-2" />
                                    Add to Cart
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList;
