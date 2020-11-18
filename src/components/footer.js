import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => {
  const query = useStaticQuery(graphql`
    query {
      javier: file(relativePath: { eq: "javier-footer1.jpg" }) {
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
      javier2: file(relativePath: { eq: "javier-footer2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="bg-primary-500">
      <div className="place-content-center m-2 inline-flex flex-wrap w-full">
        <Img className="rounded-full w-32 float-left" fluid={query.javier.childImageSharp.fluid} />
        <button className="float-right rounded bg-accent-500 p-2 m-8 h-12 ">Contacto ✉</button>
        <div>
          <Img
            className="rounded-full w-24 h-24 float-left m-2"
            fluid={query.javier2.childImageSharp.fluid}
          />
          <p className="m-2 p-4">que ganas de meterle una piña a este gil...</p>
        </div>
      </div>
      <div className="place-content-center m-2 inline-flex flex-wrap w-full">
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
