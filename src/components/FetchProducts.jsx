import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import Loading from "./Loading";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const res = await data.json();
      // console.log(res);
      setProducts(res.products);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  console.log(products.length);
  // we are using RTK
  const dispatch = useDispatch();
  const handleAddItems = (productItem) => {
    dispatch(addItems(productItem));
  };
  return (
    <div>
      <p>fetching data</p>
      <ul>
        {products.length === 0 ? (
          <Loading />
        ) : (
          products.map((product) => (
            <li
              key={product.id}
              className="text-2xl font-bold text-blue-400 px-4 mx-10 border-2 my-4"
            >
              product : {product?.title}
              <button
                className="border-2 px-5 mx-4 my-5 bg-blue-500 text-white rounded-lg"
                onClick={() => handleAddItems(product)}
              >
                ADD +
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default FetchProducts;
