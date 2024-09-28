import axios from "axios";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard";
import TopHeading from "../shared/TopHeading";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios("http://localhost:5000/api/v1/reviews");
      setReviews(data);
    };
    getData();
  }, []);
  console.log(reviews);

  return (
    <div className="mt-16 mb-9">
      <TopHeading
        heading="All Clients Reviews"
        text="Explore our top picks for the most innovative and helpful developer tools available today. These tools are designed to streamline workflows, enhance collaboration, and boost productivity, enabling developers to build high-quality software more efficiently and effectively than ever before."
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 py-6">
        {reviews.map((item) => (
          <ReviewCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
