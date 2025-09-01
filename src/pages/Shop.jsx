import { dummyProducts } from '../util/data';
import ProductItem from '../components/ProductItem';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useContext, useEffect } from 'react';
import { CartContext } from '../API/cartContext';

export default function Shop({ cart }) {

  const [search, setSearch] = useState('');
  const [ products, setProducts ] = useState([]);

  const { addItemToCart } = useContext(CartContext);

  // const filteredProducts = dummyProducts.filter(product =>
  //   product.name.toLowerCase().includes(search.toLowerCase())
  // );

  useEffect(() => {
    async function fetchProducts(){
      try{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error){
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  })

  function handleAddToCart(product) {
    console.log(`Added ${product.name} to cart.`);
    addItemToCart(product);
  }
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Header cart={cart}/>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">Our Shop</h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">Browse our collection of premium products</p>
          {/* Optional Filter/Search Bar */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
            />
            <select className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700">
              <option value="">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </header>

        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.length > 0 ? (products.map((product) => (
            <ProductItem
              onClick={() => handleAddToCart(product)}
              key={product.id}
              {...product}
            />
          ))) : (
            <p className="text-center text-gray-500 col-span-full">No products found.</p>
          )}
        </ul>
        <button className="mt-8 px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full mx-auto block">
          Load More
        </button>
      </div>
      <Footer/>
    </>
  );
}