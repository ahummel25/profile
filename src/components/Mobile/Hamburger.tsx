import React, { FC, useState } from "react";
import styled from "@emotion/styled";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

import { DropDownListProps } from "../../interfaces";
import { colors, dimensions, fonts } from "../../styles/variables";

const useStyles = makeStyles<Theme, {}>({
  drawerRoot: {
    "& > div:first-child": {
      opacity: "0 !important"
    }
  },
  drawerModal: {
    zIndex: "0 !important" as any
  },
  drawerAnchorTop: {
    top: 60
  },
  listRoot: {
    backgroundColor: colors.darkBlue,
    color: colors.white,
    textTransform: "uppercase",
    position: "relative"
  },
  listItemRoot: {
    position: "relative",
    "& > span:first-child": {
      fontFamily: fonts.helvetica,
      fontSize: dimensions.fontSize.regular + 4,
      fontWeight: 700
    }
  },
  menuIconButtonRoot: {
    color: colors.white,
    paddingRight: 0,
    "& > span:first-child > svg:first-child": {
      height: "1.5em",
      width: "1.5em"
    }
  }
});

const HamburgerWrapper = styled.div`
  @media screen and (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    margin-right: 0;
    float: right;
  }
  @media screen and (min-width: 376px) and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 0;
    float: right;
  }
  @media screen and (min-width: 481px) {
    display: none;
  }
`;

const DropDownList: FC<DropDownListProps> = ({
  listRoot,
  listItemRoot
}): JSX.Element => (
  <List
    classes={{
      root: listRoot
    }}
  >
    {["About Me"].map(
      (text: string): JSX.Element => (
        <ListItem button key={text}>
          <ListItemText
            classes={{
              root: listItemRoot
            }}
            primary={text}
          />
        </ListItem>
      )
    )}
  </List>
);

const Hamburger: FC<{}> = (): JSX.Element => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <HamburgerWrapper>
      <IconButton
        classes={{
          root: classes.menuIconButtonRoot
        }}
        color="primary"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Drawer
        anchor="top"
        classes={{
          root: classes.drawerRoot,
          paperAnchorTop: classes.drawerAnchorTop,
          modal: classes.drawerModal
        }}
        open={isOpen}
        onClose={(): void => {
          setIsOpen(false);
        }}
      >
        <DropDownList
          listRoot={classes.listRoot}
          listItemRoot={classes.listItemRoot}
        />
      </Drawer>
    </HamburgerWrapper>
  );
};

export default Hamburger;
