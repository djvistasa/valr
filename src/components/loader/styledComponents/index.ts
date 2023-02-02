import styled from 'styled-components/macro';

const StyledLoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

const StyledLoader = styled.div`
  border: ${({
    theme: {
      colors: { lightgrey },
    },
  }) => `16px solid ${lightgrey}`};
  border-top: ${({
    theme: {
      colors: { mainBackgroundColor },
    },
  }) => `16px solid ${mainBackgroundColor}`};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { StyledLoader, StyledLoaderWrapper };
