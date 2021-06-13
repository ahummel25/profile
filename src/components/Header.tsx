import React, { FC } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Navbar from '../components/Navbar';
import { useGetImages } from '../hooks';
import { HeaderProps } from '../interfaces';

const Header: FC<HeaderProps> = ({ setDrawerWidth }): JSX.Element => {
  const { meImg } = useGetImages();

  return (
    <section
      id="header"
      className="section scrollspy"
      style={{ display: 'contents' }}
    >
      <Navbar setDrawerWidth={setDrawerWidth} />
      <GatsbyImage
        style={{ maxHeight: '100%' }}
        imgStyle={{ objectFit: 'contain' }}
        image={meImg.childImageSharp.gatsbyImageData}
        alt="Andrew Hummel Image"
      />
    </section>
  );
};

export default Header;
