import { Link } from "react-router-dom";
export default function MoveBack(item) {
  return (
    <div>
      <div className="w-full  overflow-hidden bg-gradient-to-r bg-[#fff9ed] text-black py-2 shadow-md">
        <div className="w-full flex  whitespace-nowrap font-semibold  sm:text-lg tracking-wide pl-10">
          <span className="mx-5">
            <Link to="/">Home</Link>
          </span>
          <span> &gt; </span>
          <span className="mx-5">
            <Link to="/our-products">Products</Link>
          </span>
          <span>&gt;</span>
          <span className="mx-5">{item.category}</span>
        </div>
      </div>
    </div>
  );
}
