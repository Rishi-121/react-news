import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { HeaderMenu, Navbar, MainContent, Footer } from "../components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeaderMenu />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
