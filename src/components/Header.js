import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  Typography,
  IconButton,
  Button,
  Divider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";
import { handlerClicked } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          {props.title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
        {props.sections.map((section, index) => (
          <Button
            color="inherit"
            key={index}
            className={classes.toolbarLink}
            onClick={() => props.handlerClicked(section, 1)}
          >
            {section}
          </Button>
        ))}
      </Toolbar>
      <Divider />
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerClicked: (section, page) => dispatch(handlerClicked(section, page)),
  };
};

export default connect(null, mapDispatchToProps)(Header);
