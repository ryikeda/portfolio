import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import avatar from "../images/avatarSmall.jpg";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
} from "@material-ui/core";

import { ArrowBack, Home, Apps } from "@material-ui/icons";
import Footer from "./Footer";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 300,
    background: "#007CED",
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "#f4f4f4",
  },
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/",
  },
  {
    listIcon: <Apps />,
    listText: "Projects",
    listPath: "/projects",
  },
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false,
  });
  const togglerSlider = (slider, open) => () => {
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={togglerSlider(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Rafael Ikeda" />
      <Divider />
      <List>
        {menuItems.map((listItem, key) => (
          <ListItem button key={key} component={Link} to={listItem.listPath}>
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText
              className={classes.listItem}
              primary={listItem.listText}
            />
          </ListItem>
        ))}
        <ListItem>
          <ListItemIcon></ListItemIcon>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#070601" }}>
          <Toolbar>
            <IconButton onClick={togglerSlider("right", true)}>
              <ArrowBack style={{ color: "#007ced" }} />
            </IconButton>
            <Typography variant="h5">Portfolio</Typography>
            <MobilRightMenuSlider
              open={state.right}
              anchor="right"
              onClose={togglerSlider("right", false)}
            >
              {sideList("right")}
              <Footer />
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
