import "./CV.css";
import GeneralInfoContent from "./GeneralInfoContent";
import InfoCard from "./InfoCard";
import Profile from "./Profile";
import SkillsInfoContent from "./SkillsInfoContent";

function CV() {
  /* Required fields are entered to describe information entered in the info field, e.g., required field "address" describes info field where information for home address will be entered */
  return (
    <div className="main-container">
      <div className="profile-container">
        <Profile />
      </div>
      <div className="information-container">
      {/* General information about me */}
        <InfoCard cardName={"General Info"}>
            <GeneralInfoContent requiredField={"Date Of Birth:"} infoField={"16 Jan 2003"}/>
            <GeneralInfoContent requiredField={"Address:"} infoField={"Put sv. Antuna 14"}/>
            <GeneralInfoContent requiredField={"Contact:"} infoField={"+385 99 4354 025"}/>
        </InfoCard>
      {/* Information about my skills */}
        <InfoCard cardName={"Skills"}>
            <SkillsInfoContent requiredField={"JavaScript:"} skillLevel={75}/>
            <SkillsInfoContent requiredField={"Unity:"} skillLevel={60} />
            <SkillsInfoContent requiredField={"Communication:"} skillLevel={95} />
        </InfoCard>
      </div>
    </div>
  );
}

export default CV;
