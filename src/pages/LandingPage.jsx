import Header from "../components/Header";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Card from "../components/Card";
import Headset from "../assets/Images/headset-image.jpg";
import BackgroundSection from "../components/Background";
import BackgroundImage from "../assets/Images/background-one.jpg";

export default function LandingPage(){
    return(
        <>
          <Header />
          <Hero />
          <Companies />
          <BackgroundSection title="Where Originality Meets Accessibility" image={BackgroundImage}/>
          <Card
          title="Seamless Transactions On Your Favourite Gadgets"
          imageSrc={Headset}
          ctaText="Shop Now"
          subtitle="Experience effortless and secure transactions right from your beloved gadgets with our cutting-edge payment solutions. Designed to integrate seamlessly with your devices, our technology ensures fast, reliable purchases anytime, anywhere. Enjoy a hassle-free shopping journey tailored to enhance your gadget experience."/>
        </>
    )
}