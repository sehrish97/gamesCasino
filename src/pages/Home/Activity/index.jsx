import {
  Box,
  Typography,
  TableContainer,
  TableHead,
  Table,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";

const Activity = () => {
  return (
    <Box
      sx={{
        padding: "40px 50px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          fontSize: "3rem",
          marginBottom: "35px",
          display: "flex",
          alignItems: "center",
        }}
      >
        Activity
      </Box>
      <Box
        sx={{
          width: "100%",
          flex: 1,
          flexGrow: 1,
          flexShrink: 1,
          flexBasis: "0%",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                    User
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                    Message
                  </Typography>
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }}>
                  <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                    Time
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    ":hover": { cursor: "pointer" },
                    borderBottom: "none",
                  }}
                >
                  <Link to="/admin/users" style={{ display: "flex" }}>
                    <img src="/assets/you.png" width={30} alt="img" />
                    <Typography
                      sx={{
                        textIndent: "10px",
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      You{" "}
                    </Typography>
                  </Link>
                </TableCell>
                <TableCell
                  sx={{
                    ":hover": { cursor: "pointer" },
                    borderBottom: "none",
                  }}
                >
                  <Link to="/admin/users">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      {" "}
                      Viewing &quot;Activity&quot; page
                    </Typography>
                  </Link>
                </TableCell>

                <TableCell
                  sx={{
                    ":hover": { cursor: "pointer" },
                    borderBottom: "none",
                  }}
                >
                  <Link to="/admin/users">
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                      }}
                    >
                      1 second ago
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Activity;
