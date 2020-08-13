import React, { useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Switch, Link } from "react-router-dom";
import RecipeForm from "./RecipeForm";
import Salty from "./img/salty.jpg";
import Sweet from "./img/sweet.jpg";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const RecipeList = () => {
  const [list, setList] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const deleteRecipe = async (id) => {
    if (window.confirm("¿Seguro desea eliminar esta receta?"))
      await db.collection("recipeList").doc(id).delete();
    getRecipeList();
  };

  const getRecipeList = async () => {
    const querySnapshot = await db.collection("recipeList").get();
    const docs = [];
    querySnapshot.forEach((doc) => {
      docs.push({ ...doc.data(), id: doc.id });
    });
    setList(docs);
    console.log(docs);
  };

  useEffect(() => {
    getRecipeList();
  }, []);

  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  const classes = useStyles();

  return list.map((list) => (
    <div>
      <Container maxWidth="md">
        <Grid
          xs={12}
          spacing={2}
          direction="column"
          justify="flex-end"
          alignItems="stretch"
        >
          <Card key={list.id} className={classes.root} m={2}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={list.category == "Salado" ? Salty : Sweet}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {list.recipeName}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link to={`/recipe-form/${list.id}`}>
                <Button
                  variant="contained"
                  color="default"
                  endIcon={<EditIcon />}
                  onClick={() => setCurrentId(list.id)}
                >
                  Editar
                </Button>
              </Link>
              <Button
                variant="contained"
                color="secondary"
                endIcon={<DeleteIcon />}
                onClick={() => deleteRecipe(list.id)}
              >
                Eliminar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Container>
      {/* <div className="card-image">
            <img
              className="w-full"
              src={list.category == "Salado" ? Salty : Sweet}
              alt="Sunset in the mountains"
            ></img>

            <span className="card-title"></span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <span>#{list.category}</span>
          </div>
          <Link to={`/recipe-form/${list.id}`}>
            <button className="" onClick={() => setCurrentId(list.id)}>
              editar
            </button>
          </Link>
          <button className="" onClick={() => deleteRecipe(list.id)}>
            eliminar
          </button> */}
    </div>
  ));
};

export default RecipeList;
