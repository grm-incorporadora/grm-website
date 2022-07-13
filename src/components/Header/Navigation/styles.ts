import styled from 'styled-components';

export const ContainerCSS = styled.div`
  > nav {
    display: flex;
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    overflow: hidden;
    position: absolute;

    top: 5rem;
    left: 0;
    width: 100%;
    z-index: 2;
    padding: 1rem;

    background-color: rgb(var(--color-background900), 0.8);
    animation: close 0.2s ease-in-out forwards;

    > nav {
      display: block;
      text-align: right;

      > div {
        &:hover,
        &:focus {
          padding: 0;
        }
      }
    }
  }

  @keyframes close {
    0% {
      height: 170%;
      padding: 1rem;
      visibility: visible;
    }
    100% {
      height: 0;
      padding: 0 1rem;
      visibility: hidden;
    }
  }
  @keyframes open {
    0% {
      height: 0;
      padding: 0 1rem;
      visibility: hidden;
    }
    100% {
      height: 170%;
      padding: 1rem;
      visibility: visible;
    }
  }
`;
