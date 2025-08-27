function HeroBanner({ title, subtitle, onClick }) {
  return (
    <section
      className="relative py-24 bg-[#0A192F] text-white overflow-hidden animate-fade-in"
      style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-wide">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-6">
          {subtitle}
        </p>
        <button
        onClick={onClick}
        className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Login To Cop A Gadget
        </button>
      </div>
    </section>
  );
}

export default HeroBanner;