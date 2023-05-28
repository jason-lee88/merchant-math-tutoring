import styled from "styled-components";

const StyledSection = styled.section`
  p {
    font-size: 20px;
  }
`;

const StudyGuides = () => (
  <StyledSection id="guides">
    <h1>Study Guides</h1>
    <p>
      I am currently making study guides for the subjects I am tutoring. This
      allows me to be a more effective tutor, and also serves as a supplement
      for students. I believe that the best way to do well on math exams is
      understanding the process of solving various types of problems, which in
      large part, is why I started making these study guides. I also make study
      guides on understanding some of the underlying theories behind the math
      for those students that want to learn more.
    </p>
  </StyledSection>
);

export default StudyGuides;
