import styled from "styled-components";
import Data from "../data";
import Card from "../components/Card";
import Toggle from "../components/Toggle";
import { useState } from "react";

const StyledSection = styled.section`
  #pricing-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  #pricing-cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }

    @media screen and (min-width: 1600px) {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
  }

  .cost-label {
    font-family: var(--font-serif);
    font-weight: 700;
    font-size: 40px;
  }

  h2.info {
    width: 90%;
    margin-top: 80px;
    font-size: 18px;

    @media screen and (min-width: 768px) {
      font-size: 32px;
    }
  }

  h3 {
    margin: 10px;
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

const Pricing = () => {
  const [selectedPricingOption, setSelectedPricingOption] =
    useState<string>("Individual Pricing");

  return (
    <StyledSection id="pricing">
      <h1>Pricing</h1>
      <div id="pricing-content">
        <Toggle
          options={["Individual Pricing", "Bundle Pricing"]}
          selectedOption={selectedPricingOption}
          setSelectedOption={setSelectedPricingOption}
        />
        <h3>
          Save <span style={{ color: "var(--orange)" }}>$50</span> for every 10
          hours when you select Bundle Pricing!
        </h3>
        <div id="pricing-cards">
          {Data.pricing.map((price) => (
            <Card key={price.cost} title={price.label}>
              <div className="cost-label">
                {selectedPricingOption === "Individual Pricing"
                  ? `$${price.cost} / hr`
                  : `$${(price.cost - 5) * 10} / 10 hrs`}
              </div>
            </Card>
          ))}
        </div>
        <p>NOTE: Group rates are for each student.</p>
        <h2 className="info">
          We have tutors who can teach a wide variety of STEM topics, including
          but not limited to topics in Mathematics, Physics, and Mechanics. View
          the <a href="#tutors">tutors</a> section of this website to find a
          tutor that's right for you.
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
};

export default Pricing;
