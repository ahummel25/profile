import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import 'materialize-css/dist/css/materialize.min.css';

interface StaticQueryProps {
  site: {
    siteMetadata: {
      author: {
        name: string;
      };
      faUrl: string;
      iconUrl: string;
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
`;

const IndexLayout: FC<{}> = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              faUrl
              iconUrl
              title
              description
            }
          }
        }
      `}
      render={(data: StaticQueryProps): JSX.Element => (
        <Main>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description
              },
              { name: 'keywords', content: data.site.siteMetadata.keywords }
            ]}
            link={[
              {
                href: data.site.siteMetadata.iconUrl,
                rel: 'stylesheet'
              },
              {
                href: data.site.siteMetadata.faUrl,
                rel: 'stylesheet'
              }
            ]}
          />
          {children}
        </Main>
      )}
    />
  );
};

export default IndexLayout;
