import React, { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";

import { useWindowDimensions } from "../hooks";
import { NavbarProps } from "../interfaces";
import { colors } from "../styles/variables";

type StyledLiProps = {
  color: string;
};

const DRAWER_WIDTH = 190;
const MAX_WINDOW_WIDTH = 992;

const DrawerContainer = styled(({ ...rest }) => <Drawer {...rest} />)`
  flex-shrink: 0;

  ul {
    margin: 0;
  }

  .name-title {
    h1 {
      color: ${colors.lightGreen};
      font-size: 30.45px;
      font-weight: 100;
      margin: 0 0 5px 0;
    }

    span {
      color: rgb(51, 51, 51);
      font-size: 14px;
    }

    background: ${colors.brandBackground};
    display: inline-block;
    min-height: 100px;
    text-align: left;
    padding: 30px 0 30px 30px;
    width: ${DRAWER_WIDTH}px;
  }
`;

const AppBarCustom = styled(({ ...rest }) => <AppBar {...rest} />)`
    display: block;
    text-align: center;
    font-size: 22px;

    .name-title > a {
      color: rgb(0, 128, 115);
      display: block;
      margin-bottom: -7px;
      padding-top: 10px;
    }

    span {
      font-size: 14px;
      display: block;
      padding-bottom: 3px;
    }
  }
  a > i {
    font-size: 35px;
    display: block;
    float: left;
	padding-top: 15px;
	margin-right: -30px;
  }

  .icon-green {
    color: rgb(0, 128, 115);
  }

  .tool-bar {
    display: block;
    text-align: center;
  }
`;

const DrawerLi = styled.li<StyledLiProps>`
  padding: 0;
  font-size: 14.5px;
  font-weight: 100;

  @keyframes hover-on {
    from {
      background-color: rgb(239, 340, 241);
    }
    to {
      background-color: rgb(250, 250, 250);
    }
  }

  &:hover {
    border-left: 3px solid ${props => props.color};
    animation: hover-on 0.75s;
    animation-fill-mode: forwards;
    will-change: opacity, transform;
  }

  a {
    color: rgb(51, 51, 51);
    font-weight: 300;
    display: flex;
    align-items: center;
    padding: 10px 0 8px 10px;
  }

  i {
    padding: 0 10px 0 5px;
    &.icon-aqua {
      color: ${props => props.color};
    }
    &.icon-dark-blue {
      color: ${props => props.color};
    }
    &.icon-teal {
      color: ${props => props.color};
    }
  }
`;

const navItems = [
  {
    text: "About",
    icon: { type: "person", iconClass: "icon-teal", color: "rgb(0, 128, 115)" }
  },
  {
    text: "Experience",
    icon: {
      type: "trending_up",
      iconClass: "icon-aqua",
      color: "rgb(0, 188, 212)"
    }
  },
  {
    text: "Projects",
    icon: {
      type: "web",
      iconClass: "icon-dark-blue",
      color: "rgb(63, 81, 181)"
    }
  }
];

const RenderFullDrawer: FC<{}> = (): JSX.Element => (
  <DrawerContainer variant="permanent" anchor="left">
    <div className="name-title">
      <a href="/">
        <h1>
          Andrew <br /> Hummel
        </h1>
        <span className="brown-text light">Full Stack Developer</span>
      </a>
    </div>
    <Divider />
    <NavBarLists />
  </DrawerContainer>
);

const RenderMobileDrawer: FC<{}> = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    event.preventDefault();
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <>
      <AppBarCustom color="inherit" position="fixed">
        <Toolbar className="tool-bar">
          <a href="/" onClick={toggleDrawer}>
            <i className={`material-icons icon-green`}>menu</i>
          </a>
          <div className="name-title">
            <a href="/">Andrew Hummel</a>
            <span className="brown-text light">Full Stack Developer</span>
          </div>
        </Toolbar>
      </AppBarCustom>
      <DrawerContainer anchor="left" open={open} onClose={toggleDrawer}>
        <div className="name-title">
          <a href="/">
            <h1>Andrew Hummel</h1>
            <span>Full Stack Developer</span>
          </a>
        </div>
        <Divider />
        <NavBarLists />
      </DrawerContainer>
    </>
  );
};

const NavBarLists: FC<{}> = (): JSX.Element => (
  <ul>
    {navItems.map(
      ({ text, icon: { type, iconClass, color } }, index): JSX.Element => (
        <DrawerLi key={index} color={color}>
          <a href="/">
            <i className={`small material-icons ${iconClass}`}>{type}</i>
            <span>{text}</span>
          </a>
        </DrawerLi>
      )
    )}
  </ul>
);

const Navbar: FC<NavbarProps> = ({ setDrawerWidth }): JSX.Element => {
  const { width } = useWindowDimensions();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  useEffect(() => {
    setDrawerWidth(DRAWER_WIDTH);
    setShowMobileNav(width < MAX_WINDOW_WIDTH);
  }, [setDrawerWidth, width]);

  return <>{showMobileNav ? <RenderMobileDrawer /> : <RenderFullDrawer />}</>;
};

export default Navbar;
