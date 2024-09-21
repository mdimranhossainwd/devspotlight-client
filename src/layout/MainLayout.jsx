import Carousel from "../components/Carousel";
import Footer from "../components/static/Footer";
import Navbar from "../components/static/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Footer />
    </div>
  );
};

export default MainLayout;
