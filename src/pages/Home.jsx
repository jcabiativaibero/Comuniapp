import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Steps from "../components/Steps";
import CTA from "../components/CTA";
import Footer from "../components/Footer";



function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Steps />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;