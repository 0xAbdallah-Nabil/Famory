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
              Menu
            </span>
          </h1>
          <div className="w-16 md:w-24 h-1 bg-[#e60077] mx-auto mb-3 md:mb-6"></div>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Made to turn simple moments into sweet memories 🤍
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              to={`/our-services/${service.id}`}
              key={service.id}
              className={`group relative ${service.avilability ? "" : "opacity-50 pointer-events-none"} card-container`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div
                className="
                  relative h-full rounded-2xl md:rounded-3xl p-3
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
                <h3 className="text-center md:text-2xl font-bold text-gray-800 mb-1 md:mb-4 leading-tight">
                  {service.title}
                </h3>

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
