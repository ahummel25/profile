import React, { FC } from 'react';

import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Certifications from './Certifications';

const Profile: FC<Record<string, unknown>> = (): JSX.Element => (
  <>
    <About />
    <Experience />
    <Skills />
    <Certifications />
    <Contact />
  </>
);

export default Profile;
