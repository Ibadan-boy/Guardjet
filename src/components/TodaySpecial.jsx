import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeadsetImg from '../assets/Images/headset-image.jpg';

const products = [
  { id: 1, name: 'Premium Coffee Maker', description: 'Brews perfect coffee every time.', price: 99.99, imageSrc: HeadsetImg },
  { id: 2, name: 'Wireless Headphones', description: 'Crystal-clear sound with noise cancellation.', price: 149.99, imageSrc: HeadsetImg },
  { id: 3, name: 'Smart Watch', description: 'Track your fitness and stay connected.', price: 199.99, imageSrc: HeadsetImg },
];

function TodaysSpecial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // manual navigation
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  // Animation variants for slide effect
  const slideVariants = {
    enter: { opacity: 0, x: 100 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
   <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#0A192F] mb-8">Today's Special</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={products[currentIndex].id}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-6"
            >
              <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                <img
                  src={products[currentIndex].imageSrc}
                  alt={products[currentIndex].name}
                  className="max-w-xs h-auto object-contain rounded-lg"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#0A192F] mb-2">{products[currentIndex].name}</h3>
                <p className="text-gray-600 mb-4">{products[currentIndex].description}</p>
                <p className="text-xl font-bold text-[#0A192F] mb-4">${products[currentIndex].price.toFixed(2)}</p>
                <button className="px-6 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-full">
                  Buy Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white p-2 rounded-full hover:bg-slate-700"
          >
            
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-600 text-white p-2 rounded-full hover:bg-slate-700"
          >
            →
          </button>
          {/* Dots for slide indication */}
          <div className="flex justify-center mt-4">
            {products.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === currentIndex ? 'bg-slate-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodaysSpecial;