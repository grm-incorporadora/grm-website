import styled from 'styled-components';
import { AboutCSS } from './About/styles';
import { ContactCSS } from './Contact/styles';
import { LandCSS } from './Land/styles';
import { ProjectCSS } from './Project/styles';

export const ContainerCSS = styled.main`
  --section-margin: 3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  > section {
    padding-top: var(--section-margin);
  }

  ${AboutCSS}
  ${ContactCSS}
  ${LandCSS}
  ${ProjectCSS}
`;
