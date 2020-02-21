import React, { useRef, useState } from "react";
import { StaticQuery, graphql } from "gatsby";

import Page from "../components/Page";
import Profile from "../components/Profile";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import Header from "../components/Header";
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

const IndexPage = (): JSX.Element => {
  const [drawerWidth, setDrawerWidth] = useState<number>(0);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const refsToForward = {
    aboutRef
  };

  return (
    <StaticQuery
      query={graphql`
        query IndexPageQuery {
          site {
            siteMetadata {
              author {
                name
              }
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <IndexLayout refsToForward={refsToForward}>
          <LayoutMain paddingLeft={drawerWidth}>
            <Header
              title={data.site.siteMetadata.author.name}
              refsToForward={refsToForward}
              setDrawerWidth={setDrawerWidth}
            />
            <Page>
              <Profile refsToForward={refsToForward} />
            </Page>
          </LayoutMain>
        </IndexLayout>
      )}
    />
  );
};

export default IndexPage;
