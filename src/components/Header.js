import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../images/avatarSmall.jpg";
import Typed from "react-typed";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#007ced",
  },
  subTitle: {
    color: "#FFFFFF",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vh",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Rafael Ikeda" />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Rafael Ikeda"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subTitle} variant="h5">
        <Typed
          strings={["Web Design", "Web Development", "MERN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
