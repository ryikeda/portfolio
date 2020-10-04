import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import yosokuImg from "../images/yosoku-app.jpg";
import netClone from "../images/netclone.jpg";
import hackOrSnooze from "../images/hack_or_snooze.jpg";
import jeopardy from "../images/jeopardy.jpg";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#FFFFF",
    height: "100%",
  },
  cardsContainer: {
    padding: "2rem",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "auto",
  },
}));

const Projects = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={3}
        className={classes.cardsContainer}
      >
        {/* Project 1 */}
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Yosoku-app"
                height="140"
                image={yosokuImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Real State Price Prediction
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This app uses machine learning models to predict real estate
                  prices in Japan.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Repo
                </Button>
                <Button size="small" color="primary">
                  Live Version
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 2 */}
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="netflix-clone"
                height="140"
                image={netClone}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Netflix UI Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This page was created with react. The data comes from
                  themoviedb.org API.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Repo
                </Button>
                <Button size="small" color="primary">
                  Live Version
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="hack_or_snooze"
                height="140"
                image={hackOrSnooze}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Hacker News Clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  In this app the user can create and account or login to share
                  links with other users.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Repo
                </Button>
                <Button size="small" color="primary">
                  Live Version
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 4*/}
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="jeopardy"
                height="140"
                image={jeopardy}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Jeopardy
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This app uses a external API to fetch data for the game.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Repo
                </Button>
                <Button size="small" color="primary">
                  Live Version
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
