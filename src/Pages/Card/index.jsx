import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoadingPage from "./IsLoading.jsx";
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

export default function Card() {
  const { id } = useParams();
  const { products, isLoading } = useFetch("services.json");

  if (isLoading) return <LoadingPage />;

  const item = products.find((p) => String(p.id) === String(id));
  if (!item) return null;
  if (item.avilability === false) return <Unavilable key={item.id} />;

  const Component = componentMap[item.id];

  return (
    <div className="min-h-[80vh] bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <Link
          to="/our-services"
          className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-bold text-cocoa/70 transition hover:bg-primary-soft hover:text-primary"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          All services
        </Link>

        <div className="mt-4 grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:items-start lg:gap-10">
          {/* Image */}
          <aside className="lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] shadow-card ring-1 ring-primary/10">
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105 lg:aspect-[4/5]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-cocoa/50 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary backdrop-blur">
                Famory Bakery
              </span>
            </div>
          </aside>

          {/* Order panel */}
          <section className="rounded-[2rem] bg-white p-5 shadow-card ring-1 ring-primary/5 sm:p-8">
            <h1 className="text-center text-3xl leading-tight text-cocoa sm:text-4xl">
              {item.title}
            </h1>
            {item.description && (
              <p className="mx-auto mt-3 max-w-md text-center text-cocoa/70">
                {item.description}
              </p>
            )}
            <div className="mx-auto my-6 h-1 w-16 rounded-full bg-primary" />

            {Component && (
              <Component
                FLAVORS={item.FLAVORS}
                PRODUCTS={item.PRODUCTS}
                ramadanProducts={item.ramadanProducts}
                muffinProducts={item.muffinProducts}
              />
            )}
          </section>
        </div>
      </div>
    </div>
  );
}