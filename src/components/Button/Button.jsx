import "./Button.scss";

const Button = ({ buttonText, classText }) => {
  return <button className={classText}>{buttonText}</button>;
};

export default Button;
