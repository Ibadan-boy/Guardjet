import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Card({ title, subtitle, ctaText = "View Shop", invert = false, imageSrc }) {

  const navigate = useNavigate();

  function handleClick(){
    if (/shop/i.test(ctaText) || /products/i.test(ctaText)) {
      navigate("/shop");
    } else {
    navigate("/login");
      }
  }
  // Animation variants for text content
  const textVariants = {
    hidden: { opacity: 0, x: invert ? 50 : -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, x: invert ? -50 : 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2 // Slight delay for staggered effect
      }
    }
  };

  return (
    <section className="py-12 bg-gray-100 text-[#0A192F]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          className={`md:w-1/2 ${invert ? 'md:order-2' : 'md:order-1'} mb-6 md:mb-0`}
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <div className="md:text-base mb-4 mr-4 text-xl">{subtitle}</div>
          <button className="px-6 py-2 bg-slate-600 hover:bg-slate-700 cursor-pointer text-white rounded-full"
          onClick={handleClick}>
            {ctaText}
          </button>
        </motion.div>
        <motion.div 
          className={`md:w-1/2 ${invert ? 'md:order-1' : 'md:order-2'} flex justify-center`}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={imageSrc}
            alt="Use Case Illustration"
            className="max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Card;