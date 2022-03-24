import React from "react";
import "../Categories/Category.css";
import { useHistory } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";



const Category = ({vahicle}) => {

    console.log(vahicle);
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
        className="card-img"
          component="img"
          height="140"
          //   backgroundImage="/src/images/Frame.png"
          image={vahicle.imgUrl}
          alt="bike"
        />

        <CardContent>
          <Typography align="center" justify="center" gutterBottom variant="h5" component="div">
            {vahicle.title}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
};

export default Category;
