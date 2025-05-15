import Benefit from "../components/Benefit";
import Features from "../components/features";
import Hero from "../components/hero";
import Process from "../components/process";
import SuccessStories from "../components/success-stories";
import About from "./about";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Benefit />
      <Process />
      <SuccessStories />
    </>
  );
}
