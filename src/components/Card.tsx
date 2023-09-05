import { ReactNode } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  width: var(--card-width);
  padding: 10px;
  color: var(--white);
  background: linear-gradient(
    to bottom right,
    var(--light-orange),
    var(--dark-orange)
  );
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }

  h2 {
    color: white;
  }

  .card-content {
    padding: 10px;
  }
`;

interface CardProps {
  children?: ReactNode;
  title: string;
}

const Card = ({ children, title }: CardProps) => (
  <CardContainer>
    <h2>{title}</h2>
    <div className="card-content">{children}</div>
  </CardContainer>
);

export default Card;
