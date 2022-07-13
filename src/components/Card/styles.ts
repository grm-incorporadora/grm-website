import styled from 'styled-components';
import type { CardProps } from '.';

interface ContainerCSSProps {
  size: CardProps['size'];
}

export const ContainerCSS = styled.div<ContainerCSSProps>`
  position: relative;
  overflow: hidden;
  width: ${({ size }) =>
    size === 'large'
      ? 'calc(100%)'
      : size === 'medium'
      ? 'calc(52%)'
      : 'calc(48% - 1rem)'};
  height: 21rem;
  transition: 0.2s ease-in-out 0.3s;

  color: rgb(var(--color-background100));

  > .card__content {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    transition: inherit;

    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 1rem;
  }
  > .card__background {
    position: absolute;
    user-select: none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: inherit;
    .overlay {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.4;
      background-color: black;
    }
  }

  &:hover {
    > .card__background {
      transform: scale(1.1);
    }
  }

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;
