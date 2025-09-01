export default function ProductItem({ 
  image, 
  name , 
  price,
  onClick
}) {
  return (
    <li className="list-none w-full 
                   xs:max-w-[280px] 
                   sm:max-w-[320px] 
                   md:max-w-[300px] 
                   lg:max-w-[280px] 
                   xl:max-w-[300px]
                   m-2 xs:m-3 sm:m-4 
                   bg-white rounded-xl shadow-md overflow-hidden 
                   transition-all duration-300 ease-in-out 
                   hover:-translate-y-1 hover:shadow-lg
                   flex-shrink-0">
      <article className="flex flex-col h-full">
        {/* Responsive Image Container */}
        <div className="relative w-full 
                        h-[180px] xs:h-[200px] 
                        sm:h-[220px] md:h-[200px] 
                        overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover 
                       border-b border-gray-100
                       transition-transform duration-300
                       hover:scale-105"
            loading="lazy"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-3 xs:p-4 sm:p-6 
                        flex flex-col gap-1 xs:gap-2 
                        flex-grow">
          <h2 className="m-0 
                         text-sm xs:text-base sm:text-lg 
                         font-semibold text-gray-800 
                         leading-tight line-clamp-2
                         min-h-[2.5rem] xs:min-h-[3rem]">
            {name}
          </h2>
          <p className="m-0 
                        text-lg xs:text-xl sm:text-2xl 
                        font-bold text-blue-600
                        mt-auto">
            ₦{price}
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col xs:flex-col sm:flex-row 
                        gap-2 xs:gap-2 sm:gap-3 
                        p-3 xs:p-4 sm:p-6 pt-0 xs:pt-0 sm:pt-0">
          <button className="flex-1 
                             bg-slate-600 hover:bg-slate-700 
                             active:bg-slate-800
                             text-white 
                             text-sm xs:text-base
                             py-2.5 xs:py-3 sm:py-2.5 
                             px-4 xs:px-6
                             rounded-full 
                             transition-all duration-300 ease-in-out
                             hover:shadow-md
                             focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2
                             font-medium">
            Buy Now
          </button>
          <button
          onClick={onClick} 
          className="flex-1 
                             bg-slate-600 hover:bg-slate-700 
                             active:bg-slate-800
                             text-white 
                             text-sm xs:text-base
                             py-2.5 xs:py-3 sm:py-2.5 
                             px-4 xs:px-6
                             rounded-full 
                             transition-all duration-300 ease-in-out
                             hover:shadow-md
                             focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2
                             font-medium">
            Add to Cart
          </button>
        </div>
      </article>
    </li>
  );
}