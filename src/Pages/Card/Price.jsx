function Price({ item }) {
  return (
    <div className="flex gap-2 sm:gap-3 items-center mb-5 w-full justify-center">
      <h2 className="text-lg sm:text-xl font-semibold">Price:</h2>
      <p className="text-2xl font-bold">{item.price} EGP</p>
    </div>
  );
}

export default Price;
