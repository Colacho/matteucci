import React from 'react';
//import Image from './image';
import { useStaticQuery, graphql } from 'gatsby';
const CardData = () => {
  const cardId = [
    {
      id: '1',
      image: <Img />,
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
  const data = useStaticQuery(graphql`
    query {
      placeholder: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      javier1: file(relativePath: { eq: "Javier2c.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      javier2: file(relativePath: { eq: "jr.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
};
export default CardData;
