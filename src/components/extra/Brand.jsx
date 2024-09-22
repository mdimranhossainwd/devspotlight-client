import Marquee from "react-fast-marquee";

const Brand = () => {
  return (
    <div className="py-20 bg-white mb-8">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto py-3 space-y-3">
          <h2 className="text-4xl font-josefin mb-8 font-bold">Our Brands</h2>
          {/* <p className="text-md pb-8 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            exercitationem esse voluptatum. Impedit quas tempore fugit esse
            totam. Rerum, quidem omnis harum minima autem tenetur neque ullam
            repellat repudiandae consequuntur!
          </p> */}
        </div>
        <Marquee>
          <div className="flex gap-9">
            <img
              src="https://i.ibb.co.com/tKjfQbx/Nubank-qtyp9xu5091y01do185yj0iq6j22235squ1qxedz3i.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/pbqd6Bc/Visa-qtypdutxheeydjov5x3zx0xvabr44opja7wkwwkx66.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/fXDXBWy/Shopify-qtyp7flms5mf1h0qo55rvnah5jetj57keff4uu3rou.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/bB6yRHx/ebay-qtypao5lpoo1gewpq4g5ocdghkkmcog0jaroaxbtm8.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/MDq9S83/Google-qtyxl4upsv8pyzdfwmwiwizix3hdgsbpwk314wsjw0.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/3hX0qW3/Disney-qtyp817wjf22vsqm4heu6ibwhnkjr8z4i8vmtz8l2o.png"
              alt=""
            />
            <img
              src="https://i.ibb.co.com/GkL9hGs/Amazon-qtyp5pk9n5vk6i44oz91ilfvmd0vq6r0iqtf4comgg.png"
              alt=""
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Brand;
