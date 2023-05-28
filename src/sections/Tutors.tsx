import styled from "styled-components";
import Data from "../data";
import AboutSection from "../components/AboutSection";

const StyledSection = styled.section`
  p {
    font-size: 20px;
  }

  #tutors-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .tutor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 40px;

    @media screen and (min-width: 1200px) {
      flex-direction: row;
      align-items: flex-start;
    }
  }

  h2 {
    font-size: 36px;
  }
`;

const TutorImage = styled.div<{
  imagePath: string;
  imageX: number;
  imageY: number;
  imageXMobile: number;
  imageYMobile: number;
  imageScaling: number;
  imageScalingMobile: number;
}>`
  display: flex;
  background-image: ${(props) => `url(${props.imagePath})`};
  background-position-x: ${(props) => `-${props.imageXMobile}px`};
  background-position-y: ${(props) => `-${props.imageYMobile}px`};
  background-size: ${(props) => `${props.imageScalingMobile}px`};
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 300px;
  width: 300px;
  margin-bottom: 20px;
  user-select: none;
  -webkit-user-drag: none;

  @media screen and (min-width: 768px) {
    background-position-x: ${(props) => `-${props.imageX}px`};
    background-position-y: ${(props) => `-${props.imageY}px`};
    background-size: ${(props) => `${props.imageScaling}px`};
    min-height: 500px;
    min-width: 500px;
    margin-right: 20px;
  }
`;

const Tutors = () => (
  <StyledSection id="tutors">
    <h1>Tutors</h1>
    <div id="tutors-content">
      {Data.tutors.map((tutor) => (
        <div key={tutor.name} className="tutor-container">
          <TutorImage
            className="tutor-image"
            imagePath={tutor.imagePath}
            imageX={tutor.imagePosition[0]}
            imageY={tutor.imagePosition[1]}
            imageXMobile={tutor.imagePositionMobile[0]}
            imageYMobile={tutor.imagePositionMobile[1]}
            imageScaling={tutor.imageScaling}
            imageScalingMobile={tutor.imageScalingMobile}
          />
          <AboutSection heading={tutor.name} body={tutor.bio} />
        </div>
      ))}
    </div>
  </StyledSection>
);

export default Tutors;
