import React, { useRef } from "react";
import Page from "../components/Page";
import Profile from "../components/Profile";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const IndexPage = (): JSX.Element => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const refsToForward = {
    aboutRef
  };
  return (
    <IndexLayout refsToForward={refsToForward}>
      <Page>
        <Container>
          <Profile refsToForward={refsToForward} />
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
