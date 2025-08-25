import Button from "../ui/Button";

function Hero() {
  return (
    <section className="relative bg-[#0A192F] text-white py-24">
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#0A192F] to-gray-100 pointer-events-none"></div>

      <div className="relative container mx-auto text-center px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Be At Ease With Your Gadget Needs
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-300">
          Explore our cutting-edge technology and elevate your lifestyle with the best gadgets on the market.
        </p>
        <Button
          variant="primary"
          className="text-lg px-6 py-3 bg-[#2563EB] rounded-md hover:bg-[#1E40AF] cursor-pointer"
        >
          Shop Now
        </Button>
      </div>
    </section>
  );
}

export default Hero;
