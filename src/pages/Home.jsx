import HeroSection from "../components/HeroSection";
import PromoSection from "../components/PromoSection";
import smartWatch from "../assets/smartWatch1.png";
import headphone from "../assets/hero/headphone.png";
import macbook from "../assets/category/macbook.png";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PromoSection
        bgColor="bg-pink-200"
        discountText="30% OFF"
        mainHeading="HAPPY HOURS"
        dateRange="14 Jan to 28 Jan"
        subHeading="Smart Solo"
        title="Winter Sale"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        imageSrc={smartWatch}
        imageAlt="Smart Watch"
      />
      <PromoSection
        bgColor="bg-red-400"
        discountText="25% OFF"
        mainHeading="SUMMER DEALS"
        dateRange="15 Jun to 30 Jun"
        subHeading="Premium Audio"
        title="Headphone Special"
        description="High quality headphones with noise cancellation features."
        imageSrc={headphone}
        imageAlt="Premium Headphones"
        textColor="text-white"
      />
      <PromoSection
        bgColor="bg-orange-400"
        discountText="15% OFF"
        mainHeading="TECH UPGRADE"
        dateRange="1 Mar to 15 Mar"
        subHeading="Apple MacBook"
        title="Pro Performance"
        description="Experience blazing fast speed with the new M3 chip. Limited time offer on all MacBook Pro models."
        imageSrc={macbook}
        imageAlt="MacBook Pro"
        textColor="text-white"
      />
    </div>
  );
};

export default Home;
