import styled from 'styled-components';

export const ContentCSS = styled.div`
  --card-hidden-height: 50%;
  overflow: hidden;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out 0.3s;

  > div {
    display: flex;
  }
`;
