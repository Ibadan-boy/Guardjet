import Header from "../components/Header";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Card from "../components/Card";
import Headset from "../assets/Images/headset-image.jpg";
import BackgroundSection from "../components/BackgroundSection";
import BackgroundImage from "../assets/Images/background-one.jpg";
import HeroImg from "../assets/Images/another-hero.jpg";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";
import TodaysSpecial from "../components/TodaySpecial";
import TransactionImg from "../assets/Images/transaction-image.jpg";
import OrderTracking from "../assets/Images/order-tracking.jpg";
import { useNavigate } from "react-router-dom";

export default function LandingPage(){

  const navigate = useNavigate();

    function handleSignin(){
      navigate("/login")
    }

    function handleShop(){
      navigate("/shop")
    }

    return(
        <>
          <Header />
          <Hero image={HeroImg}
          onClick={handleShop}/>
          <Companies />
          <BackgroundSection title="Where Originality Meets Accessibility"
          image={BackgroundImage}
          onClick={handleShop}/>
          <HeroBanner
          title="Fuel Your Creativity And Productivity" 
          subtitle="Explore cutting-edge gadgets for your modern lifestyle"
          onClick={handleSignin}/>
          <Card
          title="Seamless Transactions On Your Favourite Gadgets"
          imageSrc={TransactionImg}
          ctaText="Shop Now"
          subtitle="Experience effortless and secure transactions right from your beloved gadgets store with our cutting-edge payment solutions. Designed to integrate seamlessly with your devices, our technology ensures fast, reliable purchases anytime, anywhere. Enjoy a hassle-free shopping journey tailored to enhance your gadget experience."/>
          <Card
          title="Track Order"
          imageSrc={OrderTracking}
          invert={true}
          ctaText="Sign In To Track Order"
          subtitle="At Guardjet, we offer real-time tracking, using the best technologies available, when you log into your account, providing you the exact coordinates of your ordered products while they are being shipped and delivered to you with speed. There is no limit to the number of orders you can track, as long as you are logged in. "/>
          <TodaysSpecial />
          <Card
          title="Your Best Gadget Showroom"
          imageSrc={Headset}
          ctaText="See Products"
          invert={true}
          subtitle="I initialized the project in my console, having watched movies to my satisfaction. I also found a Figma template (mobile version) that I want to use for the project; I'll build on that to expand it into the web version. Tonight, I'll draft the web version on paper."/>
          <Footer />
        </>
    )
}

// start designing the shop page next