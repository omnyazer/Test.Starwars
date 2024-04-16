import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Topbar from "../Components/Topbar"; 
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Header />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default Home;
