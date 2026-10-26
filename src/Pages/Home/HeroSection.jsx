import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SOCIALS = [
  { name: "Instagram", icon: faInstagram, href: "https://www.instagram.com/famory_bakery" },
  { name: "WhatsApp", icon: faWhatsapp, href: "https://wa.me/201285596279" },
  { name: "TikTok", icon: faTiktok, href: "https://www.tiktok.com/@famory.bakery" },
  { name: "Email", icon: faEnvelope, href: "mailto:abdallahnabil2003@gmail.com" },
];

export default function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[70svh] items-center overflow-hidden">
      <img
        src="https://res.cloudinary.com/dk1q6kpkk/image/upload/v1772316311/herosection_image_zpjnmk.jpg"
        alt="Freshly baked treats from Famory Bakery"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cocoa/80 via-cocoa/40 to-transparent md:bg-gradient-to-r md:from-cocoa/75 md:via-cocoa/30" />

      <div className="mx-auto w-full max-w-screen-xl px-6 py-16">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-white/80">
          Famory Bakery
        </p>
        <h1 className="max-w-xl font-brand text-5xl leading-tight text-white sm:text-6xl md:text-7xl">
          Baked fresh,<br />made with love.
        </h1>
        <p className="mt-4 max-w-md text-lg text-white/90">
          Cinnabons, cheesecakes, creamy puffs and custom orders for every occasion.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/our-services"
            className="rounded-full bg-primary px-8 py-3.5 font-display text-white shadow-lift transition hover:-translate-y-0.5 hover:bg-primary-dark active:scale-95"
          >
            Order now
          </Link>

          <ul className="flex gap-2">
            {SOCIALS.map(({ name, icon, href }) => (
              <li key={name}>
                <a
                  href={href}
                  aria-label={name}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white hover:text-primary"
                >
                  <FontAwesomeIcon icon={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}