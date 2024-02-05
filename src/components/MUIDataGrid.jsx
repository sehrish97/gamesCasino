import { Box, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const MUIDataGrid = ({ columns = [], rows = [] }) => {
  const [expandedRows, setExpandedRows] = useState(new Set());

  const handleRowExpand = (rowId) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(rowId)) {
      newExpandedRows.delete(rowId);
    } else {
      newExpandedRows.add(rowId);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <Box>
      <Paper>
        <DataGrid
          columns={columns}
          rows={rows}
          isRowExpandable={(params) => true}
          getRowId={(params) => params.row.id}
          expandedRows={expandedRows}
          onRowClick={(params) => handleRowExpand(params.row.id)}
          getDetailPanelContent={(params) => (
            <Box>
              {params.row.email}
            </Box>
          )}
        />
      </Paper>
    </Box>
  );
};

export default MUIDataGrid;
