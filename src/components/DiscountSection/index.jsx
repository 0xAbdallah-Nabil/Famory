const OFFERS = [
  {  text: "Order over 1000 EGP and get free delivery" },
  {  text: "Baked fresh every single day" },
  {  text: "Custom orders for birthdays & occasions" },
  {  text: "Gift bundles for every season" },
  {  text: "Order 24 hours ahead for special requests" },
  {  text: "Order easily via WhatsApp" },
];

function OfferGroup({ hidden = false }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex min-w-full shrink-0 items-center justify-around"
    >
      {OFFERS.map(({ text }) => (
        <li
          key={text}
          className="flex items-center gap-2 whitespace-nowrap px-8 text-sm font-bold tracking-wide sm:text-base"
        >
          {text}
          <span aria-hidden="true" className="ml-8 text-white/40">✦</span>
        </li>
      ))}
    </ul>
  );
}

export default function DiscountSection() {
  return (
    <div
      className="marquee overflow-hidden bg-primary py-2 text-white"
      role="region"
      aria-label="Current offers"
    >
      <div className="marquee-track flex w-max">
        <OfferGroup />
        <OfferGroup hidden />
      </div>
    </div>
  );
}