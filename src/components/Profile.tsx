import React, { FC } from 'react';

import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const Profile: FC<{}> = (): JSX.Element => (
  <>
    <About />
    <Experience />
    <Skills />
    <Contact />
  </>
);

export default Profile;
