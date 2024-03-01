import "./Profile.css";
import Image from "./assets/cv.jpeg";

function Profile() {
  // Component that will show my name and icon
  const name = "Andrija",
    surname = "Botica";

  return (
    <>
      <p className="name-surname">{name + " " + surname}</p>
      <div className="image-div">
        <img src={Image} alt="My Profile Picture"></img>
      </div>
    </>
  );
}

export default Profile;
