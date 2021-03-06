import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import Page from '../components/Page';
import Container from '../components/Container';
import IndexLayout from '../layouts';

const NotFoundPage = (): JSX.Element => {
  const [url, setUrl] = useState<string>('');

  useEffect((): void => {
    if (typeof window !== 'undefined') setUrl(window.location.href);
  }, []);
  return (
    <IndexLayout>
      <Page>
        <Container>
          <h1>404: Page not found.</h1>
          <p>
            You&#39;ve hit the void. <Link to="/"> Go back.</Link>
          </p>
          <p>Your current URL is: {url}</p>
        </Container>
      </Page>
    </IndexLayout>
  );
};

export default NotFoundPage;
