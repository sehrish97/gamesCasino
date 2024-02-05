import React, { useRef, useState } from "react";
import { DateRange, DateRangePicker } from "react-date-range";
import { Box, Button, IconButton, Paper, Popover } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const initialDateRange = [
  {
    startDate: new Date(),
    endDate: null,
    key: "selection",
  },
];

const formatDateString = (date) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("en-US", options);
};

const DateRangeInput = () => {
  const [dateRange, setDateRange] = useState(initialDateRange);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const anchorRef = useRef(null);

  return (
    <Box sx={{ border: "1px solid #BDBDBD", maxWidth: "250px", borderRadius: "1rem" }}>
      <Box display="flex">
        <IconButton>
          <ArrowBackIosIcon sx={{ fontSize: "14px" }} />
        </IconButton>
        <IconButton>
          <CalendarMonthIcon sx={{ fontSize: "14px" }} />
        </IconButton>
        <Button onClick={() => setPopoverOpen(true)} ref={anchorRef} sx={{ fontSize: "14px" }}>
          {dateRange[0].endDate && dateRange[0].startDate !== dateRange[0].endDate
            ? formatDateString(dateRange[0].startDate) + " - " + formatDateString(dateRange[0].endDate)
            : formatDateString(dateRange[0].startDate)}
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
        <DateRangePicker
          months={2}
          direction="horizontal"
          onChange={(item) => setDateRange([item.selection])}
          ranges={dateRange}
          rangeColors={["#019dff"]}
          showDateDisplay={false}
        />
      </Popover>
    </Box>
  );
};

export default DateRangeInput;
