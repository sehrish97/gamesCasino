// File.jsx
import { Box, Typography } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import React, { useRef, useState } from "react";
import fileStructure from "../fileStructure.json";

const SizeStyledBox = ({ children, ...props }) => (
  <Box
    sx={{
      margin: "2rem",
      width: "8rem",
      height: "6rem",
      backgroundColor: "#24232A",
      display: "flex",
      flexDirection: "column", // Ensure items are stacked vertically
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: "1rem",
   
    }}
    {...props}
  >
    {children}
  </Box>
);

const File = ({ previousFolder, item }) => {
  const [internalFile, setInternalFile] = useState("");

  const refVal = useRef("");

  const itemsList = item?.map((elem, index) => {
    if (elem.type === "Folder") {
      return (
        <SizeStyledBox key={index} onDoubleClick={() => handleClick(elem)}>
          <FolderIcon sx={{ fontSize: "4rem" }} />
          <Typography>{elem.name}</Typography>
        </SizeStyledBox>
      );
    }
    if (elem.type === "Image") {
      return (
        <SizeStyledBox key={index} onDoubleClick={() => handleClick(elem)}>
          <img
            src={`/src/assets/${elem.thumbnail}`}
            width="40rem"
            height="40rem"
          />
          <Typography>
            {elem.name}.{elem.format}
          </Typography>
        </SizeStyledBox>
      );
    }
    if (elem.type === "Document") {
      return (
        <SizeStyledBox key={index} onDoubleClick={() => handleClick(elem)}>
          <InsertDriveFileIcon sx={{ fontSize: "4rem" }} />
          <Typography>
            {elem.name}.{elem.format}
          </Typography>
        </SizeStyledBox>
      );
    }
    return null; // Added for completeness
  });

  const handleClick = (elem) => {
    setInternalFile(elem);
  };

  const handlePreviousFolder = () => {
    let folders = previousFolder.split("/");
    let newName = "";
    let elem = fileStructure.files;
    for (let i = 1; i < folders.length - 1; i++) {
      newName += "/" + folders[i];
      elem = elem.filter((item) => item.name === folders[i])[0].children;
    }
    refVal.current = newName;
    var newInternalFile = {
      name: "",
      children: elem,
    };
    setInternalFile(newInternalFile);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {previousFolder && internalFile === "" && (
        <SizeStyledBox onDoubleClick={handlePreviousFolder}>
          <FolderIcon sx={{ fontSize: "4rem" }} />
          <Typography>...</Typography>
        </SizeStyledBox>
      )}
      {internalFile === "" ? (
        itemsList
      ) : internalFile.name !== "" ? (
        <File
          previousFolder={previousFolder + "/" + internalFile.name}
          item={internalFile.children}
        />
      ) : (
        <File previousFolder={refVal.current} item={internalFile.children} />
      )}
    </Box>
  );
};

export default File;
