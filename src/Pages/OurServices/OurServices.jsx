import { Link } from "react-router-dom";
import "./style.css";
export default function OurServices() {
  const services = [
    {
      id: 1,
      title: "Creamy Puffs",
      description:
        "Delicate pastries filled with rich, velvety cream in a variety of exquisite flavors",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372784/creamy_buffs_pdq45t.jpg",
      to: "/our-products",
    },
    {
      id: 2,
      title: "Cinnabon",
      description:
        "World-famous cinnamon rolls with signature cream cheese frosting that melts in your mouth",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372234/cinnabon_ezwuvx.png",
    },
    {
      id: 3,
      title: "Ramadan Items",
      description:
        "Traditional and contemporary treats specially crafted for the holy month",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372227/ramadan_m3ulfg.png",
    },
    {
      id: 4,
      title: "Mini Creamy Puffs",
      description:
        "Mini Creamy Puff – 18 pcs Mini puffs filled with custard and assorted flavors",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771373126/mini_creamy_buffs_jpdlg1.png",
    },
    {
      id: 5,
      title: "Cheesecake",
      description:
        "Irresistible cheesecake with a buttery crust and creamy filling, baked to perfection",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372573/cheesecake_v4wl0o.jpg",
    },
    {
      id: 6,
      title: "Christmas Bundles",
      description:
        "Festive holiday bundles filled with seasonal treats to spread joy and sweetness",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372581/christmas_creamy_buffs_zkleqa.jpg",
    },
        {
      id: 7,
      title: "Muffin",
      description:
        "Soft, fluffy muffins baked to perfection in a variety of delightful flavors",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771373600/muffin2_tcffgu.jpg",
    },
    {
      id: 8,
      title: "Occasional Cards",
      description:
        "Beautifully crafted cards to accompany your sweet gifts for any special occasion",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771374442/gift_card_2_ywdgf1.jpg",
    },
    {
      id: 9,
      title: "Customized Events & Orders",
      description:
        "Personalized treats tailored to your preferences, perfect for gifting or any special occasion",
      image:
        "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771374935/events_and_orders_dvlkpz.jpg",
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
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-3xl mb-6"
                  loading="lazy"
                />
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
