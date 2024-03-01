import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";

const BoxComponent = ({ data }) => {
  const title = data.map((title) => title.title);
  console.log(title);
  return (
    <Box
      sx={{
        padding: "0px 10px 0px",
      }}
    >
      {data.map((data, index) => (
        <Box
          key={index}
          sx={{
            marginTop: "25px",
            marginBottom: "25px",
            display: "flex",
          }}
        >
          <Box>
            <Typography>{data.title}</Typography>
            <Typography
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                fontSize: "0.9em",
                opacity: 0.6,
                lineHeight: "1.8em",
              }}
            >
              {" "}
              {data.description1} <b>{data.blockText1}</b> {data.planeText1}
              {/* Register <b>self-managed</b> account on{" "} */}
              <Link
                to="#"
                style={{
                  opacity: 0.6,
                  transition: "opacity .3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = 0.6;
                }}
              >
                {data.linkurl1}
                {/* Coinbase Commerce{" "} */}
              </Link>
              {data.planeText2}
              <br />
              {data.description2}
              {/* . <br /> Generate your API key on */}
              <Link
                to="#"
                style={{
                  opacity: 0.6,
                  transition: "opacity .3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.opacity = 0.6;
                }}
              >
                {" "}
                {data.linkurl2}
                {/* this page */}
              </Link>
              {/* . */}
              {data.description3}
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: "auto",
            }}
          >
            {index === 0 && (
              <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
                  animationDuration: "550ms",
                  position: "absolute",
                  right: 0,
                  marginRight: "10px",
                  [`& .${circularProgressClasses.circle}`]: {
                    strokeLinecap: "round",
                  },
                }}
                size={20}
                thickness={4}
              />
            )}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default BoxComponent;
