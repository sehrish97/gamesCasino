import { Box } from "@mui/material";
import React from "react";
import DateRangeInput from "../../../../components/third-party/DataRangeInput";
import SearchBar from "./Search";
import MultiSearch from "./MultiSearch";

const TableSearch = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <DateRangeInput />
        <Box display="flex" gap={3}>
          <Box width={230}>
            <SearchBar />
          </Box>
          <Box>
            <MultiSearch />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TableSearch;
