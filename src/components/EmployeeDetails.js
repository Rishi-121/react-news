import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
  Chip,
  Button,
  Avatar,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.background.default,
    borderLeft: "7px solid #3F51B5",
  },
  bigAvatar: {
    margin: 30,
    width: 200,
    height: 200,
  },
  details: {
    padding: theme.spacing(4),
  },
  attribute: {
    marginBottom: theme.spacing(2),
  },
  skill: {
    margin: theme.spacing(0.5),
  },
  button: {
    margin: theme.spacing(2),
    float: "right",
  },
}));

const EmployeeDetails = () => {
  const classes = useStyles();

  let _employeeData = {
    name: "Hrushikesh Das",
    email: "dashrushikesh1121@gmail.com",
    contact: "+917606810227",
    skills: ["MongoDB", "Expressjs", "Reactjs", "Nodejs"],
  };

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item>
          <Avatar
            alt="Employee profile image"
            src="https://avatars.githubusercontent.com/u/62418363?v=4"
            className={classes.bigAvatar}
          />
        </Grid>
        <Grid item className={classes.details}>
          <Typography variant="body1" className={classes.attribute}>
            <b>Name:</b> {_employeeData.name}
          </Typography>
          <Typography variant="body1" className={classes.attribute}>
            <b>Email:</b> {_employeeData.email}
          </Typography>
          <Typography variant="body1" className={classes.attribute}>
            <b>Contact:</b> {_employeeData.contact}
          </Typography>
          <div>
            <Typography variant="body1" component="span">
              <b>Skills:</b>{" "}
            </Typography>
            {_employeeData.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                color="primary"
                className={classes.skill}
              />
            ))}
          </div>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" className={classes.button}>
        See more
      </Button>
    </Card>
  );
};

export default EmployeeDetails;
