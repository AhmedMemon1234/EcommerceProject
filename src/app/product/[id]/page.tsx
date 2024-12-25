'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const product = {
    id,
    name: `Smart Watch ${id}`,
    price: 100,
    imageUrl: `/watches${id}.jpg`,
    description:
      'This is a detailed description of the product. It is made from high-quality materials, ensuring durability and comfort. Choose the perfect size and quantity to fit your needs. Great for casual wear or special occasions.',
    longDescription:
      'This product comes with a 1-year warranty and free shipping on orders over ₹5000. Ideal for daily use, the fabric is breathable and soft, perfect for all seasons.',
    sizes: ['S', 'M', 'L', 'XL'],
    stock: 50,
    reviews: [
      { rating: 5, text: 'Amazing quality! Highly recommend.' },
      { rating: 4, text: 'Very good, but I wish there were more size options.' },
      { rating: 3, text: 'Decent, but not as expected.' },
    ],
  };

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<string>('');
  const [progress, setProgress] = useState<number>(100);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const router = useRouter();

  const handleAddToCart = (item: any) => {
    if (!item.size && !selectedSize) {
      setError('Please select a size!');
      return;
    }
    if (quantity > item.stock) {
      setError('Not enough stock available.');
      return;
    }
    setError('');

    const cartItem = {
      productId: item.id,
      quantity,
      size: item.size || selectedSize,
      name: item.name,
      price: item.price,
    };

    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...currentCart, cartItem]));

    setMessage('Successfully added to cart!');
    setProgress(100);
    setLoading(true);

    setTimeout(() => {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev <= 0) {
            clearInterval(progressInterval);
            setMessage('');
            setLoading(false);
            router.push('/cart');
            return 0;
          }
          return prev - 5;
        });
      }, 50);
    }, 300);
  };

  const handleRelatedProductClick = (relatedProduct: any) => {
    setLoading(true); 
    setMessage('Successfully added to cart!'); 
    
    setTimeout(() => {
      handleAddToCart(relatedProduct); 
    }, 500); 
  };

  return (
    <div className="p-8 flex flex-col items-center max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-900">{product.name}</h1>

      <img
        src={product.imageUrl}
        alt={product.name}
        width={300}
        height={150}
        className="rounded-lg shadow-xl mb-6"
      />

      <p className="text-2xl font-semibold text-gray-700 mb-4">${product.price}</p>
      <p className="text-lg text-gray-600 mb-6 leading-relaxed">{product.description}</p>

      <div className="w-1/2 mb-6">
        <label htmlFor="size" className="text-lg font-semibold text-gray-800">
          Select Size:
        </label>
        <select
          id="size"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Choose Size</option>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <div className="w-1/2 mb-6">
        <label htmlFor="quantity" className="text-lg font-semibold text-gray-800">
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="mt-2 p-3 border-2 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500"
          min="1"
          max={product.stock}
        />
      </div>

      <button
        onClick={() => handleAddToCart(product)}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
      >
        Add to Cart
      </button>

      {message && (
        <div className="fixed top-16 right-4 bg-green-600 text-white p-4 rounded-lg shadow-md max-w-xs w-full z-50">
          <p>{message}</p>
          <div
            className="w-full h-1 bg-green-400 mt-2"
            style={{ width: `${progress}%`, transition: 'width 0.5s ease-out' }}
          />
        </div>
      )}

      {loading && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}

      <div className="mt-8 w-full max-w-2xl">
        <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <div className="flex items-center">
              <span className="text-yellow-500">{"★".repeat(review.rating)}</span>
              <p className="text-sm text-gray-600 ml-2">{review.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full max-w-3xl">
        <h3 className="text-xl font-semibold mb-4">Related Products</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => {
            const relatedProduct = {
              id: index + 1,
              name: `Smart Watch ${index + 1}`, 
              price: 100 + index * 20,
              imageUrl: `/watches${index + 1}.jpg`,
              stock: 10,
              size: 'M',
            };
            return (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <img
                  src={relatedProduct.imageUrl}
                  alt={relatedProduct.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="text-lg font-semibold text-gray-700">{relatedProduct.name}</p>
                <p className="text-sm text-gray-600">${relatedProduct.price}</p>
                <button
                  onClick={() => handleRelatedProductClick(relatedProduct)}
                  className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
