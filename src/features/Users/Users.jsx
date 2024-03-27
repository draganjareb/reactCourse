import "./Users.css";

const Users = ({
  name,
  imageProfile,
  job,
  imageFb,
  imageSkype,
  imageTwitter,
  numOne,
  numThree,
  numTwo,
  textOne,
  textThree,
  textTwo,
  buttonText,
}) => {
  return (
    <>
      <div>
        <div className="divHolder">
          <div>
            <img src={imageProfile} alt={name} className="profileImg" />
            <h2>{name}</h2>
            <p>{job}</p>
          </div>
          <div>
            <img src={imageFb} alt={name} className="imagesLogo" />
            <img src={imageTwitter} alt={name} className="imagesLogo" />
            <img src={imageSkype} alt={name} className="imagesLogo" />
          </div>
          <button className="cardButton">{buttonText}</button>
          <div className="cardBottom">
            <div className="cardBottomInf">
              <h3>{numOne}</h3>
              <p>{textOne}</p>
            </div>
            <div className="cardBottomInf">
              <h3>{numTwo}</h3>
              <p>{textTwo}</p>
            </div>
            <div className="cardBottomInf">
              <h3>{numThree}</h3>
              <p>{textThree}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
