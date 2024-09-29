import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Card from "./Card";
import TopHeading from "./shared/TopHeading";

const FeatureSection = ({ type }) => {
  const [card, setCard] = useState([]);
  const axios = useAxios();
  const [sort, setSort] = useState();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`/features?sort=${sort}`);
      setCard(data);
    };
    getData();
  }, [sort]);

  return (
    <div className="my-20">
      <TopHeading
        heading="Features Product"
        text="Explore our top picks for the most innovative and helpful developer tools available today. These tools are designed to streamline workflows, enhance collaboration, and boost productivity, enabling developers to build high-quality software more efficiently and effectively than ever before."
      />

      <div className="container mx-auto">
        <div className="flex items-center justify-between my-8">
          <h2 className="text-lg font-semibold">Sorting By data :</h2>
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
              }}
              value={sort}
              name="sort"
              id="sort"
              className="select select-bordered w-full"
            >
              <option value="">Shorting Product</option>
              <option value="asc">First</option>
              <option value="desc">Last</option>
            </select>
          </div>
        </div>
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
