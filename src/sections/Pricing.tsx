import styled from "styled-components";
import Data from "../data";
import Card from "../components/Card";

const StyledSection = styled.section`
  #pricing-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #pricing-cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
  }

  .cost-label {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 40px;
  }

  p {
    font-size: 16px;
  }

  h2.info {
    width: 90%;
    margin-top: 80px;
    font-size: 32px;
  }

  a {
    color: var(--orange);
    &:hover {
      color: var(--dark-orange);
    }
    &:active {
      color: var(--darker-orange);
    }
  }
`;

const Pricing = () => (
  <StyledSection id="pricing">
    <h1>Pricing</h1>
    <div id="pricing-content">
      <div id="pricing-cards">
        {Data.pricing.map((price) => (
          <Card key={price.cost} title={price.label}>
            <div className="cost-label">{`$${price.cost} / hr`}</div>
          </Card>
        ))}
      </div>
      <p>NOTE: Group rates are for each student.</p>
      <h2 className="info">
        We have tutors who can tutor a wide variety of STEM topics, including
        but not limited to Mathematics, Physics, and Mechanics. View the{" "}
        <a href="#tutors">tutors</a> section of this page to find a tutor that's
        right for you.
      </h2>
      <h2 className="info">
        If you are interested in scheduling a tutoring session (online or in
        person) or have any questions, please reach out at{" "}
        <a href="mailto:merchantmathtutoring@gmail.com">
          merchantmathtutoring@gmail.com
        </a>
        .
      </h2>
    </div>
  </StyledSection>
);

export default Pricing;
