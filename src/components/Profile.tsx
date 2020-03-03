import React, { FC } from 'react';

import About from './About';
import Experience from './Experience';
import Contact from './Contact';

const Profile: FC<{}> = (): JSX.Element => (
  <>
    <About />
    <Experience />
    <Contact />
  </>
);

export default Profile;
