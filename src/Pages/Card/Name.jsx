function Name({ item }) {
  return (
    <div className="flex justify-center items-center mb-4 w-full">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center smooth-sans">
        {item.name}
      </h1>
    </div>
  );
}

export default Name;
