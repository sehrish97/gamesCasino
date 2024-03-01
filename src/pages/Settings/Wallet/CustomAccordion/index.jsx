import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const CustomAccordion = ({buttonName,description,icon,bordercolor,buttoncolor, children }) => {
  return (
    <Accordion
      sx={{
        boxShadow: `0 0 1px 2px ${bordercolor}`,
        background: "#1c1b20",
        marginBottom: "25px",
        borderRadius: "10px",
      }}
    >
      <AccordionSummary aria-controls="panel2-content" id="panel2-header">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "10px 15px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}
        >
            {icon}
          {/* <SettingsIcon
            fontSize="large"
            sx={{ color: "#9aa1ff !important", marginRight: "20px" }}
          /> */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                marginRight: "10px",
                background: buttoncolor,
                borderRadius: "6px",
                padding: "5px 8px",
                color: "#fff",
              }}
            >
              {buttonName}
            </Box>
            {description}
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
