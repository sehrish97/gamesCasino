import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  TableFooter,
} from "@mui/material";
import Title from "./Title";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import CreateModal from "./CreateModal";
import { useState } from "react";

const rows = [
  {
    code: "TEST1",
    amount: "0.00100000 USDT",
    usage: "56/100",
    expiration: "2/13/2025, 3:00:28 PM",
    created: "2/13/2024, 3:00:28 PM",
  },
];

const Deposits = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCreateModal = (event) => {
    setOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCreateModal = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Title>Promocodes- Deposit</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "none" , fontSize:"16px"}}>Code</TableCell>
            <TableCell sx={{ borderBottom: "none" , fontSize:"16px"}}>Amount</TableCell>
            <TableCell sx={{ borderBottom: "none" , fontSize:"16px"}}>Usage</TableCell>
            <TableCell sx={{ borderBottom: "none" , fontSize:"16px"}}>Expiration</TableCell>
            <TableCell sx={{ borderBottom: "none" , fontSize:"16px"}}>Created</TableCell>
            <TableCell sx={{ borderBottom: "none" , fontSize:"16px"}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.code}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.usage}</TableCell>
              <TableCell>{row.expiration}</TableCell>
              <TableCell>{row.created}</TableCell>
              <TableCell>
                <Button
                  sx={{
                    variant: "contained",
                    color: "white",
                    backgroundColor: "blue",
                    borderRadius: "30px",
                    paddingX: "10px",
                    ":hover": { backgroundColor: "blue" },
                  }}
                >
                  <CloseIcon sx={{ fontSize: "14px" }} />
                  <Typography
                    sx={{
                      textIndent: "5px",
                    }}
                  >
                    Delete
                  </Typography>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <Box display="flex" flexDirection="row" gap={1}>
              <Button
                onClick={handleCreateModal}
                sx={{
                  px: "1rem",
                  color: "white",
                  backgroundColor: "blue",
                  borderRadius: "1rem",
                  ":hover": { backgroundColor: "blue" },
                }}
              >
                <AddIcon sx={{ fontSize: "14px", mx: "0.3rem" }} />
                <Typography>Create</Typography>
              </Button>
              <Button
                sx={{
                  px: "1rem",
                  color: "#000",
                  backgroundColor: "#858587",
                  borderRadius: "1rem",
                  ":hover": { backgroundColor: "#858587" },
                }}
              >
                <CloseIcon sx={{ fontSize: "14px", mx: "0.3rem" }} />
                <Typography>Delete-expired</Typography>
              </Button>
            </Box>
          </TableRow>
        </TableFooter>
      </Table>
      <CreateModal
        open={open}
        onClose={handleCloseCreateModal}
        anchorEl={anchorEl}
      />
    </Box>
  );
};

export default Deposits;
