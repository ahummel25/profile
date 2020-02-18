import React, { FC } from "react";
import styled from "@emotion/styled";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";

import { NavbarProps } from "../interfaces";
import { colors } from "../styles/variables";

const drawerWidth = 190;

const NavbarContainer = styled.div`
  display: "flex";
`;

const DrawerContainer = styled(({ ...rest }) => <Drawer {...rest} />)`
  flex-shrink: 0;

  li {
    padding: 5px 10px 10px 10px;
    font-size: 14.5px;
    font-weight: 100;

    a {
      color: inherit;
      display: flex;
      align-items: center;
    }

    i {
      padding: 0 10px 0 5px;
      &.icon-aqua {
        color: rgb(0, 188, 212);
      }
      &.icon-green {
        color: rgb(0, 128, 115);
      }
    }
  }

  .name-title {
    h1 {
      color: ${colors.lightGreen};
      font-size: 30.45px;
      font-weight: 100;
      margin: 0 0 5px 0;
    }

    span {
      color: ${colors.lightBrown};
      font-size: 14px;
    }

    background: ${colors.brandBackground};
    display: inline-block;
    min-height: 100px;
    text-align: left;
    padding: 30px 0 30px 30px;
    width: ${drawerWidth}px;
  }
`;

const navItems = [
  {
    text: "About",
    icon: "person",
    iconColor: "icon-green"
  },
  {
    text: "Experience",
    icon: "trending_up",
    iconColor: "icon-aqua"
  },
  {
    text: "Projects",
    icon: "person",
    iconColor: "icon-blue"
  }
];

const Navbar: FC<NavbarProps> = (): JSX.Element => (
  <NavbarContainer>
    <CssBaseline />
    <DrawerContainer variant="permanent" anchor="left">
      <div className="name-title">
        <a href="/">
          <h1>
            Andrew <br /> Hummel
          </h1>
          <span>Full Stack Developer</span>
        </a>
      </div>
      <Divider />
      <ul>
        {navItems.map(
          ({ text, icon, iconColor }, index): JSX.Element => (
            <li key={index}>
              <a href="/">
                <i className={`small material-icons ${iconColor}`}>{icon}</i>
                <span>{text}</span>
              </a>
            </li>
          )
        )}
      </ul>
    </DrawerContainer>
  </NavbarContainer>
);

export default Navbar;
