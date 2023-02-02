import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import { calculateRem } from '../utils';

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({
      theme: {
        colors: { mainBackgroundColor },
      },
    }) => mainBackgroundColor};
    font-family: ${({
      theme: {
        fonts: { spartanRegular },
      },
    }) => spartanRegular};
    background-color:${({
      theme: {
        colors: { white },
      },
    }) => white} ;
    box-sizing: border-box;
  }


  .highlight {
    color: ${({
      theme: {
        colors: { skyBlue },
      },
    }) => `${skyBlue} !important`};
  }

  a {
    cursor: pointer;
    font-weight: 300;
  }

  strong {
    font-weight: 700;
  }

    input, select {
    border: none;
    border-radius: ${calculateRem(5)};
    padding: ${calculateRem(15)};
    width: 100%;
    outline: none;
    box-sizing: border-box;
    background-color: ${({
      theme: {
        colors: { lightgrey },
      },
    }) => lightgrey};
    color: ${({
      theme: {
        colors: { light },
      },
    }) => light};
    font-size: ${calculateRem(14)};
  }


  `;

const StyledButtonIconWrapper = styled.div`
  width: ${calculateRem(30)};
  height: ${calculateRem(30)};
  background-color: ${({
    theme: {
      colors: { light },
    },
  }) => light};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledApplicationWrapper = styled.div`
  max-width: ${calculateRem(1440)};
  height: 100%;
  margin: auto;
`;

const StyledClearFix = styled.div`
  clear: both;
`;

const StyledHeading = styled.h1`
  font-size: ${calculateRem(20)};
  color: ${({
    theme: {
      colors: { mainBackgroundColor },
    },
  }) => mainBackgroundColor};
`;

export {
  GlobalStyles,
  StyledApplicationWrapper,
  StyledButtonIconWrapper,
  StyledClearFix,
  StyledHeading,
};
