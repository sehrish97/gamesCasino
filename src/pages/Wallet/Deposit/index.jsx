import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Typography,
  Pagination,
  TableFooter
} from "@mui/material";
import Title from "./Title";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
const Deposit = () => {
  return (
    <Box
      sx={{
        padding: "40px 50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title>Deposits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
              ID
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
              User
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
              Date
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
              Amount
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
              Status
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "16px" }}>
              Manage
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer" }}
            >
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                display: "flex",
                alignItems: "center",
                cursor:"pointer",
              }}
            >
              <img
                src="/assets/you.png"
                width="30px"
                height="30px"
                alt="img"
                style={{ marginRight: "10px" }}
              />
              example_user
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer", textWrap:"nowrap" }}
            >
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer",textWrap:"nowrap" }}
            >
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                color: "indianred",
                cursor:"pointer"
              }}
            >
              Pending
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                color: "indianred",
              }}
            >
              <Button
                sx={{
                  marginRight: "10px",
                  backgroundColor: "green",
                  borderRadius: "30px",
                  padding: "10px 15px",
                  ":hover": { backgroundColor: "green" },
                }}
              >
                <DoneIcon fontSize="small" />
              </Button>
              <Button
                sx={{
                  backgroundColor: "grey",
                  color: "black",
                  borderRadius: "30px",
                  padding: "10px 15px",
                  ":hover": { backgroundColor: "grey" },
                }}
              >
                <ClearIcon fontSize="small" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer" }}
            >
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                display: "flex",
                alignItems: "center",
                cursor:""
              }}
            >
              <img
                src="/assets/you.png"
                width="30px"
                height="30px"
                alt="img"
                style={{ marginRight: "10px" }}
              />
              example_user
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer",textWrap:"nowrap" }}
            >
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer" ,textWrap:"nowrap"}}
            >
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                color: "green",
                cursor:"pointer"
              }}
            >
              Paid
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer" }}
            >
              <Button
                sx={{
                  backgroundColor: "grey",
                  color: "black",
                  borderRadius: "30px",
                  padding: "5px 15px",
                  ":hover": { backgroundColor: "grey" },
                }}
              >
                <ClearIcon fontSize="small" />
                Cancel
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer" }}
            >
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                display: "flex",
                alignItems: "center",
                cursor:""
              }}
            >
              <img
                src="/assets/you.png"
                width="30px"
                height="30px"
                alt="img"
                style={{ marginRight: "10px" }}
              />
              example_user
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer",textWrap:"nowrap" }}
            >
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell
              sx={{ borderBottom: "none", fontSize: "16px", paddingY: "25px",cursor:"pointer",textWrap:"nowrap" }}
            >
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "16px",
                paddingY: "25px",
                color: "orange",
                cursor:"pointer"
              }}
            >
              Cancelled
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <Pagination  count={100}  
      variant="text"
      shape="rounded"
      boundaryCount={0}
      siblingCount={0} />
        </TableFooter>
      </Table>
    </Box>
  );
};

export default Deposit;
