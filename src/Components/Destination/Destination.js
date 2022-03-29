import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "../Destination/Destination.css";

const Destination = () => {
  return (
    <div className="destination-container">
      <div className="search-container">
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <h4>Pick From</h4>
            <TextField id="outlined-basic" label="From*" variant="outlined" />
            <h4>Pick To</h4>
            <TextField id="outlined-basic" label="To*" variant="outlined" />
          </CardContent>
          <CardActions>
            <Button variant="contained" size="small">
              Search
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="image-container">
        <img src="https://i.ibb.co/4dZDPDy/Map.png" alt="" />
      </div>
    </div>
  );
};

export default Destination;
