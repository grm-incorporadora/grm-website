import type { iProject } from 'types/iProject';
import imageMock from '../assets/img/image-mock.jpg';

export const projectsMock: iProject[] = [
  {
    id: '1',
    type: 'new',
    name: {
      name: 'Villa Alegre',
      aboveName: null,
    },
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Guarulhos/SP',
    address: null,
    dimensions: '47m² a 56m²',
    is: 'project',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    plans: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: 'Condomínio de Casas',
        abbr: null,
      },
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '2',
    type: 'new',
    name: {
      name: 'Parque Lázio',
      aboveName: null,
    },
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    is: 'project',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    illustrative: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '3',
    type: 'new',
    name: {
      name: 'Parque Lázio',
      aboveName: null,
    },
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    is: 'project',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '4',
    type: 'delivered',
    name: {
      name: 'Ecoville',
      aboveName: 'reserva',
    },
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    is: 'project',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '5',
    type: 'delivered',
    name: {
      name: 'Natture Clube',
      aboveName: 'condomínio',
    },
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    is: 'project',
    image: {
      id: '1',
      url: imageMock,
      is: 'gallery',
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '6',
    type: 'delivered',
    name: {
      name: 'Park',
      aboveName: 'Office',
    },
    is: 'project',
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '7',
    type: 'delivered',
    name: {
      name: 'Park',
      aboveName: 'Office',
    },
    is: 'project',
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
  {
    id: '8',
    type: 'delivered',
    name: {
      name: 'Park',
      aboveName: 'Office',
    },
    is: 'project',
    description:
      'Tranquilidade para morar, liberdade para viver! A oportunidade que você esperava em Limeira está batendo à sua porta. Infraestrutura, segurança, lazer completo de verdade! E tudo isso projetado para caber no seu bolso. Uma ótima oportunidade para morar ou investir.',
    locale: 'Limeira/SP',
    address: 'Rua Dorival Faveri, 425',
    dimensions: '51m²',
    image: {
      id: '1',
      is: 'gallery',
      url: imageMock,
      alt: 'mock',
    },
    gallery: [
      {
        id: '1',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
      {
        id: '2',
        url: imageMock,
        is: 'gallery',
        alt: 'mock',
      },
    ],
    dataSheets: [
      {
        sheet: 'Dormitórios',
        data: '2',
      },
      {
        sheet: 'Vagas',
        data: '2',
      },
      {
        sheet: 'Areas de lazer',
        data: [
          'Bicicletário',
          'Brinquedoteca',
          'churrascaria',
          'Fitness',
          'Playground',
        ],
      },
      {
        sheet: 'Area Privativa',
        data: '51m²',
      },
    ],
    infos: [
      {
        text: '2 Dormitórios',
        abbr: '2 Dorms.',
      },
    ],
  },
];
