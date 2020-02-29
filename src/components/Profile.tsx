import React, { FC } from "react";

import About from "./About";
import Experience from "./Experience";

const Profile: FC<{}> = (): JSX.Element => (
  <>
    <About />
    <Experience />
  </>
);

export default Profile;
