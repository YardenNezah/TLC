import "./About.scss";
import aboutLogo from "../../../../assets/logo.jpeg";
import GreyCard from "../../../layout/card/GreyCard";

const About = () => {
  return (
    <GreyCard>
        <div className="about-container">
        <div className="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros.
        </div>
        <img src={aboutLogo} alt="about" className="about-logo"></img>
      </div>
    </GreyCard>
  );
};

export default About;
