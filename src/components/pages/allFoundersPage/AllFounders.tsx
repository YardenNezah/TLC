import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import FoundersGrid from "./FoundersGrid";
import About from "../homePage/about/About";

const AllFounders = () => {
  return (
    <div className="page-container">
      <Header />
      <div className="about-page"></div>
      <About />      
      <h2>Founders</h2>  
       <FoundersGrid /> 
    </div>
  );
};

export default AllFounders;
