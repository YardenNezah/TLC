import Header from "../../header/Header";
import FoundersGrid from "./FoundersGrid";
import About from "../homePage/about/About";

const AllFounders = () => {
  return (
    <div className="page-container all-volunteeering-container">
      <Header />
      <h2>About us</h2>  
      <div className="founders-container-style">
               <h4>Our Founders :</h4>  
       <FoundersGrid /> 
      </div>

      <h4>"Many Activities, One platform"</h4>
      <div className="about-page"></div>
      <About />      

    </div>
  );
};

export default AllFounders;
