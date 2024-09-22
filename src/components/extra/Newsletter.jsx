const Newsletter = () => {
  return (
    <div>
      <div className="hero bg-white py-20 mb-8">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-4xl font-josefin font-bold">
              Subscribe to our Newsletter
            </h1>
            <p className="py-3 text-lg font-medium mb-6">
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
