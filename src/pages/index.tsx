import React, { useEffect, useState } from 'react';
import { Global, css, SerializedStyles } from '@emotion/core';

import Page from '../components/Page';
import Profile from '../components/Profile';
import IndexLayout from '../layouts';
import Header from '../components/Header';
import LayoutMain from '../components/LayoutMain';
import normalize from '../styles/normalize';

const IndexPage = (): JSX.Element => {
  const [drawerWidth, setDrawerWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('materialize-css').then((M): void => {
        const scrollSpyElems = document.querySelectorAll('.scrollspy');
        M.ScrollSpy.init(scrollSpyElems);

        const toolTipElems = document.querySelectorAll('.tooltipped');
        M.Tooltip.init(toolTipElems);
      });
    }
  }, []);

  return (
    <>
      <Global styles={(): SerializedStyles => css(normalize)} />
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
