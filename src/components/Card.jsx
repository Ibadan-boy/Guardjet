function Card({ title = "Common Use Cases", subtitle = "", ctaText = "View Solutions", invert = false, imageSrc = "/assets/images/placeholder.jpg" }) {
  return (
    <section className="py-12 bg-gray-100 text-[#0A192F]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className={`md:w-1/2 ${invert ? 'md:order-2' : 'md:order-1'} mb-6 md:mb-0`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <div className=" md:text-base mb-4 mr-4 text-xl">{subtitle}</div>
          <button className="px-6 py-2 bg-slate-600 hover:bg-slate-700 cursor-pointer text-white rounded-full">
            {ctaText}
          </button>
        </div>
        <div className={`md:w-1/2 ${invert ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
          <img
            src={imageSrc}
            alt="Use Case Illustration"
            className="max-w-xs md:max-w-sm h-auto object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}

export default Card;