import * as React from "react";
import { Link } from "gatsby";
import Page from "../components/Page";
import Profile from "../components/Profile";
import Container from "../components/Container";
import IndexLayout from "../layouts";

const IndexPage = (): JSX.Element => (
  <IndexLayout>
    <Page>
      <Container>
        <Profile />
        <Link to="/page-2/">Go to page 2</Link>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
