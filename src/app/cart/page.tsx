'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);  
  const [message, setMessage] = useState<string>('');
  const [progress, setProgress] = useState<number>(100); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [checkoutLoading, setCheckoutLoading] = useState<boolean>(false); 
  const router = useRouter();

  useEffect(() => {
    setLoading(true); 
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    console.log('Stored Cart Items:', storedCart);  
    setLoading(false); 
  }, []);

  const handleQuantityChange = (itemIndex: number, action: 'increase' | 'decrease') => {
    const updatedCart = [...cartItems];
    const item = updatedCart[itemIndex];

    if (action === 'increase') {
      item.quantity += 1;
    } else if (action === 'decrease' && item.quantity > 1) {
      item.quantity -= 1;
    } else if (action === 'decrease' && item.quantity === 1) {
      updatedCart.splice(itemIndex, 1);
      setMessage(`${item.name} removed from the cart!`);
      setProgress(0); 
    }

    console.log('Updated Cart:', updatedCart); 
    localStorage.setItem('cart', JSON.stringify(updatedCart)); 
    setCartItems(updatedCart); 
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    setCheckoutLoading(true);
    setMessage("Processing checkout...");

    let progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(progressInterval);
          router.push('/checkout');
          return 0;
        }
        return prev - 5;
      });
    }, 100); 

    setTimeout(() => {
      clearInterval(progressInterval);
      router.push('/checkout');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">Shopping Cart</h1>

      {message && !checkoutLoading && (
        <div className="text-green-600 text-center mb-4">
          <p>{message}</p>
          <div className="w-full h-1 bg-green-400" style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }} />
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader"></div>
        </div>
      ) : cartItems.length === 0 ? (
        <div className="text-center text-lg text-gray-600">
          <p>Your cart is empty! Browse products and add to cart.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {cartItems.map((item, index) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row justify-between items-center">
              <img
  src={`/watches12.jpg`}  
  alt={item.name}
  className="w-24 h-24 object-cover rounded-md mb-4 md:mb-0"
/>

              <div className="flex-1 ml-6">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600">Size: {item.size}</p>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleQuantityChange(index, 'decrease')}
                  className="text-2xl p-2 rounded-full"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(index, 'increase')}
                  className="text-2xl p-2"
                >
                  +
                </button>
              </div>

              <div className="text-xl font-semibold text-gray-900">${item.price * item.quantity}</div>
            </div>
          ))}

          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <div className="flex justify-between mb-4">
              <p className="text-lg font-semibold text-gray-700">Subtotal:</p>
              <p className="text-lg font-semibold text-gray-900">
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              </p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg font-semibold text-gray-700">Shipping:</p>
              <p className="text-lg font-semibold text-gray-900">$50</p> 
            </div>
            <div className="flex justify-between mb-6">
              <p className="text-lg font-semibold text-gray-700">Total:</p>
              <p className="text-2xl font-bold text-gray-900">
                ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0) + 50}
              </p>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
            >
              {checkoutLoading ? 'Processing...' : 'Proceed to Checkout'}
            </button>

            {checkoutLoading && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
                <div className="loader"></div>
                <p className="text-white ml-4">Processing...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
