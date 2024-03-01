import "./InfoCard.css";

function InfoCard(props) {
  // Component that will show one "card" or container which will show some information about me
  return (
    <div className="card">
      <p className="card-name">{props.cardName}</p>

      {props.children}
    </div>
  );
}

export default InfoCard;
