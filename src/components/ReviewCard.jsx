const ReviewCard = ({ item }) => {
  const { _id, productId, img, name, rating, review } = item || {};
  return (
    <div>
      <div className="flex bg-[#1E293B99] p-6 rounded-lg shadow-lg text-white space-x-4 mb-3">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src={img}
            alt="User profile"
          />
        </div>

        {/* Comment Content */}
        <div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
          <p className="mt-2 text-sm text-white">{review}</p>
          {/* <span className="text-sm text-gray-500">Commented on {platform}</span> */}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
