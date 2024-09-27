import Carousel from "../components/Carousel";
import ContactSections from "../components/ContactSections";
import Brand from "../components/extra/Brand";
import Newsletter from "../components/extra/Newsletter";
import FeatureSection from "../components/FeatureSection";
import TreadSections from "../components/TreadSections";
const HomePages = () => {
  return (
    <>
      <Carousel />
      <FeatureSection />
      <TreadSections />
      <Newsletter />
      <ContactSections />
      <Brand />
    </>
  );
};

export default HomePages;
