import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import "./style.css";
import "./style.css";
function OurProducts() {
  const { isLoading, products } = useFetch("data/products.json");
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col justify-center items-center min-h-[66vh] bg-[]">
          <strong>Loading...</strong>
        </div>
      ) : (
        <div className="pb-5 flex flex-col justify-center items-center min-h-[80vh]  bg-[#fff9ed]">
          <div className="flex flex-wrap justify-center gap-5 mt-3 ">
            {products.map((item, index) => (
              <Link
                to={`/our-products/${item.id}`}
                key={item.id}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <CardActions className="hover:scale-105 transition-all duration-300 flex flex-row flex-wrap max-w-[400px]">
                  <div className="flex flex-row felx-wrap justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}${item.image}`}
                      alt={item.name}
                      height="100"
                      className="w-[150px] object-cover h-[150px]"
                    />
                    <CardContent className="w-[250px]">
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className="text-black text-center font-bold"
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        className="text-ellipsis overflow-hidden whitespace-nowrap"
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </div>
                </CardActions>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default OurProducts;
