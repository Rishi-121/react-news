import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { EmployeeDetails } from "./";

const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
  },
  toolbar: theme.mixins.toolbar,
  title: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const MainContent = () => {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant="h6">HighRadius</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>Welcome !!</Typography>
      </div>
      <EmployeeDetails />
    </main>
  );
};

export default MainContent;
