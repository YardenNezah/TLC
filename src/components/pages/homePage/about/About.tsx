import "./About.scss";
import aboutLogo from "../../../../assets/logo.jpeg";
import GreyCard from "../../../layout/card/GreyCard";

const About = () => {
  return (
    <GreyCard>
      <div className="about-container">
        <div className="about-description">
          A social website designed to mediate between the need of associations
          for volunteers, and volunteers who want to come and volunteer. The
          site unites associations in all kinds of places in the country and
          allows individual people or huge companies to reach the associations
          they have chosen and volunteer by filtering by location or type of
          volunteering. The client is allowed to choose to volunteer at the 90th
          minute or to volunteer on a date that suits him.
        </div>
        <img src={aboutLogo} alt="about" className="about-logo"></img>
      </div>
    </GreyCard>
  );
};

export default About;
