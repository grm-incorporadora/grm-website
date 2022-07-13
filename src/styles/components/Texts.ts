import styled, { css } from 'styled-components';

interface TitleCSSProps {
  weight?: string;
  uppercase?: boolean;
  line?: boolean;
  size?: string;
}

interface ParagraphCSSProps {
  size?: string;
  bold?: boolean;
  uppercase?: boolean;
}

export const TitleCSS = styled.h1<TitleCSSProps>`
  --font-size: ${({ size }) => size || '3rem'};

  font-size: var(--font-size);
  line-height: calc(var(--font-size) - 0.5rem);

  margin-top: 1rem;
  font-weight: 300;

  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
      stroke: 0;
    `}
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}
  ${({ line }) =>
    line &&
    css`
      --line-width: 3px;

      display: flex;
      padding: 1rem 0;
      position: relative;
      padding-left: calc(var(--line-width) + 1rem);
      flex-direction: column;
      justify-content: center;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: var(--line-width);
        height: 100%;
        background-color: rgb(var(--color-text600));
      }
    `}

  @media (max-width: ${({ theme }) => theme.mediaQueries.maxMobile}) {
    --font-size: 2rem;
    line-height: var(--font-size);
  }
  @media (max-width: 320px) {
    word-break: break-all;
  }
`;

export const SubTitleCSS = styled.h2`
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 700;
  margin: 3rem 0;
`;

export const ParagraphCSS = styled.p<ParagraphCSSProps>`
  margin-bottom: 1rem;
  font-weight: 300;

  ${({ size }) =>
    size &&
    css`
      font-size: ${size};
      line-height: ${size};
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: 700;
    `}
  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  > .bold {
    font-weight: 700;
  }
`;
