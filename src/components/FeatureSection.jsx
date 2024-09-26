import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";
import TopHeading from "./shared/TopHeading";

const FeatureSection = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/api/v1/features");
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
            <Card item={item} key={item?._id} />
          ))}
        </div>

        {/* <Card /> */}
      </div>
    </div>
  );
};

export default FeatureSection;
