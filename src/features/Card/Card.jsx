import "./Card.css";

const Card = ({ text, buttonText }) => {
  return (
    <div className="mainDiv">
      <p>{text}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default Card;
