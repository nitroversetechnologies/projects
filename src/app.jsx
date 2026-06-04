import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProduct from "./components/FeaturedProduct";
import Categories from "./components/Categories";
import PrintingServices from "./components/PrintingServices";
import FeaturedGallery from "./components/FeaturedGallery";
import WhyChooseUs from "./components/WhyChooseUs";
import BulkOrderCTA from "./components/BulkOrderCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedProduct />
      <Categories />
      <PrintingServices />
      <FeaturedGallery />
      <WhyChooseUs />
      <BulkOrderCTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;