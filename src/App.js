import "./App.css";
import Profile from "./profile/Profile";
import profilePic from "./profile/profilePic.jpg";
import CardMedia from "@mui/material/CardMedia";

function App() {
  const handleName = (name) => alert("My name is " + name);
  const bio =
    "Innovative software developer with solid educational background. Fast and efficient learner with practical experience and passion in software development.";
  return (
    <div className="App">
      <Profile
        fullName="Ghanem Gahgouh"
        bio={bio}
        profession="FullStackJs"
        myFunc={handleName}
      >
        <CardMedia
          component="img"
          height="240"
          image={profilePic}
          alt="profile picture"
        />
      </Profile>
    </div>
  );
}

export default App;
