import React, { FC } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import styled from "@emotion/styled";

import "materialize-css/dist/css/materialize.min.css";

import background from "../images/bg.png";
import { IndexLayoutProps } from "../interfaces";
import LayoutRoot from "../components/LayoutRoot";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      author: {
        name: string;
      };
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

const IndexLayout: FC<IndexLayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            iconUrl
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <Main>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: "description",
              content: data.site.siteMetadata.description
            },
            { name: "keywords", content: data.site.siteMetadata.keywords }
          ]}
          link={[
            {
              href: data.site.siteMetadata.iconUrl,
              rel: "stylesheet"
            }
          ]}
        />
        {children}
      </Main>
    )}
  />
);

export default IndexLayout;
