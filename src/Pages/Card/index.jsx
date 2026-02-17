import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import MoveBack from "./moveBack.jsx";
import Quantity from "./Quantity.jsx";
import AddToCart from "./addToCart.jsx";
import QuantityButtons from "../../components/QuantityButtons/index.jsx";
import { useState } from "react";
import Description from "./Description.jsx";
import Image from "./Image.jsx";
import Price from "./Price.jsx";
import Name from "./Name.jsx";
function Card() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { isLoading, products } = useFetch("data/products.json");

  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center min-h-[66vh] bg-[#fff9ed]">
          <strong>Loading...</strong>
        </div>
      ) : (
        products.map(
          (item) =>
            item.id == id &&
            item.soldOut == false && (
              <div className="bg-[#fff9ed]">
                <MoveBack category={item.category} />
                <section
                  key={item.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 lg:p-10  max-w-[90%] mx-auto min-h-[80vh] items-center"
                >
                  <Image item={item} />

                  <div className="flex flex-col justify-center items-center gap-5 p-6 rounded-md shadow-md w-full">
                    <Name item={item} />
                    <Price item={item} />
                    <Description item={item} />
                    <Quantity quantity={quantity} setQuantity={setQuantity} />
                    <AddToCart
                      item={item}
                      quantity={quantity}
                      setQuantity={setQuantity}
                    />
                  </div>
                </section>
              </div>
            ),
        )
      )}
    </>
  );
}

export default Card;
