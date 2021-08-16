import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Typography } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    padding: theme.spacing(1),
  },
  footer: {
    marginLeft: 20,
    fontSize: 17,
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Typography variant="h6" className={classes.footer}>
        &copy; Copyright {new Date().getFullYear()}
      </Typography>
    </AppBar>
  );
};

export default Footer;
