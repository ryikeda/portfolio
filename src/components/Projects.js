import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Container } from "@material-ui/core";
import Navbar from "./Navbar";
import ProjectCard from "./ProjectCard";
import projectsContent from "./ProjectsContent";

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
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={3}
          className={classes.cardsContainer}
        >
          {projectsContent.map((proj, i) => {
            return (
              <Grid item xs={12} sm={6} key={i}>
                <ProjectCard content={proj} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
