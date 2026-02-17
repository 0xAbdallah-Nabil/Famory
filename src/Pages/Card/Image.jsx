function Image({ item }) {
  return (
    <div className="w-full lg:w-[500px] flex justify-center mb-6 lg:mb-0">
      <img
        src={`${import.meta.env.BASE_URL}${item.image}`}
        alt={item.name}
        className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]   shadow-sm border-2 border-black"
      />
    </div>
  );
}

export default Image;
