import React, { useState } from "react";
import { FormControl, TextField, Chip, Box } from "@mui/material";

const TagInput = ({ selected, setSelected, label, width }) => {
  const [newServiceInput, setNewServiceInput] = useState("");

  const handleNewServiceInputChange = (event) => {
    setNewServiceInput(event.target.value);
  };

  const handleAddNewService = () => {
    if (newServiceInput.trim() !== "") {
      setSelected([...selected, newServiceInput]);
      setNewServiceInput("");
    }
  };

  const handleRemoveService = (index) => {
    const updatedServices = [...selected];
    updatedServices.splice(index, 1);
    setSelected(updatedServices);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddNewService();
    } else if (e.key === "Backspace" && newServiceInput === "") {
      // Remove the last tag when Backspace is pressed with an empty input field
      if (selected.length > 0) {
        handleRemoveService(selected.length - 1);
      }
    }
  };


  return (
    <FormControl className={`w-${width} `}>
      <TextField
        size="small"
        label={label}
        placeholder={selected.length ? "" : "Other"}
        value={newServiceInput}
        onChange={handleNewServiceInputChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <Box display="flex" gap={1}>
              {selected.map((service, index) => (
                <Chip key={index} label={service} onDelete={() => handleRemoveService(index)} />
              ))}
            </Box>
          ),
          style: { borderRadius: "4rem" ,p:0},
        }}
      />
    </FormControl>
  );
};

export default TagInput;
