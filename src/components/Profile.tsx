import React, { FC } from "react";
import styled from "@emotion/styled";
import { dimensions, colors, fonts } from "../styles/variables";

const StyledProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
  display: flex;
  justify-content: center;
`;

const StyledProfileBody = styled.p`
  font-family: ${fonts.helvetica};
  font-size: ${dimensions.fontSize.profileText}px;
  font-weight: ${dimensions.fontWeight.profileText};
  color: ${colors.profileText};
  text-transform: uppercase;
`;

const Profile: FC<{}> = (): JSX.Element => (
  <StyledProfileContainer>
    <StyledProfileBody>About Me</StyledProfileBody>
  </StyledProfileContainer>
);

export default Profile;
