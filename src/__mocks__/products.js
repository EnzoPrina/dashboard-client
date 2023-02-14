import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'Marca Idraet',
    media: '/static/images/products/shampoo.png',
    title: 'Shampoo',
    totalDownloads: '2'
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'Filo de Navaja para Barberia',
    media: '/static/images/products/tijera.png',
    title: 'Filo Navaja',
    totalDownloads: '10'
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: 'Toallas Blancas, para peluquería',
    media: '/static/images/products/toalla.png',
    title: 'Toallas Blancas',
    totalDownloads: '8'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Cera de depilacion, metodo español',
    media: '/static/images/products/cera.png',
    title: 'Cera Depilacion',
    totalDownloads: '3'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Crema Hidratante corporal, Marca Idraet',
    media: '/static/images/products/crema.png',
    title: 'Crema Hidratante',
    totalDownloads: '3'
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Plancha de pelo, para peluquería',
    media: '/static/images/products/plancha.png',
    title: 'Plancha de Pelo',
    totalDownloads: '3'
  }
];
