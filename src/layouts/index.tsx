import React, { FC } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "materialize-css/dist/css/materialize.min.css";
//import "materialize-css/dist/js/materialize.min.js";
//import "modern-normalize";
//import "../styles/normalize";

import { IndexLayoutProps } from "../interfaces";
import Header from "../components/Header";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";

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

const IndexLayout: FC<IndexLayoutProps> = ({ children, refsToForward }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            author {
              name
            }
            iconUrl
            title
            description
          }
        }
      }
    `}
    render={(data: StaticQueryProps) => (
      <LayoutRoot>
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
        <Header
          title={data.site.siteMetadata.author.name}
          refsToForward={refsToForward}
        />
        <LayoutMain>{children}</LayoutMain>
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
