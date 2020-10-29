import React from 'react';
import Image from './image';
import { useStaticQuery, graphql } from 'gatsby';
const CardData = [
  {
    id: '1',
    image: <Image />,
    gender: 'Documental',
    direction: 'Javier Matteucci',
    duration: '3 minutos',
    location: 'Rosario, Santa Fe',
  },
  {
    id: '2',
    image: '',
    gender: 'Documental',
    direction: 'Javier Matteucci',
    duration: '4 minutos',
    location: 'Rosario, Santa Fe',
  },
  {
    id: '3',
    image: '',
    gender: 'Documental',
    direction: 'Javier Matteucci',
    duration: '5 minutos',
    location: 'Rosario, Santa Fe',
  },
];

export default CardData;
