const TopHeading = ({ heading, text }) => {
  return (
    <div className=" w-1/2 mx-auto text-center">
      <h2 className="text-4xl font-josefin font-bold">{heading}</h2>
      <p className="py-3 text-md font-medium mb-6">{text}</p>
    </div>
  );
};

export default TopHeading;
