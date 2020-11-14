import React from 'react';
import Img from 'gatsby-image';

import { graphql, StaticQuery } from 'gatsby';

const VideoGridd = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allTitleJson {
            edges {
              node {
                image {
                  childImageSharp {
                    fluid(maxWidth: 300) {
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
                id
              }
            }
          }
        }
      `}
      render={data.allTitleJson.edge.map((node) => (
        <div key={node.id}>
          <p>{node.dataHeet.direction}</p>
        </div>
      ))}
    />
  );
};

export default VideoGridd;

//   return (
//     <div className="bg-gray-300 p-4">
//       <div className="w-full">
//         {videos.map((i) => (
//           <div
//             className="inline-flex flex-wrap border-solid border-2 rounded p-2 m-2 shadow-lg m-4"
//             key={i.id}
//           >
//             <VideoCard
//               videoId={i.id}
//               image={i.image}
//               videoSrcURL={i.videoSrcURL}
//               genre={i.genre}
//               direction={i.direction}
//               duration={i.duration}
//               location={i.location}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
