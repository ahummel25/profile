import React, { useEffect, useState } from "react";
import { Global, css } from "@emotion/core";

import Page from "../components/Page";
import Profile from "../components/Profile";
import IndexLayout from "../layouts";
import Header from "../components/Header";
import LayoutMain from "../components/LayoutMain";

import normalize from "../styles/normalize";

const IndexPage = (): JSX.Element => {
  let M: any = null;
  if (typeof window !== "undefined") {
    M = require("materialize-css");
  }

  const [drawerWidth, setDrawerWidth] = useState<number>(0);

  useEffect(() => {
    if (M) {
      const elems = document.querySelectorAll(".scrollspy");
      M.ScrollSpy.init(elems);
    }
  }, [M]);

  return (
    <>
      <Global styles={() => css(normalize)} />
      <IndexLayout>
        <LayoutMain paddingLeft={drawerWidth}>
          <Page>
            <Header setDrawerWidth={setDrawerWidth} />
            <Profile />
          </Page>
        </LayoutMain>
      </IndexLayout>
    </>
  );
};

export default IndexPage;
