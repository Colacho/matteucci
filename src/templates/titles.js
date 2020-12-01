import React from 'react';
import PropTypes from 'prop-types';
import Layout from '@/components/layout';
import SEO from '@/components/seo';
import TitleCard from '@/components/title-card';
import { graphql, Link } from 'gatsby';
import cx from 'classnames';
import BlackFringe from '@/components/black-fringe';

const TestGrid = ({ data: { allTitleJson: titlesData = {} } = {}, pageContext: pagination }) => {
  console.log('pagination', pagination);

  return (
    <Layout>
      {/* TODO add SEO seo={pageContext?.seo} */}
      <SEO title={'Títulos'} />
      <BlackFringe title={'Ultimos títulos'}>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {titlesData.edges.map(({ node: titleData }) => (
            <TitleCard
              key={titleData.id}
              className="rounded border-2 border-primary-400 bg-primary-600"
              slug={titleData.fields.slug}
              image={titleData.image.childImageSharp.fluid}
              genre={titleData.dataSheet.genre}
              name={titleData.name}
              duration={titleData.dataSheet.duration}
              location={titleData.dataSheet.location}
            />
          ))}
        </div>
        {pagination?.numPages > 1 && (
          <div className="container mx-auto my-4">
            <ul className="flex justify-center">
              <li>
                <Link
                  className={cx('p-2', {
                    'pointer-events-none opacity-50': pagination.currentPage === 1,
                  })}
                  to={`/titles/${
                    pagination.currentPage - 1 !== 1 ? pagination.currentPage - 1 : ''
                  }`}
                >
                  {'<'}
                </Link>
              </li>
              {Array(pagination.numPages)
                .fill()
                .map((e, i) => (
                  <li key={i}>
                    <Link
                      className={cx('p-2', {
                        'pointer-events-none opacity-50': pagination.currentPage === i + 1,
                      })}
                      to={`/titles/${i + 1 !== 1 ? i + 1 : ''}`}
                    >
                      {i + 1}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  className={cx('p-2', {
                    'pointer-events-none opacity-50':
                      pagination.currentPage === pagination.numPages,
                  })}
                  to={
                    pagination.currentPage === pagination.numPages
                      ? `/titles/${pagination.currentPage + 1}`
                      : '/'
                  }
                >
                  {'>'}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </BlackFringe>
    </Layout>
  );
};

TestGrid.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
};

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    allTitleJson(sort: { fields: [date], order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          id
          name
          description
          fields {
            slug
          }
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          dataSheet {
            direction
            duration
            genre
            location
          }
        }
      }
    }
  }
`;

export default TestGrid;
