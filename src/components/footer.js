import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  const query = useStaticQuery(graphql`
    query {
      javier: file(relativePath: { eq: "jr.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      facebook: file(relativePath: { eq: "facebookverde.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      instagram: file(relativePath: { eq: "instagramverde.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      twitter: file(relativePath: { eq: "twitterverde.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className="bg-gray-600 place-content-center m-2 inline-flex flex-wrap w-full">
        <div className="w-1/3 rounded">
          <Img className="rounded-full" fluid={query.javier.childImageSharp.fluid} />
        </div>
        <div className="w-1/3 text-center place-self-center">
          <button className="border-2 rounded border-green-500 hover:bg-green-500 ">
            Contactame
          </button>
        </div>
      </div>
      <div className="bg-gray-600 place-content-center m-2 inline-flex flex-wrap w-full">
        <div className="w-16 m-2">
          <Img fluid={query.facebook.childImageSharp.fluid} />
        </div>
        <div className="w-16 m-2">
          <Img fluid={query.instagram.childImageSharp.fluid} />
        </div>
        <div className="w-16 m-2">
          <Img fluid={query.twitter.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
