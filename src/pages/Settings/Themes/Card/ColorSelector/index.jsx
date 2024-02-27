import { Box } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import iro from "@jaames/iro";

const ColorSelector = () => {
  const [pickedColor, setPickedColor] = useState("#ffffff"); // Default color
  const colorPickerRef = useRef(null); // Ref to store color picker instance

  // Function to handle color change
  const handleColorChange = (color) => {
    // Extract the color and opacity separately
    const colorValue = color.hexString;
    const opacityValue = Math.round(color.alpha * 255)
      .toString(16)
      .padStart(2, "0"); // Convert opacity to hexadecimal
    // Combine the color and opacity into a single string
    const pickedColorValue = `${colorValue}${opacityValue}`;
    setPickedColor(pickedColorValue);
  };

  // Function to initialize color picker
  const initColorPicker = () => {
    const boxPicker = document.getElementById("boxPicker");
    if (boxPicker && !colorPickerRef.current) {
      const colorPicker = new iro.ColorPicker(boxPicker, {
        width: 250,
        color: "#ff0000",
        borderWidth: 1,
        borderColor: "#fff",
        layout: [
          {
            component: iro.ui.Box,
          },
          {
            component: iro.ui.Slider,
            options: {
              id: "hue-slider",
              sliderType: "hue",
            },
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "alpha",
            },
          },
          {
            component: iro.ui.Slider,
            options: {
              sliderType: "value",
            },
          },
        ],
      });

      // Event listener for color change
      colorPicker.on("color:change", (color) => {
        handleColorChange(color);
      });

      colorPickerRef.current = colorPicker; // Store color picker instance in ref
    }
  };

  // Initialize color picker when component mounts
  useEffect(() => {
    initColorPicker();
  }, []);

  return (
    <Box>
      {/* Container for color picker */}
      <div id="boxPicker"></div>
    </Box>
  );
};

export default ColorSelector;
