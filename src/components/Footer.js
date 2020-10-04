import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import resume from "../assets/rafael_ikeda_resume.pdf";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {},
    "& .MuiSvgIcon-root": {
      fill: "#FFFFFF",
      "&:hover": {
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation with="auto" style={{ background: "#016BCB" }}>
      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0, minWidth: 0 }}
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/rafael-ikeda/"
        target="_data"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0, minWidth: 0 }}
        icon={<GitHubIcon />}
        href="https://github.com/ryikeda"
        target="_data"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0, minWidth: 0 }}
        icon={<MailIcon />}
        href="mailto:ryikeda@outlook.com"
        target="_data"
      />

      <BottomNavigationAction
        className={classes.root}
        style={{ padding: 0, minWidth: 0 }}
        icon={<AccountBoxIcon />}
        href={resume}
        target="_data"
      />
    </BottomNavigation>
  );
};

export default Footer;
