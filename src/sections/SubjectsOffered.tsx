import styled from "styled-components";
import Data from "../data";

const StyledSection = styled.section`
  p {
    font-size: 20px;
  }

  .subjects-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    @media screen and (min-width: 1200px) {
      flex-direction: row;
    }
  }

  li {
    font-size: 36px;
    line-height: 1;
    color: var(--orange);
  }

  li > span {
    font-size: 22px;
    color: var(--black);
    top: -6px;
    left: -8px;
    z-index: -1;
  }
`;

const SubjectsOffered = () => (
  <StyledSection id="subjects">
    <h1>Subjects Offered</h1>
    <h2>Lehigh Tutoring Subjects Offered Spring 2023</h2>
    <div className="subjects-container">
      {Object.keys(Data.subjects).map((subject) => (
        <ul key={subject}>
          {Data.subjects[subject].map((course) => (
            <li key={`${subject}${course}`}>
              <span>{`${subject} ${course}`}</span>
            </li>
          ))}
        </ul>
      ))}
    </div>
    <span>
      NOTE: This is a partial listing of subjects offered. If there is any
      subject on here that you'd like to see, do reach out, and I will do my
      best to find a tutor who can help you with your subject.
    </span>
  </StyledSection>
);

export default SubjectsOffered;
