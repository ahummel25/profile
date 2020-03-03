import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const NotFoundPage = (): JSX.Element => {
  let url = '';
  if (typeof window !== 'undefined') url = window.location.href;
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>404: Page not found.</h1>
          <p>
            You&apos;ve hit the void. <Link to="/"> Go back.</Link>
          </p>
          <p>Your current URL is: {url}</p>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default NotFoundPage;
