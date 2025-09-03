import { useState, useEffect, useContext, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem";
import { CartContext } from "../API/cartContext";

export default function Shop({ cart }) {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [productCount, setProductCount] = useState(8);
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);

        // Run both fetches at the same time
        const [fakeStore, dummyData] = await Promise.all([
          fetch("https://fakestoreapi.com/products"),
          fetch("https://dummyjson.com/products?limit=20"),
        ]);

        // Convert responses to JSON
        const response = await fakeStore.json();
        const dummyjson = await dummyData.json();

        // Log to inspect product data
        console.log("FakeStore Products:", response);
        console.log("DummyJSON Products:", dummyjson.products);

        // Merge both product arrays but fix IDs
        const combinedProducts = [
          ...response.map((p) => ({ ...p, id: `fs-${p.id}`, image: p.image })),
          ...dummyjson.products.map((p) => ({ ...p, id: `dj-${p.id}`, image: p.images[0] })),
        ];

        setProducts(combinedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]); // Set empty array on error to avoid breaking
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // Filter products based on search input
  const filteredProducts = useMemo(() => {
    if (!search.trim()) return products; // Return all products if search is empty
    return products.filter((product) => {
      // Safely access title or name, default to empty string
      const productName = (product.title || product.name || '').toLowerCase();
      return productName.includes(search.toLowerCase().trim());
    });
  }, [products, search]);

  function handleAddToCart(product) {
    console.log(`Added ${product.name || product.title} to cart.`);
    addItemToCart(product);
  }

  const handleLoadMore = () => {
    setProductCount(productCount + 8);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Header cart={cart} />

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">Our Shop</h1>
          <p className="text-lg text-gray-600 mt-2 text-center md:text-left">
            Browse our collection of premium products
          </p>

          {/* Search Bar */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-1/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700"
              aria-label="Search products"
            />
            <select className="w-full sm:w-1/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-700">
              <option value="">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
        </header>

        {isLoading ? (
          <p className="text-center text-gray-500 mt-8">Loading products...</p>
        ) : (
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.slice(0, productCount).map((product) => (
                <ProductItem
                  onClick={() => handleAddToCart(product)}
                  key={product.id}
                  {...product}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                {search.trim() ? 'No products match your search.' : 'No products found.'}
              </p>
            )}
          </ul>
        )}

        {productCount < filteredProducts.length && (
          <button
            onClick={handleLoadMore}
            className="mt-8 cursor-pointer px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full mx-auto block"
          >
            Load More
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}