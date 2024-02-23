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
  TableFooter,
} from "@mui/material";
import Title from "./Title";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Withdraws = () => {
  return (
    <Box
      sx={{
        padding: "40px 50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title>Withdraws</Title>
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
              Payment Method
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
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                display: "flex",
                cursor:"pointer"
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
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              Example
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                color: "indianred",
                cursor:"pointer"
              }}
            >
              Pending
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                color: "indianred",
                display: "flex",
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
                  marginRight:"10px",
                  backgroundColor: "grey",
                  color: "black",
                  borderRadius: "30px",
                  padding: "10px 15px",
                  ":hover": { backgroundColor: "grey" },
                }}
              >
                <ClearIcon fontSize="small" />
              </Button>
              <Button
                sx={{
                  
                  backgroundColor: "grey",
                  color: "black",
                  borderRadius: "30px",
                  padding: "5px 15px",
                  ":hover": { backgroundColor: "grey" },
                }}
              >
                <AccessTimeIcon fontSize="small" sx={{paddingRight:"5px"}}/>
                Ignore
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                cursor:"pointer"
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
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              Example
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                color: "green",
                cursor:"pointer"
              }}
            >
              Paid
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                cursor:"pointer"
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
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" ,textWrap:"nowrap"}}>
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              Example
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer",textWrap:"nowrap" }}>
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                paddingY: "0px",
                color: "orange",
                textWrap:"nowrap",
                cursor:"pointer"

              }}
            >
              Declined (Reason: Example)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                paddingY: "0px",
                display: "flex",
                alignItems: "center",
                cursor:"pointer"
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
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" ,textWrap:"nowrap"}}>
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              Example
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer",textWrap:"nowrap" }}>
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                paddingY: "0px",
                color: "cornflowerblue",
                cursor:"pointer"
              }}
            >
              Ignored
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "12px" }}>
              <Button
                sx={{
                  backgroundColor: "grey",
                  color: "black",
                  borderRadius: "30px",
                  padding: "5  px 10px",
                  ":hover": { backgroundColor: "grey" },
                }}
              >
                <AccessTimeIcon fontSize="small" sx={{ marginRight: "5px" }} />
                Stop ignoring
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              example
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                paddingY: "0px",
                display: "flex",
                alignItems: "center",
                cursor:"pointer"
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
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" ,textWrap:"nowrap"}}>
              2/22/2024, 4:50:54 AM
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer" }}>
              Example
            </TableCell>
            <TableCell sx={{ borderBottom: "none", fontSize: "14px",cursor:"pointer",textWrap:"nowrap" }}>
              0.1 native_btc
            </TableCell>
            <TableCell
              sx={{
                borderBottom: "none",
                fontSize: "14px",
                paddingY: "0px",
                color: "white",
                textWrap:"nowrap",
                cursor:"pointer"
              }}
            >
              Cancelled (by user)
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box>
      <Pagination
            count={100}
            variant="text"
            shape="rounded"
            boundaryCount={0}
            siblingCount={0}
          />
      </Box>
    </Box>
  );
};

export default Withdraws;
