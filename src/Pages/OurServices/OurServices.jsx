import { Link } from "react-router-dom";
import "./style.css";
import useFetch from "../../hooks/useFetch.js";

export default function OurServices() {
  const { products } = useFetch("services.json");
  const services = products.filter((product) => product.avilability === true);
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header Section */}
      <div className="container mx-auto px-3 py-8 md:px-4 md:py-16">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2 md:mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-[#e60077]">
              Services
            </span>
          </h1>
          <div className="w-16 md:w-24 h-1 bg-[#e60077] mx-auto mb-3 md:mb-6"></div>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Discover our handcrafted selections, baked fresh with love and the
            finest ingredients
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              to={`/our-services/${service.id}`}
              key={service.id}
              className={`group relative ${service.avilability ? "" : "opacity-50 pointer-events-none"}`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div
                className="
                  relative h-full rounded-2xl md:rounded-3xl p-3 md:p-8
                  bg-white
                  shadow-md hover:shadow-2xl
                  transition-all duration-500 ease-out
                  transform hover:-translate-y-2
                  border-2 border-white/50
                "
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-28 md:h-48 object-cover rounded-xl md:rounded-3xl mb-3 md:mb-6"
                  loading="lazy"
                />

                {/* Title */}
                <h3 className="text-base md:text-3xl font-bold text-gray-800 mb-1 md:mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description
                <p className="text-xs md:text-base text-gray-700 mb-3 md:mb-6 leading-relaxed line-clamp-3 md:line-clamp-none">
                  {service.description}
                </p> */}

                {/* Button */}
                <button
                  className={`
                    w-full py-2 md:py-3 px-3 md:px-6 rounded-lg md:rounded-xl
                    text-xs md:text-base font-semibold
                    ${service.avilability ? "bg-[#e60077] hover:bg-[#c80060] shadow-lg text-white" : "bg-[#e8ddd0] text-black cursor-not-allowed"}
                    transform transition-all duration-300
                    hover:scale-105 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-[#e60077] focus:ring-offset-2
                  `}
                  disabled={!service.avilability}
                >
                  Explore Menu
                </button>

                {/* Decorative corner element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full blur-2xl"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
