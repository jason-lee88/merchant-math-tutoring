import {
  ReactElement,
  Children,
  useState,
  useEffect,
  useRef,
  MutableRefObject,
} from "react";
import styled from "styled-components";
import LeftArrow from "../assets/svg/left-arrow.svg";
import RightArrow from "../assets/svg/right-arrow.svg";

const CarouselContainer = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const CarouselWindow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: var(--carousel-width);
  height: var(--carousel-height);
  border: none;
  overflow: hidden;
  z-index: -1;

  @media screen and (min-width: 768px) {
    border: 2px solid var(--light-gray);
  }
`;

const CarouselInner = styled.div<{ offset: number }>`
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform: translateX(${(props) => "-" + props.offset + "px"});
  height: 100%;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  button {
    background-color: transparent;
    border: none;
    transition: transform 0.3s;
    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
    &:not:hover {
      transform: scale(1);
    }
  }

  img {
    user-select: none;
    -webkit-user-drag: none;
    height: 32px;
  }
`;

const Indicators = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
  button {
    background-color: transparent;
    border: none;
    padding: 0px 0px;
    margin: 0px 2px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const Indicator = styled.div`
  display: inline-block;
  background-color: var(--light-gray);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 5px 5px;
  transition: all 0.3s;
  &.active {
    background-color: var(--orange);
  }
  &:hover {
    transform: scale(1.3);
    &:not(.active) {
      background-color: var(--light-orange);
    }
  }
  &:not:hover {
    transform: scale(1);
  }
`;

interface CarouselProps {
  children: ReactElement[];
}

const Carousel = ({ children }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselWindowWidth, setCarouselWindowWidth] = useState(0);
  const carouselWindow = useRef() as MutableRefObject<HTMLInputElement>;

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      setActiveIndex(Children.count(children) - 1);
    } else if (newIndex >= Children.count(children)) {
      setActiveIndex(0);
    } else {
      setActiveIndex(newIndex);
    }
  };

  const onResize = () => {
    setCarouselWindowWidth(carouselWindow.current.offsetWidth);
  };

  useEffect(() => {
    onResize();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <CarouselContainer>
      <CarouselWindow ref={carouselWindow}>
        <CarouselInner offset={activeIndex * carouselWindowWidth}>
          {children}
        </CarouselInner>
      </CarouselWindow>
      <Indicators>
        {Children.map(children, (_, index) => (
          <button onClick={() => updateIndex(index)}>
            <Indicator className={index === activeIndex ? "active" : ""} />
          </button>
        ))}
      </Indicators>
      <Controls>
        <button onClick={() => updateIndex(activeIndex - 1)}>
          <img src={LeftArrow} />
        </button>
        <button onClick={() => updateIndex(activeIndex + 1)}>
          <img src={RightArrow} />
        </button>
      </Controls>
    </CarouselContainer>
  );
};

export default Carousel;
