import { css } from 'styled-components';

export const AboutCSS = css`
  > .about {
    color: rgb(var(--color-text900));
    font-size: 1.3rem;
    margin: 3rem auto;
    @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
      text-align: center;
    }
    @media (max-width: 375px) {
      text-align: justify;
    }
  }
`;
