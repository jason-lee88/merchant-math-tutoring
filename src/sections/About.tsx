import styled from "styled-components";
import Data from "../data";
import SameerMerchant from "../assets/sameer-merchant.jpg";
import AboutSection from "../components/AboutSection";

const StyledSection = styled.section`
  p {
    font-size: 20px;
  }

  #about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #about-intro {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  }

  #sameer {
    border-radius: 10px;
    height: 400px;
    margin-right: 20px;
    user-select: none;
    -webkit-user-drag: none;
  }

  .about-section {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
  }
`;

const About = () => (
  <StyledSection id="about">
    <h1>About Me</h1>
    <div id="about-content">
      <div id="about-intro">
        <img id="sameer" src={SameerMerchant} />
        <AboutSection
          heading={Data.about[0].heading}
          body={Data.about[0].body}
        />
      </div>
      <hr />
      {Data.about.slice(1, Data.about.length).map((aboutSection) => (
        <AboutSection
          key={aboutSection.heading}
          heading={aboutSection.heading}
          body={aboutSection.body}
        />
      ))}
    </div>
  </StyledSection>
);

export default About;
