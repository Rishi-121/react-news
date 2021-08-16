import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Grid,
} from "@material-ui/core";
import { AccountCircle, ExitToApp } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: "linear-gradient(#cfd9df,#e2ebf0)",
    color: "grey",
  },
  bigAvatar: {
    margin: 30,
    width: 100,
    height: 100,
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Drawer
      open={true}
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Avatar
          // src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
          src="https://avatars.githubusercontent.com/u/62418363?v=4"
          className={classes.bigAvatar}
        />
      </Grid>
      <List>
        {["Profile", "Sign Out"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <AccountCircle /> : <ExitToApp />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;
