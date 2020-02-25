import React, { useRef, useState } from "react";

import Page from "../components/Page";
import Profile from "../components/Profile";
import IndexLayout from "../layouts";
import Header from "../components/Header";
import LayoutMain from "../components/LayoutMain";
import { handleScrollTo } from "../utils";

/*interface StaticQueryProps {
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
}*/

const IndexPage = (): JSX.Element => {
  const [drawerWidth, setDrawerWidth] = useState<number>(0);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const refsToForward = {
    about: {
      ref: aboutRef,
      onClickHandler: () => {
        handleScrollTo(aboutRef);
      }
    },
    experience: {
      ref: experienceRef,
      onClickHandler: () => {
        handleScrollTo(experienceRef);
      }
    },
    projects: {
      ref: projectsRef,
      onClickHandler: () => {
        handleScrollTo(projectsRef);
      }
    }
  };

  return (
    <IndexLayout>
      <LayoutMain paddingLeft={drawerWidth}>
        <Header refsToForward={refsToForward} setDrawerWidth={setDrawerWidth} />
        <Page>
          <Profile refsToForward={refsToForward} />
        </Page>
      </LayoutMain>
    </IndexLayout>
  );
};

export default IndexPage;
