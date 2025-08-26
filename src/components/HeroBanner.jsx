function HeroBanner({ title, subtitle }) {
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
      </div>
    </section>
  );
}

export default HeroBanner;