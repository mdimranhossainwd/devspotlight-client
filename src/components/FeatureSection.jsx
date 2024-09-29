import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card";
import TopHeading from "./shared/TopHeading";

const FeatureSection = ({ type }) => {
  const [card, setCard] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/features");
      setCard(data);
    };
    getData();
  }, []);

  return (
    <div className="my-20">
      <TopHeading
        heading="Features Product"
        text="Explore our top picks for the most innovative and helpful developer tools available today. These tools are designed to streamline workflows, enhance collaboration, and boost productivity, enabling developers to build high-quality software more efficiently and effectively than ever before."
      />

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          {card?.map((item) => (
            <Card item={item} key={item?._id} type="features" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
