import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Items, ItemType } from "./items";
import { ProjectDetailsModal } from "./modal";

const useStyles = makeStyles({
  root: {},
  cardHolder: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 140,
  },
});

export const Project = () => {
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ItemType>({
    description: "",
    image: [""],
    link: "",
    name: "",
  });

  return (
    <>
      <Navbar />

      <Grid container className={classes.root}>
        {Items.map((project, index) => (
          <Grid item sm={12} xs={12} md={6} lg={4} key={index}>
            <Card className={classes.cardHolder}>
              <CardActionArea>
                <CardMedia className={classes.media} image={project.image[0]} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description.substring(0, 35)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ flexDirection: "row-reverse" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => {
                    setModalOpen(true);
                    setModalData(project);
                  }}
                  startIcon={<InfoOutlinedIcon />}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ProjectDetailsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalData={modalData}
      />
    </>
  );
};
