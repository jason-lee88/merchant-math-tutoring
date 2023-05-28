import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: var(--off-white);
  font-family: var(--font-serif);
  padding: 60px 0px;

  a {
    color: var(--black);
    &:hover {
      color: var(--dark-gray);
    }
  }

  .name {
    font-size: 30px;
    font-weight: 700;
  }

  .email {
    font-size: 20px;
    margin-bottom: 40px;
  }

  .credit {
    font-size: 20px;
  }
`;

const Footer = () => (
  <FooterContainer id="footer-content">
    <span className="name">Sameer Merchant</span>
    <a className="email" href="mailto:merchantmathtutoring@gmail.com">
      merchantmathtutoring@gmail.com
    </a>
    <span className="credit">
      Website Designed & Built by{" "}
      <a target="_blank" href="https://jasonedwardlee.com">
        Jason Lee
      </a>
    </span>
  </FooterContainer>
);

export default Footer;
