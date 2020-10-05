import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    border: "3px solid #FFFFFF",
  },
}));

const ProjectCard = ({
  content: { name, title, description, git, live, image },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {live && (
          <Button href={live} size="small" color="primary" target="_blank">
            Live Version
          </Button>
        )}
        <Button href={git} size="small" color="primary" target="_blank">
          Git Repo
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
