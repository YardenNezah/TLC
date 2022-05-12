import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import FoundersGrid from "./FoundersGrid";

const AllFounders = () => {
  return (
    <div className="all-founders-page">
      <Header />
      <h2>Founders</h2>  
       <FoundersGrid /> 
      <Footer />
    </div>
  );
};

export default AllFounders;
