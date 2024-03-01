import "./GeneralInfoContent.css";

function GeneralInfoContent(props) {
  // Component that will show one general information about me, e.g., my home address, contact,...
  return (
    <div className="general-info-content">
      <span className="required-field">{props.requiredField}</span>
      <span className="info-field">{props.infoField}</span>
    </div>
  );
}

export default GeneralInfoContent;
