import Button from "../ui/Button";
import { SquareArrowOutUpRight } from 'lucide-react';

const link = <SquareArrowOutUpRight/>

function BackgroundSection({ title = "Featured Section", image, onClick }) {
  return (
    <section
      className="relative py-20 text-[#0A192F] flex items-center justify-center"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-80"></div>

      <div className="relative container mx-auto px-4 text-center z-10 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
          We boast of original and high quality gadgets' accessories, ranging from smartwatches, headphones, chargers, and many more. We have a wide range of products to choose from, all at competitive prices.
        </p>
        <Button
          onClick = {onClick}
          variant="primary"
          className="text-lg flex gap-2 px-6 py-3 bg-slate-800 text-white rounded-full hover:bg-slate-700 cursor-pointer"
        >
          Shop Now {link}
        </Button>
      </div>
    </section>
  );
}

export default BackgroundSection;