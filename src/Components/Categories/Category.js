import React from "react";
import "../Categories/Category.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Category = () => {
  return (
    <div className="body-container">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="140"
          image="/src/images/Frame-1.png"
          alt="green iguana"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BUS
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Details</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Category;
