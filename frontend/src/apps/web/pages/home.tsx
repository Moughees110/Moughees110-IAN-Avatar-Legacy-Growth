import Benefit from "../components/Benefit";
// import Comparison from '../components/comparison';
// import FAQsComponent from '../components/faqs';
import Features from "../components/features";
import Hero from "../components/hero";
import Integrations from "../components/integrations";
import Reviews from "../components/reviews";

import Process from "../components/process";

import About from "./about";
import { SuccessStories } from "../components/success-stories";
import { OurTeam } from "./ourteam";

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
      <Reviews />
      <Process />
      <SuccessStories />
      <OurTeam />
    </>
  );
}
