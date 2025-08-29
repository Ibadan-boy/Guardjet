import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="relative overflow-hidden text-white py-10">
      <motion.div
        className="absolute inset-0"
        initial={{ background: 'linear-gradient(45deg, #0A192F 0%, #1E40AF 100%)' }}
        animate={{
          background: [
            'linear-gradient(45deg, #0A101F 0%, #1A243F 100%)', 
            'linear-gradient(45deg, #1A243F 0%, #1E2A5E 100%)', 
            'linear-gradient(45deg, #1E2A5E 0%, #0A101F 100%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ zIndex: 0 }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-bold mb-4">GuardJet</h3>
            <p className="text-sm mb-4">
              Your one-stop shop for the latest gadgets and tech innovations.
            </p>
            <p className="text-sm">Email: support@gadgetstore.com</p>
            <p className="text-sm">Phone: 123-1234-1323</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="login" className="text-sm hover:text-gray-300">Sign In</Link></li>
              <li><Link to="shop" className="text-sm hover:text-gray-300">Products</Link></li>
              <li><a href="#about" className="text-sm hover:text-gray-300">About Us</a></li>
              <li><a href="#contact" className="text-sm hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li><a href="https://facebook.com" className="text-sm hover:text-gray-300">Facebook</a></li>
              <li><a href="https://twitter.com" className="text-sm hover:text-gray-300">Twitter</a></li>
              <li><a href="https://instagram.com" className="text-sm hover:text-gray-300">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} GuardJet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;