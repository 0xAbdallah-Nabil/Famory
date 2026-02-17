function Description({ item }) {
  return (
    <div className="flex gap-3 items-center mb-5 w-full justify-center px-2">
      <p className="text-lg sm:text-xl text-center">{item.description}</p>
    </div>
  );
}

export default Description;
