import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useFetch from "../../hooks/useFetch.js";

export default function OurServices() {
  const { products, isLoading } = useFetch("services.json");
  const services = (products || []).filter((p) => p.avilability === true);

  return (
    <section className="min-h-screen bg-cream">
      <div className="mx-auto max-w-7xl px-3 py-10 md:px-6 md:py-16">
        <header className="mb-10 text-center md:mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary md:text-sm">
            Famory Bakery
          </p>
          <h1 className="mt-2 text-4xl text-cocoa md:text-6xl">
            Our <span className="text-primary">Menu</span>
          </h1>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </header>

        <div className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-3 lg:gap-8">
          {isLoading
            ? Array.from({ length: 6 }).map((_, i) => <TileSkeleton key={i} />)
            : services.map((service, index) => (
                <ServiceTile key={service.id} service={service} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTile({ service, index }) {
  return (
    <Link
      to={`/our-services/${service.id}`}
      style={{ animation: `fade-up 0.6s ease-out ${index * 0.08}s both` }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-sand shadow-card ring-1 ring-primary/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-lift md:rounded-[2rem]"
    >
      <img
        src={service.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/85 via-cocoa/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 md:p-6">
        <h2 className="text-base leading-tight text-white drop-shadow md:text-2xl">
          {service.title}
        </h2>
        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-primary transition group-hover:bg-primary group-hover:text-white md:h-11 md:w-11"
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            className="transition group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

function TileSkeleton() {
  return (
    <div className="aspect-[4/5] animate-pulse rounded-[1.5rem] bg-sand/60 md:rounded-[2rem]" />
  );
}