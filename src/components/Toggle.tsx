import styled from "styled-components";

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Option = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 10px;
  border: 2px solid var(--orange);
  transition: all 0.3s;
  cursor: pointer;
  padding: 10px;
  margin: 10px 40px;
  width: 200px;
  color: ${(props) => (props.selected ? "var(--white)" : "var(--orange)")};
  background-color: ${(props) =>
    props.selected ? "var(--orange)" : "var(--white)"};

  &:hover {
    background-color: ${(props) =>
      props.selected ? "var(--orange)" : "var(--lighter-orange)"};
    transform: scale(1.1);
  }
`;

interface ToggleProps {
  options: string[];
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const Toggle = ({
  options,
  selectedOption,
  setSelectedOption,
}: ToggleProps) => {
  return (
    <ToggleContainer>
      {options.map((option) => {
        return (
          <Option
            selected={option === selectedOption}
            onClick={() => {
              setSelectedOption(option);
            }}
            key={option}
          >
            {option}
          </Option>
        );
      })}
    </ToggleContainer>
  );
};

export default Toggle;
