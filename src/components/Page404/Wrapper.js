import styled, { css, keyframes } from 'styled-components';

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 120px;
  animation: ${rotate} 5s linear infinite;
`;

export default Wrapper;
