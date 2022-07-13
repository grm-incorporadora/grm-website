import styled from 'styled-components';

export const ContainerCSS = styled.div`
  overflow: hidden;

  &.is-draggable {
    cursor: move;
    cursor: grab;
  }
  &.is-dragging {
    cursor: grabbing;
  }

  > .embla__container {
    display: flex;

    > .embla__slide {
      position: relative;
      display: flex;
      align-items: center;
      flex: 0 0 100%;
      width: 100%;
      height: 35rem;

      .slide__content {
        width: 100%;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }
  > .embla__dots {
    display: flex;
    justify-content: center;
  }
`;
