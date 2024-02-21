import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControlLabel,
  Switch,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#4bcb27" : "#4bcb27",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#4bcb27",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor:
      theme.palette.mode === "light" ? "rgba(255,255,255,.15)" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const ReuseableComponent = ({ data, inputs, updateInputValue }) => {
  const [isChecked, setIsChecked] = useState(data.label === "Enable");

  const handleSwitchChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    updateInputValue(data.name, checked); // Assuming you have this function to update input values
  };

  const handleInputChange = (inputKey, value) => {
    updateInputValue(data.id, inputKey, value);
  };

  return (
    <>
      <Box>
        <Typography
          sx={{
            fontSize: "1.3rem",
            marginBottom: "10px",
          }}
        >
          {data.title}
        </Typography>
      </Box>
      <Box>
        <Typography
          sx={{
            opacity: "0.6",
            marginBottom: "15px",
            whiteSpace: "pre-line",
          }}
        >
          {data.description}
        </Typography>
      </Box>
      <FormControlLabel
              control={<IOSSwitch 
                checked={isChecked} 
                onChange={handleSwitchChange} 
                name={data.name}  sx={{ m: 1 }} />}
              label="Enabled"
            />
      {/* <FormControlLabel
        control={
          <Switch
            checked={isChecked}
            onChange={handleSwitchChange}
            name={data.name}
            color="primary"
          />
        }
        label={data.title}
      /> */}

      <Box
        sx={{
          borderLeft: "2px solid #9aa1ff",
          marginLeft: "25px",
          paddingLeft: "25px",
          marginTop: "15px",
          marginBottom: "25px",
        }}
      >
        {data.inputValues.map((input) => (
          <Box key={input.key} sx={{ marginBottom: "15px" }}>
            <Box sx={{ fontSize: "1.3rem", marginBottom: "10px" }}>
              {input.label}
            </Box>
            <Box sx={{ opacity: "0.6", marginBottom: "15px" }}>
              {input.description}
            </Box>
            <TextField
              value={
                data.inputValues.find((i) => i.key === input.key)?.value || ""
              }
              onChange={(e) => handleInputChange(input.key, e.target.value)}
              sx={{
                opacity: isChecked ? "1" : "0.6",
                  pointerEvents: isChecked ? "auto" : "none",
                  color: "white",
                background: "#24232a",
                border: "none",
              }}
            />
          </Box>
        ))}
      </Box>
    </>

    // <Box
    //   sx={{
    //     alignItems: "center",
    //     marginBottom: "15px",
    //   }}
    // >
    //    {data.map(({ id, title, description, inputValues }, index) => (
    //     <Box
    //       key={id}
    //       sx={{
    //         marginBottom: "25px",
    //       }}
    //     >
    //       <Box>
    //         <Typography
    //           sx={{
    //             fontSize: "1.3rem",
    //             marginBottom: "10px",
    //           }}
    //         >
    //           {title}
    //         </Typography>
    //       </Box>
    //       <Box>
    //         <Typography
    //           sx={{
    //             opacity: "0.6",
    //             marginBottom: "15px",
    //             whiteSpace:"pre-line"
    //           }}
    //         >
    //           {description}
    //         </Typography>
    //       </Box>
    //       <Box>
    //         <FormControlLabel
    //           control={<IOSSwitch checked={state.payout} onChange={handleChange} name="payout"   sx={{ m: 1 }} />}
    //           label="Enabled"
    //         />
    //       </Box>
    //       <Box
    //         sx={{
    //           borderLeft: "2px solid #9aa1ff",
    //           marginLeft: "25px",
    //           paddingLeft: "25px",
    //           marginTop: "15px",
    //           marginBottom: "25px",
    //         }}
    //       >
    //         {inputValues.map((input, inputIndex) => (
    //         <Box
    //         key={inputIndex}
    //           sx={{
    //             marginBottom: "15px",
    //           }}
    //         >
    //           <Box
    //             sx={{
    //               fontSize: "1.3rem",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             {input.label}
    //           </Box>
    //           <Box
    //             sx={{
    //               opacity: "0.6",
    //               marginBottom: "15px",
    //             }}
    //           >
    //             {input.description}
    //           </Box>
    //           <TextField
    //              value={input.value}
    //              onChange={(e) => handleInputChange(inputIndex, e.target.value)}
    //             sx={{
    //               opacity: isEnabled ? "1" : "0.6",
    //               pointerEvents: isEnabled ? "auto" : "none",
    //               color: "white",
    //               background: "#24232a",
    //               border: "none",
    //             }}
    //           />
    //         </Box>
    //         ))}
    //         <Box
    //           sx={{
    //             marginBottom: 0,
    //           }}
    //         >
    //           <Box
    //             sx={{
    //               fontSize: "1.3rem",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             % that this module won't work
    //           </Box>
    //           <Box
    //             sx={{
    //               opacity: "0.6",
    //               marginBottom: "15px",
    //             }}
    //           >
    //             Use -1 to disable.
    //           </Box>
    //           <TextField
    //             value={inputValues[index]}
    //             onChange={(e) => handleInputChange(index, e.target.value)}

    //             sx={{
    //               opacity: isEnabled ? "1" : "0.6",
    //               pointerEvents: isEnabled ? "auto" : "none",
    //               color: "white",
    //               background: "#24232a",
    //               border: "none",
    //             }}
    //           />
    //         </Box>
    //       </Box>
    //     </Box>
    //   ))}
    // </Box>
  );
};

export default ReuseableComponent;
