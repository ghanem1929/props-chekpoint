import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PropTypes from "prop-types";

const Profile = ({ children, fullName, bio, profession, myFunc }) => {
  const name = fullName;
  const cardStyle = {
    maxWidth: 345,
    width: 350,
    margin: 10,
    borderRadius: 2,
  };
  return (
    <Card sx={cardStyle}>
      <CardActionArea>
        {children}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fullName}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            color="text.secondary"
          >
            {profession}
          </Typography>

          <Typography variant="body3" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => myFunc(name)}>
          alert
        </Button>
      </CardActions>
    </Card>
  );
};

Profile.defaultProps = {
  fullName: "Ghanem Gahgouh",
  bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure labore quasi sint eos, ut nemo hic qui facere nisi neque!",
  profession: "software engineer",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  myFunc: PropTypes.func.isRequired,
};

export default Profile;
