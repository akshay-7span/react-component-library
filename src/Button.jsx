
import MaterialButton from "@mui/material/Button";
const Button = (props) => {
  const {
    className,
    name,
    backgroundColor = "#E93E3A",
    fontColor = "#FFFFFF",
    onClick,
    width = "100%",
    ...otherProps
  } = props;

  const buttonStyle = {
    backgroundColor,
    color: fontColor,
    width,
  };

  return (
    <MaterialButton
      className={className}
      style={buttonStyle}
      onClick={onClick}
      {...otherProps}
    >
      {name}
    </MaterialButton>
  );
};
export default Button;
