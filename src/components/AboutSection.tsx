import styled from "styled-components";

const AboutSectionContainer = styled.div``;

interface AboutSection {
  heading: string;
  body: string[];
}

const AboutSection = ({ heading, body }: AboutSection) => (
  <AboutSectionContainer>
    <h2>{heading}</h2>
    {body.map((paragraph) => (
      <p key={paragraph}>{paragraph}</p>
    ))}
  </AboutSectionContainer>
);

export default AboutSection;
