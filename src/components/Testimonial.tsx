import styled from "styled-components";

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: var(--carousel-height);
  width: var(--carousel-width);
  padding: 40px;

  h2 {
    font-family: var(--font-serif);
    font-size: 32px;
    margin-bottom: 15px;
  }

  h3 {
    font-family: var(-font-serif);
    font-size: 16px;
    color: var(--darker-orange);
    margin-bottom: 40px;
  }

  span {
    font-family: var(--font-serif);
    font-size: 128px;
    line-height: 0.4;
    color: var(--orange);
  }

  p {
    font-size: 14px;
  }
`;

interface TestimonialProps {
  name: string;
  subheading?: string;
  body: string;
}

const Testimonial = ({ name, subheading, body }: TestimonialProps) => (
  <TestimonialContainer>
    <h2>{name}</h2>
    <h3>{subheading}</h3>
    <span>"</span>
    <p>{body}</p>
  </TestimonialContainer>
);

export default Testimonial;
