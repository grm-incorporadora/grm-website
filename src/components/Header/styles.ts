import styled from 'styled-components';

export const ContainerCSS = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  z-index: 10;

  color: rgb(var(--color-text100));

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    > div {
      align-self: center;
    }
    > .hamburger {
      z-index: 2;
      color: rgb(var(--color-text100));
    }

    h1 {
      margin-top: 0;
    }
  }

  #menu-check:checked ~ div > div > .navigation {
    animation: open 0.2s ease-in-out forwards;
  }
`;
