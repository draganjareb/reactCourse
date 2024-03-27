const Button = ({ buttonText, handleButtonClick, color }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
};

export default Button;
