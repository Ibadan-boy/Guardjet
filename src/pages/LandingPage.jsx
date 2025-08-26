import Header from "../components/Header";
import Hero from "../components/Hero";
import Companies from "../components/Companies";
import Card from "../components/Card";
import Headset from "../assets/Images/headset-image.jpg";
import BackgroundSection from "../components/Background";
import BackgroundImage from "../assets/Images/background-one.jpg";
import HeroImg from "../assets/Images/another-hero.jpg";
import HeroBanner from "../components/HeroBanner";
import Footer from "../components/Footer";

export default function LandingPage(){
    return(
        <>
          <Header />
          <Hero image={HeroImg}/>
          <Companies />
          <BackgroundSection title="Where Originality Meets Accessibility" image={BackgroundImage}/>
          <HeroBanner title="Fuel Your Creativity And Productivity" subtitle="Explore cutting-edge gadgets for your modern lifestyle"/>
          <Card
          title="Seamless Transactions On Your Favourite Gadgets"
          imageSrc={Headset}
          ctaText="Shop Now"
          subtitle="Experience effortless and secure transactions right from your beloved gadgets with our cutting-edge payment solutions. Designed to integrate seamlessly with your devices, our technology ensures fast, reliable purchases anytime, anywhere. Enjoy a hassle-free shopping journey tailored to enhance your gadget experience."/>
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