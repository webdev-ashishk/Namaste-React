import { useEffect, useState } from "react";

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

  return (
    <div>
      <p>fetching data</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>product id is {product.id}</li>
        ))}
      </ul>
    </div>
  );
};
export default FetchProducts;
