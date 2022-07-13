import type { iProject } from 'types/iProject';
import Image from 'next/image';

import {
  HeroCarousel,
  HeroCarouselBackground,
  CarouselContent,
  CarouselItem,
} from '@components/Carousel';

import { ParagraphCSS, TitleCSS } from '@stylesComponents/Texts';
import { ContainerCSS } from './styles';

export interface MainProps {
  slides?: iProject[] | iProject['gallery'];
  children: React.ReactNode;
}

export const Main = ({ slides, children }: MainProps) => {
  return (
    <ContainerCSS id="main" tabIndex={0}>
      {slides && (
        <HeroCarousel amountSlides={slides.length}>
          {slides.map((slide, i) => (
            <CarouselItem i={i + 1} amountSlides={slides.length} key={slide.id}>
              {slide.is === 'project' && (
                <CarouselContent className="mx-w">
                  <span
                    style={{
                      textTransform: 'uppercase',
                    }}
                  >
                    {slide.type === 'new' ? 'lançamento' : 'entregues'}
                  </span>
                  <TitleCSS weight="700" style={{ textTransform: 'uppercase' }}>
                    {slide.name.name}
                  </TitleCSS>
                  <ParagraphCSS bold size="2.5rem">
                    {slide.infos.map((info, j, arr) => (
                      <p
                        key={Math.random()}
                        style={{
                          display: 'inline',
                          textTransform: 'uppercase',
                        }}
                      >
                        <span>
                          {info.abbr ? (
                            <abbr title={info.text} aria-label={info.text}>
                              {info.abbr}
                            </abbr>
                          ) : (
                            info.text
                          )}
                        </span>
                        {j + 1 < arr.length && <br />}
                      </p>
                    ))}
                    <span style={{ display: 'inline' }}>
                      {' '}
                      - {slide.dimensions}
                    </span>
                  </ParagraphCSS>
                  <span style={{ textTransform: 'uppercase' }}>
                    {slide.address && `${slide.address} - `} {slide.locale}
                  </span>
                </CarouselContent>
              )}

              <HeroCarouselBackground>
                <Image
                  src={slide.is === 'gallery' ? slide.url : slide.image.url}
                  alt={slide.is === 'gallery' ? slide.alt : slide.image.alt}
                  draggable={false}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </HeroCarouselBackground>
            </CarouselItem>
          ))}
        </HeroCarousel>
      )}
      {children}
    </ContainerCSS>
  );
};
