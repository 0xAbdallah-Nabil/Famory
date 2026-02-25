import { useParams } from "react-router-dom";

import Unavilable from "./Unavilable.jsx";
import ChheeseCake from "./ChheeseCake/ChheeseCake.jsx";
import Cinnabon from "./Cinnabon/Cinnabon.jsx";
import Ramadan from "./Ramadan/Ramadan.jsx";
import MiniCreamyBuffs from "./MiniCreamyBuffs/MiniCreamyBuffs.jsx";
import ChristmasBundles from "./ChristmasBundles/ChristmasBundles.jsx";
import Muffin from "./Muffin/Muffin.jsx";
import OccasionalCards from "./OccasionalCards/OccasionalCards.jsx";
import CustomizedOrders from "./CustomizedOrders/CustomizedOrders.jsx";
import CreamyPuffsForm from "./CreamyBuffs/CreamyBuffs.jsx";
// Add more imports as needed
import useFetch from "../../hooks/useFetch.js";

const componentMap = {
  1: CreamyPuffsForm,
  2: Cinnabon,
  3: Ramadan,
  4: MiniCreamyBuffs,
  5: ChheeseCake,
  6: ChristmasBundles,
  7: Muffin,
  8: OccasionalCards,
  9: CustomizedOrders,
};

function Card() {
  const { id } = useParams();
  const { products } = useFetch("services.json");
  const item = products.find((item) => String(item.id) === String(id));

  if (!item) return null;
  if (item.avilability === false) return <Unavilable key={item.id} />;

  const Component = componentMap[item.id];

  return (
    <div className="bg-[#fff9ed]">
      <section className="  grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10 max-w-[90%] mx-auto min-h-[80vh] items-center">
        <div className=" relative  h-full">
          <img
            src={item.image}
            alt={item.title}
            className="w-full lg:absolute lg:top-0 lg:left-0 object-cover rounded-3xl mb-6 h-96"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-5  rounded-md shadow-md w-full">
          <div className="flex justify-center items-center mb-4 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center smooth-sans">
              {item.title}
            </h1>
          </div>

          <div className="flex gap-3 items-center mb-5 w-full justify-center px-2">
            <p className="text-lg sm:text-xl text-center">{item.description}</p>
          </div>

          {Component ? (
            <Component
              FLAVORS={item.FLAVORS}
              PRODUCTS={item.PRODUCTS}
              ramadanProducts={item.ramadanProducts}
            />
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default Card;
