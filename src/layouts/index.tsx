import React, { FC } from 'react';
import { default as Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
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
      robotoFontsUrl: string;
    };
  };
}

const Main = styled.main`
  display: flex;
  flex-flow: column nowrap;
`;

const IndexLayout: FC<Record<string, JSX.Element | JSX.Element[]>> = ({
  children
}): JSX.Element => {
  const { site } = useStaticQuery<StaticQueryProps>(
    graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            faUrl
            iconUrl
            title
            description
            robotoFontsUrl
          }
        }
      }
    `
  );
  return (
    <Main>
      <Helmet
        htmlAttributes={{
          lang: 'en'
        }}
        title={site.siteMetadata.title}
        meta={[
          {
            name: 'description',
            content: site.siteMetadata.description
          },
          { name: 'keywords', content: site.siteMetadata.keywords }
        ]}
        link={[
          {
            href: site.siteMetadata.iconUrl,
            rel: 'stylesheet'
          },
          {
            href: site.siteMetadata.robotoFontsUrl,
            rel: 'stylesheet'
          },
          {
            href: site.siteMetadata.faUrl,
            rel: 'stylesheet'
          }
        ]}
      />
      {children}
    </Main>
  );
};

export default IndexLayout;
