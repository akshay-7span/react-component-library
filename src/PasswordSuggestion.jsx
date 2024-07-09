import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#FEF3E7",
    color: "rgba(0, 0, 0, 0.87)",
    width: "237px",
    height: "auto",
    fontSize: theme.typography.pxToRem(14),
    border: "1px solid #dadde9",
    borderRadius: "12px",
    boxShadow: theme.shadows[20],
    textAlign: "left",
  },
  [`& .dotted-line`]: {
    borderTop: "1.5px dashed rgba(0, 0, 0, 0.5)",
    opacity: 0.4,
    margin: "0px 0",
    padding: "4px 16px",
    borderSpacing: "10px 0",
  },
}));

const PasswordSuggestion = ({ suggestions }) => {
  return (
    <CustomTooltip
      title={
        <Box padding={"0.5rem 0.5rem 0.25rem 0.5rem"}>
          <Typography variant="body1" component="p" gutterBottom>
            Passwords must contain:
          </Typography>
          <Box className="dotted-line"></Box>
          <Typography variant="body2" component="ul" sx={{ textAlign: "left" }}>
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </Typography>
        </Box>
      }
      placement="right"
    >
      <IconButton>
        <InfoIcon sx={{ height: "18px", width: "18px" }} />
      </IconButton>
    </CustomTooltip>
  );
};
export default PasswordSuggestion;
