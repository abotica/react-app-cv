import "./SkillsInfoContent.css"

function SkillsInfoContent(props) {
  // Component that will show name of one skill that I possess and how skilled do I think I am in it
    const skillLevel = props.skillLevel;
    
    const myStyle = {
        backgroundColor: "#FEC089",
        width: String(skillLevel) + "%",
        height: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderRadius: "20px"
    }

    return (
      <div className="skills-info-content">
        <span className="required-field">{props.requiredField}</span>
        <div className="skill-level-container">
          <div className="skill-level-meter" style={myStyle}>
            {skillLevel}
          </div>
        </div>
      </div>
    );
}

export default SkillsInfoContent