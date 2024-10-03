import ProductCard from "../components/shared/ProductCard";
import useProduct from "../hooks/useProduct";

const MyProductPage = () => {
  const [product, refetch] = useProduct();
  console.log(product);

  return (
    <div className="my-12">
      <div>
        <h2 className="text-4xl font-josefin font-semibold text-center">
          Here's My All Products
        </h2>
      </div>
      <div>
        {product.map((item) => (
          <ProductCard key={item?._id} refetch={refetch} product={item} />
        ))}
      </div>
    </div>
  );
};

export default MyProductPage;
