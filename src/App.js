import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Header, NewsCard, Footer } from "./components";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    padding: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  cardGrid: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const sections = [
  "Business",
  "Entertainment",
  "General",
  "Health",
  "Science",
  "Sports",
  "Technology",
];

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header title="React News" sections={sections} />
      <NewsCard />
      <Footer />
    </div>
  );
};

export default App;
