import { useParams } from "react-router-dom";
import ChheeseCake from "./ChheeseCake/ChheeseCake.jsx";
import CreamyPuffsForm from "./CreamyBuffs/CreamyBuffs.jsx";
import ChristmasBundles from "./ChristmasBundles/ChristmasBundles.jsx";
import Cinnabon from "./Cinnabon/Cinnabon.jsx";
import CustomizedOrders from "./CustomizedOrders/CustomizedOrders.jsx";
import MiniCreamyBuffs from "./MiniCreamyBuffs/MiniCreamyBuffs.jsx";
import Muffin from "./Muffin/Muffin.jsx";
import OccasionalCards from "./OccasionalCards/OccasionalCards.jsx";
import Ramadan from "./Ramadan/Ramadan.jsx";
import Unavilable from "./Unavilable.jsx";
const services = [
  {
    id: 1,
    title: "Creamy Puffs",
    FLAVORS: [
      { id: 1, name: "Kinder", price: 65 },
      { id: 2, name: "Mixed Berries", price: 65 },
      { id: 3, name: "Crème Brûlée", price: 60 },
      { id: 4, name: "Pistachio", price: 60 },
      { id: 5, name: "Crunchy Lotus", price: 55 },
      { id: 6, name: "Cookies & Cream", price: 55 },
      { id: 7, name: "Caramel", price: 45 },
      { id: 8, name: "Chocolate", price: 45 },
    ],
    type: "peace",
    description:
      "Delicate pastries filled with rich, velvety cream in a variety of exquisite flavors",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372784/creamy_buffs_pdq45t.jpg",
    to: "/our-products",
    component: CreamyPuffsForm,
    avilability: true,
  },
  {
    id: 2,
    title: "Cinnabon",
    price: 20,
    type: "peace",
    description:
      "World-famous cinnamon rolls with signature cream cheese frosting that melts in your mouth",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372234/cinnabon_ezwuvx.png",
    component: Cinnabon,
    avilability: true,
  },
  {
    id: 3,
    title: "Ramadan Items",
    price: 20,
    type: "peace",
    description:
      "Traditional and contemporary treats specially crafted for the holy month",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372227/ramadan_m3ulfg.png",
    component: Ramadan,
    avilability: true,
  },
  {
    id: 4,
    title: "Mini Creamy Puffs",
    price: 20,
    type: "peace",
    description:
      "Mini Creamy Puff – 18 pcs Mini puffs filled with custard and assorted flavors",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771373126/mini_creamy_buffs_jpdlg1.png",
    component: MiniCreamyBuffs,
    avilability: true,
  },
  {
    id: 5,
    title: "Cheesecake",
    price: 20,
    type: "peace",
    description:
      "Rich and creamy cheesecakes crafted with the finest ingredients in a variety of flavors",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372573/cheesecake_v4wl0o.jpg",
    component: ChheeseCake,
    avilability: true,
  },
  {
    id: 6,
    title: "Christmas Bundles",
    price: 20,
    type: "peace",
    description:
      "Festive holiday bundles filled with seasonal treats to spread joy and sweetness",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771372581/christmas_creamy_buffs_zkleqa.jpg",
    component: ChristmasBundles,
    avilability: true,
  },
  {
    id: 7,
    title: "Muffin",
    price: 20,
    type: "peace",
    description:
      "Soft, fluffy muffins baked to perfection in a variety of delightful flavors",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771373600/muffin2_tcffgu.jpg",
    component: Muffin,
    avilability: true,
  },
  {
    id: 8,
    title: "Occasional Cards",
    price: null,
    type: "not",
    description:
      "Beautifully crafted cards to accompany your sweet gifts for any special occasion",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771374442/gift_card_2_ywdgf1.jpg",
    component: OccasionalCards,
    avilability: true,
  },
  {
    id: 9,
    title: "Customized Orders & Events",
    price: null,
    type: "not",
    description:
      "Personalized treats tailored to your preferences, perfect for gifting or any special occasion",
    image:
      "https://res.cloudinary.com/dk1q6kpkk/image/upload/v1771374935/events_and_orders_dvlkpz.jpg",
    component: CustomizedOrders,
    avilability: false,
  },
];
function Card() {
  const { id } = useParams();

  return (
    <>
      {services.map((item) =>
        item.id == id && item.avilability == true ? (
          <div className="bg-[#fff9ed]">
            <section
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10  max-w-[90%] mx-auto min-h-[80vh] items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-96 object-cover rounded-3xl mb-6"
                loading="lazy"
              />
              <div className="flex flex-col justify-center items-center gap-5 p-6 rounded-md shadow-md w-full">
                <div className="flex justify-center items-center mb-4 w-full">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center smooth-sans">
                    {item.title}
                  </h1>
                </div>

                <div className="flex gap-3 items-center mb-5 w-full justify-center px-2">
                  <p className="text-lg sm:text-xl text-center">
                    {item.description}
                  </p>
                </div>

                <item.component FLAVORS={item.FLAVORS} />
              </div>
            </section>
          </div>
        ) : item.id == id && item.avilability == false ? (
          <Unavilable />
        ) : null,
      )}
    </>
  );
}

export default Card;
