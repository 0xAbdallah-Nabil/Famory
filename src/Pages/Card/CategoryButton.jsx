function CategoryButton({
  title,
  selectedCategory,
  setSelectedCategory,
  selected,
}) {
  return (
    <div>
      <button
        onClick={() => setSelectedCategory(selected)}
        className={`px-4 py-1.5 rounded-full font-bold transition-all duration-300 text-base ${
          selectedCategory === `${selected}`
            ? "text-white shadow-lg scale-105"
            : "bg-white border-2 hover:bg-pink-50"
        }`}
        style={{
          backgroundColor:
            selectedCategory === `${selected}` ? "#e60077" : "transparent",
          borderColor: "#e60077",
          color: selectedCategory === `${selected}` ? "white" : "#e60077",
        }}
      >
        {title}
      </button>
    </div>
  );
}

export default CategoryButton;
