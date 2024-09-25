const Newsletter = () => {
  return (
    <div>
      <div
        className="hero bg-white py-40 mb-8"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/dmVq6Sd/background-tree-white.jpg)",
          clipPath: "polygon(0 14%, 100% 0%, 100% 85%, 0% 100%)",
        }}
      >
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-josefin font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="py-3 text-md font-medium mb-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div>
              <input
                type="text"
                placeholder="Subscribe email here ..."
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
