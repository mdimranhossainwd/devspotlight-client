import { useLoaderData } from "react-router-dom";
import TopHeading from "../components/shared/TopHeading";

const ProductPage = () => {
  const productInfo = useLoaderData();
  const {
    _id,
    product_name,
    product_img,
    product_tags,
    product_description,
    product_totalcount,
    product_links,
  } = productInfo || {};

  return (
    <div className="container mx-auto py-12">
      <TopHeading
        heading="Product Details"
        text="Explore our top picks for the most innovative and helpful developer tools available today. These tools are designed to streamline workflows, enhance collaboration, and boost productivity, enabling developers to build high-quality software more efficiently and effectively than ever before."
      />
    </div>
  );
};

export default ProductPage;
