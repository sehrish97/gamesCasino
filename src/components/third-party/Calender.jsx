import React, { useRef, useState } from "react";
import "./calender.css";
import { Calendar } from "react-date-range";
import { Box, Button, IconButton,  Popover } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const initialDate = new Date();

const formatDateString = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const Calender = () => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <Box
      sx={{
        border: "1px solid #BDBDBD",
        maxWidth: "250px",
        borderRadius: "1rem",
      }}
    >
      <Box display="flex">
        <IconButton>
          <ArrowBackIosIcon sx={{ fontSize: "14px" }} />
        </IconButton>
        <IconButton>
          <CalendarMonthIcon sx={{ fontSize: "14px" }} />
        </IconButton>
        <Button
          onClick={() => setPopoverOpen(true)}
          ref={anchorRef}
          sx={{ fontSize: "14px" }}
        >
          {formatDateString(selectedDate)}
        </Button>

        <IconButton>
          <ArrowForwardIosIcon sx={{ fontSize: "14px" }} />
        </IconButton>
      </Box>

      <Popover
        open={popoverOpen}
        anchorEl={anchorRef.current}
        onClose={() => setPopoverOpen(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Calendar
          className="custom-calendar"
          date={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showMonthAndYearPickers={false} 
          showDateDisplay={false}
        />
      </Popover>
    </Box>
  );
};

export default Calender;
