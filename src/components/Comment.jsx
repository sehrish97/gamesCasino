import React from "react";
import commentData from "../_api/comment-data";
import { Avatar, Box, Typography } from "@mui/material";
import getAbbreviation from "../utils/getAbbreviation";
import formattedDate from "../utils/formattedDate";

const Comment = () => {
  const date = formattedDate(commentData[0].createdAt);
  const flip = false;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: flip ? "row-reverse" : "row",
        }}
      >
        <Avatar sx={{ textTransform: "capitalize" }}>{getAbbreviation("ab")}</Avatar>
        <Box display="flex" flexDirection="column">
          <Box>
            <Typography fontSize={12} sx={{ borderRadius: "0.75rem", px: 1, backgroundColor: "#F3F4F6" }}>
              {commentData[0].comment}
            </Typography>
          </Box>
          <Box
            sx={{
              px: 1,
              marginLeft: flip?"auto":0, // Push the inner Box to the right
            }}
          >
            <Typography fontSize={12}>
              you &#8226; <time>{date}</time>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Comment;
