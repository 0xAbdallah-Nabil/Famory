import { Link } from "react-router-dom";
import "./style.css";
export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "Creamy Puffs",
      description:
        "Delicate pastries filled with rich, velvety cream in a variety of exquisite flavors",
      image: "🌙",
      to: "/our-products",
    },
    {
      id: 2,
      title: "Cinnabon",
      description:
        "World-famous cinnamon rolls with signature cream cheese frosting that melts in your mouth",
      image: "🌙",
    },
    {
      id: 3,
      title: "Ramadan Items",
      description:
        "Traditional and contemporary treats specially crafted for the holy month",
      image: "🌙",
    },
    {
      id: 4,
      title: "Ramadan Bundles",
      description:
        "Curated bundles of festive treats perfect for sharing during the holy month of Ramadan",
      image: "🌙",
    },
    {
      id: 5,
      title: "Mini Creamy Puffs",
      description:
        "Bite-sized creamy puffs packed with flavor, available in sets of 8 to 15 pieces",
      image: "🍬",
    },
    {
      id: 6,
      title: "Creamy Puffs",
      description:
        "Classic creamy puffs in generous portions, available in sets of 3 to 6 pieces",
      image: "🍮",
    },
    {
      id: 7,
      title: "Cinnabon",
      description:
        "Irresistible cinnamon rolls baked fresh with layers of warm spice and creamy frosting",
      image: "🌀",
    },
    {
      id: 8,
      title: "Christmas Bundles",
      description:
        "Festive holiday bundles filled with seasonal treats to spread joy and sweetness",
      image: "🎄",
    },
    {
      id: 9,
      title: "Occasional Cards",
      description:
        "Beautifully crafted cards to accompany your sweet gifts for any special occasion",
      image: "🎴",
    },
    {
      id: 10,
      title: "Muffin",
      description:
        "Soft, fluffy muffins baked to perfection in a variety of delightful flavors",
      image: "🧁",
    },
    {
      id: 11,
      title: "Customized Orders",
      description:
        "Personalized treats tailored to your preferences, perfect for gifting or any special occasion",
      image: "✨",
    },
    {
      id: 12,
      title: "Events & Corporate Orders",
      description:
        "Bulk and bespoke sweet arrangements for corporate events, celebrations, and gatherings",
      image: "🏢",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-[#e60077]">
              Services
            </span>
          </h1>
          <div className="w-24 h-1 bg-[#e60077] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handcrafted selections, baked fresh with love and the
            finest ingredients
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Link
              to={`/our-services/${service.id}`}
              key={service.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div
                className={`
                relative h-full rounded-3xl p-8 
              bg-white
                shadow-lg hover:shadow-2xl
                transition-all duration-500 ease-out
                transform hover:-translate-y-2
                border-2 border-white/50
              `}
              >
                {/* Title */}
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Button */}
                <button
                  className="
                  w-full py-3 px-6 rounded-xl
                  bg-[#e60077]
                  text-white font-semibold
                  transform transition-all duration-300
                  hover:scale-105
                  hover:shadow-lg
                  focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
                "
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
