import { css } from "styled-components";

const Variables = css`
  :root {
    // COLORS
    --white: #ffffff;
    --off-white: #eeeeee;
    --light-gray: #cccccc;
    --dark-gray: #999999;
    --black: #000000;
    --light-orange: #fcaf9c;
    --orange: #ff6b47;
    --dark-orange: #c45036;
    --darker-orange: #a0402c;

    // OTHERS
    --navbar-height: 120px;
    --navbar-expanded-height: 240px;
    --card-width: 300px;
    --carousel-width: 300px;
    --carousel-height: 1000px;
    --font-sans: "Inter", sans-serif;
    --font-serif: "Roboto Slab", "serif";

    @media screen and (min-width: 768px) {
      --carousel-width: 600px;
      --carousel-height: 600px;
    }

    @media screen and (min-width: 1200px) {
      --carousel-width: 900px;
      --carousel-heigh: 500px;
    }
  }
`;

export default Variables;
