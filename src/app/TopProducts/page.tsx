'use client';

import Link from 'next/link';

const products = [
  { id: 1, name: 'Ultra Watch', price: 100, imageUrl: '/watches1.jpg' },
  { id: 2, name: 'Ultra S9 Watch', price: 150, imageUrl: '/watches2.jpg' },
  { id: 3, name: 'X9 Ultra Watch', price: 200, imageUrl: '/watches3.jpg' },
  { id: 4, name: 'S20 Plus Watch', price: 250, imageUrl: '/watches4.jpg' },
  { id: 5, name: 'Ultra 7 Strap Watch', price: 100, imageUrl: '/watches5.jpg' },
  { id: 6, name: 'Ultra S12 Watch', price: 150, imageUrl: '/watches6.jpg' },
  { id: 7, name: 'X100 Ultra Watch', price: 200, imageUrl: '/watches7.jpg' },
  { id: 8, name: 'S20 Ultra Watch', price: 250, imageUrl: '/watches8.jpg' },
];

const TopProducts = () => {
  return (
    <div className="my-24">
      <h2 className="text-3xl font-semibold text-center mb-6">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-72 object-cover mb-4"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              <p className="text-lg font-medium text-blue-600 mb-4">${product.price}</p>
              <Link href={`/product/${product.id}`}>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-lg shadow-md hover:bg-blue-500 transition-all duration-300">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
