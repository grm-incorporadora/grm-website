import {
  Carousel,
  CarouselBackground,
  CarouselItem,
} from '@components/Carousel';
import { SubTitleCSS } from '@stylesComponents/Texts';
import Image from 'next/image';
import { iProject } from 'types/iProject';

interface GalleryProps {
  title: string;
  images: iProject['gallery'];
}

export const Gallery = ({ images, title }: GalleryProps) => {
  return (
    <section>
      <SubTitleCSS>{title}</SubTitleCSS>

      <Carousel
        amountSlides={images!.length}
        aria-label={`slides das imagens: ${title}`}
      >
        {images!.map((image, i) => (
          <CarouselItem
            key={image.id}
            id={image.id}
            i={i}
            amountSlides={images!.length}
          >
            <CarouselBackground>
              <Image
                src={image.url}
                alt={image.alt}
                draggable={false}
                layout="fill"
                objectFit="cover"
                priority
              />
            </CarouselBackground>
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};
