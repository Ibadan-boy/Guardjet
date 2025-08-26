import Anker from '../assets/Logo/Logo.svg';
import Oraimo from '../assets/Logo/Oraimo.svg';
import Hp from '../assets/Logo/hp-logo.svg';
import Sony from '../assets/Logo/sony-logo.svg';
import Bose from '../assets/Logo/bose-logo.svg';
import Logitech from '../assets/Logo/logitech-logo.svg';
import JBL from '../assets/Logo/jbl-logo.svg';
import Apple from '../assets/Logo/apple-logo.svg';

function Companies() {

  const logos = [
    { src: Anker, alt: 'Company 1' },
    { src: Oraimo, alt: 'Company 2' },
    { src: Hp, alt: 'Company 3' },
    { src: Sony, alt: 'Company 4' },
    { src: Bose, alt: 'Company 5' },
    { src: Logitech, alt: 'Company 6' },
    { src: JBL, alt: 'Company 6' },
    { src: Apple, alt: 'Company 6' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl md:text-3xl font-bold text-center mb-5 text-[#0A192F]">
          Originality From Trusted Brands
        </h2>
        <div className="space-y-4 mb-4 max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-gray-600">
            Explore our collections for authentic tech innovation from the best in the industry.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white p-4 rounded-lg"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Companies;