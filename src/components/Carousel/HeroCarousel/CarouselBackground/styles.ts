import styled from 'styled-components';

export const ContainerCSS = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
  height: 100%;

  > .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0.4;
    background-color: black;
  }
`;
