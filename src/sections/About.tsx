import styled from "styled-components";
import Data from "../data";
import SameerMerchant from "../assets/sameer-merchant.jpg";

const StyledSection = styled.section`
  p {
    font-size: 20px;
  }

  #about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
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

  #about-text {
    display: flex;
    flex-direction: column;
  }

  .about-section {
    display: flex;
    flex-direction: column;
  }
`;

const About = () => (
  <StyledSection id="about">
    <h1>About Me</h1>
    <div id="about-content">
      <div id="about-intro">
        <img id="sameer" src={SameerMerchant} />
        <div className="about-section">
          <h2>{Data.about[0].heading}</h2>
          <p>{Data.about[0].body}</p>
        </div>
      </div>
      <hr />
      <div id="about-text">
        {Data.about.slice(1, Data.about.length).map((aboutSection) => (
          <div className="about-section">
            <h2>{aboutSection.heading}</h2>
            {aboutSection.body.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  </StyledSection>
);

export default About;
