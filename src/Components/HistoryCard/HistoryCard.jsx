import React from "react";

import { Grid, CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const HistoryCard = ({ img, title, location, timeLeft, currBid }) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea>
        <CardMedia component="img" height="240" image={img} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="#03045e">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Grid container direction="row" alignItems="center">
              <LocationOnIcon sx={{ fontSize: "large", mr: 1 }} />
              {location}
            </Grid>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <Grid container direction="row" alignItems="center">
              <AttachMoneyIcon sx={{ fontSize: "large", mr: 1 }} />
              Current Bid: {currBid}
            </Grid>
          </Typography>
        </CardContent>
        <CardActions sx={{ mt: -2 }}>
          <Button
            disabled
            size="small"
            sx={{
              color: "#0078a9",
              "&:disabled": {
                color: "#0078a9",
              },
            }}
          >
            {timeLeft}
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default HistoryCard;
