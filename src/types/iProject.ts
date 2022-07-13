import type { StaticImageData } from 'next/image';

export interface iProject {
  id: string;
  is: 'project';
  type: 'new' | 'delivered';
  description: string;
  locale: string;
  address: string | null;
  dimensions: string;
  gallery?: iProject['image'][];
  illustrative?: iProject['image'][];
  plans?: iProject['image'][];
  name: {
    aboveName: string | null;
    name: string;
  };
  dataSheets: {
    sheet: string;
    data: string | string[];
  }[];
  image: {
    id: string;
    is: 'gallery';
    url: string | StaticImageData;
    alt: string;
  };
  infos: {
    text: string;
    abbr: string | null;
  }[];
}
