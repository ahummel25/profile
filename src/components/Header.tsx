import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import Navbar from '../components/Navbar';
import { HeaderProps } from '../interfaces';

const Header: FC<HeaderProps> = ({ setDrawerWidth }): JSX.Element => (
  <section
    id="header"
    className="section scrollspy"
    style={{ display: 'contents' }}
  >
    <Navbar setDrawerWidth={setDrawerWidth} />
    <StaticImage
      src="../images/me_full.jpg"
      alt="Profile Shot"
      quality={100}
      layout="fullWidth"
    />
  </section>
);

export default Header;
