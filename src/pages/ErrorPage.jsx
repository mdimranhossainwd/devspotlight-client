const ErrorPage = () => {
  return (
    <div>
      <section className="">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center justify-center lg:gap-12">
          <div>
            <h1 className="text-5xl font-bold font-josefin text-center my-12">
              Oooops...{" "}
            </h1>
            <img
              className="max-w-lg lg:mx-auto"
              src="https://merakiui.com/images/components/illustration.svg"
              alt=""
            />

            <div>
              <h1 className="text-5xl font-bold font-josefin text-center my-12">
                Page Not Found
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
