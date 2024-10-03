import useProduct from "../hooks/useProduct";

const MyProductPage = () => {
  const [product] = useProduct();
  console.log(product);

  return (
    <div className="my-12">
      <div>
        <h2 className="text-4xl font-josefin font-semibold text-center">
          Here's My All Products
        </h2>
      </div>
      <div></div>
    </div>
  );
};

export default MyProductPage;
