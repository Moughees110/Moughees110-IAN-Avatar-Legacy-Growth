import Benefit from "../components/Benefit";
import Comparison from '../components/comparison';
import FAQsComponent from '../components/faqs';
import Features from "../components/features";
import Hero from "../components/hero";
import Integrations from '../components/integrations';
import Pricing from '../components/pricing';
import Reviews from '../components/reviews';

// import Process from "../components/process";
// import SuccessStories from "../components/success-stories";
import About from "./about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <div>
        id:"features"
        <Features />
        </div>
      <Benefit />
      <Integrations />
      <Reviews/>
      {/* <Process /> */}
      {/* <SuccessStories /> */}
      <div>
        id:"pricing"
        <Pricing />
        </div>
      <FAQsComponent />
      <Comparison/>
    </>
  );
}
