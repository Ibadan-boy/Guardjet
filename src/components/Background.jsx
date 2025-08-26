import Button from "../ui/Button";
import { SquareArrowOutUpRight } from 'lucide-react';

const link = <SquareArrowOutUpRight/>

function BackgroundSection({ title = "Featured Section", image }) {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <Button
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