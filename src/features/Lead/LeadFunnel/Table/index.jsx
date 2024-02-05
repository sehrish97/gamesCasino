import { CopyAll, Email, ExpandLess, ExpandMore, Facebook, Inbox, Instagram, LinkedIn, Mail, Message, PhoneAndroid } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Collapse,
  FormControl,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Modal,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { Fragment, useReducer, useState } from "react";
// import DateRangeInput from "../../../components/third-party/DataRangeInput";
import formattedTimestamp from "../../../../utils/formattedTimestamp";
import formattedPhone from "../../../../utils/formattedPhone";
import country from "../../../../_api/country";
import avatar from "../../../../assets/avatar.jpg";
import CopyToClipboard from "react-copy-to-clipboard";
import SendIcon from "@mui/icons-material/Send";
import ForumIcon from "@mui/icons-material/Forum";
import Comment from "../../../../components/Comment";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Cancel";

const columns = [
  {
    name: "Name",
    label: "Name",
    width: "150px",
  },
  {
    name: "Phone",
    label: "Phone",
    width: "150px",
  },
  {
    name: "Services",
    label: "Services",
    width: "150px",
  },
  {
    name: "Email",
    label: "Email",
    width: "150px",
  },
  {
    name: "Status",
    label: "Status",
    width: "150px",
  },
];

const rows = [
  {
    id: 1,
    location: {
      country: "United States",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [
      { phone: 1234567890, phoneType: "primary", isoCode: "US" },
      { phone: 1234567999, phoneType: "secondary", isoCode: "US" },
    ],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 2,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 3,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 4,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 5,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 6,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 7,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 8,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
  {
    id: 9,
    location: {
      country: "Canada",
      abbreviation: "CST",
      state: "Alabama",
      currency: "USD",
    },
    name: "John Doe",
    leadType: "Individual",
    phone: [{ phone: 1234567890, phoneType: "primary", isoCode: "US" }],
    email: [{ email: "johndoe@email.com", emailType: "primary" }],
    leadIndustry: "fashion industry",
    leadBrief:
      "We have many websites we need to maintain regularly, we are looking for a dedicated consultant to improve our existing website, changes in design, add or remove content, and solve problems concerning web development, seo optimization, website maintenance, and digital marketing.",
    leadBudget: 2000,
    services: ["logo design", "website"],
    leadInstagram: "www.insta.com",
    leadFb: "www.fb.com",
    createdAt: "2023-10-20T17:59:23.741+00:00",
  },
];

const initialState = {
  leadStatus: "select status",
  selectedPhone:"",
  comment: "",
};

const LeadFunnelTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openEmail, setOpenEmail] = useState();
  const [openPhone, setOpenPhone] = useState();
  const [openRow, setOpenRow] = useState(null);
  const [isCopyPhoneSuccess, setIsCopyPhoneSuccess] = useState(false);
  const [isCopyEmailSuccess, setIsCopyEmailSuccess] = useState(false);

  const reducer = (state, action) => ({ ...state, ...action });
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleEmailClick = () => setOpenEmail(!openEmail);
  const handlePhoneClick = () => setOpenPhone(!openPhone);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRowClick = (rowId) => {
    if (rowId === openRow) {
      // If the same row is clicked again, close it.
      setOpenRow(null);
    } else {
      // Open the clicked row and close the previously opened row.
      setOpenRow(rowId);
      setOpenEmail(false);
      setOpenPhone(false);
    }
  };

  const handleCopyPhoneSuccess = () => {
    setIsCopyPhoneSuccess(true);
    setTimeout(() => {
      setIsCopyPhoneSuccess(false);
    }, 2000);
  };

  const handleCopyEmailSuccess = () => {
    setIsCopyEmailSuccess(true);
    setTimeout(() => {
      setIsCopyEmailSuccess(false);
    }, 2000);
  };

  const [toggleStatusChangeModal, setToggleStatusChangeModal] = useState(false);
  const [toggleActivityModal, setToggleActivityModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const handleStatusSelect = (rowId) => {
    setToggleStatusChangeModal(!toggleStatusChangeModal);
  };
  const handleActivity = () => {
    setToggleActivityModal(!toggleActivityModal);
  };
  const toggleStatusChangeClose = () => setToggleStatusChangeModal(false);
  const toggleActivityClose = () => setToggleActivityModal(false);
  const toggleEditable = () => setIsEditable((prev) => !prev);

  function StatusChangeModal() {
    return (
      <Modal open={toggleStatusChangeModal} onClose={toggleStatusChangeClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: "0.75rem",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Box>
            <Typography id="modal-modal-title" color="primary" variant="h5" component="h2" sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: 1 }}>
              Lead Status Change
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 2,
              mb: 4,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TextField fullWidth id="standard-basic" label="add comment" variant="standard" value={state.comment} onChange={(e) => dispatch({ comment: e.target.value })} />
          </Box>
        </Box>
      </Modal>
    );
  }

  function ActivityModal() {
    return (
      <Modal open={toggleActivityModal} onClose={toggleActivityClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            borderRadius: "0.75rem",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Box>
            <Typography id="modal-modal-title" color="primary" variant="h5" component="h2" sx={{ textAlign: "center", textTransform: "uppercase", marginBottom: 1 }}>
              Lead Activities
            </Typography>
          </Box>
          {/* <Box sx={{border:"1px solid #BDBDBD", minHeight:100, borderRadius:"1rem", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <ForumIcon/>
            <Typography>No Comments To Show</Typography>
          </Box> */}
          <Comment />
          <FormControl sx={{ marginTop: 1, display: "flex", flexDirection: "row" }}>
            <TextField fullWidth size="small" />
            <IconButton>
              <SendIcon />
            </IconButton>
          </FormControl>
        </Box>
      </Modal>
    );
  }

  return (
    <>
      <ActivityModal />
      <StatusChangeModal />
      <Box display="flex" flexDirection="column">
        <TableContainer sx={{ maxHeight: "70vh", minHeight: 440 }}>
          {/* <DateRangeInput/> */}
          <Table stickyHeader aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell width={10} />
                {columns.map((column) => (
                  <TableCell width={column.width} variant="head" key={column.name}>
                    {column.name}
                  </TableCell>
                ))}
                <TableCell />
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <Row
                  key={row.id}
                  row={row}
                  isOpen={row.id === openRow}
                  onRowClick={handleRowClick}
                  handleCopyPhoneSuccess={handleCopyPhoneSuccess}
                  handleCopyEmailSuccess={handleCopyEmailSuccess}
                />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </>
  );

  function Row({ row, isOpen, onRowClick, handleCopyPhoneSuccess, handleCopyEmailSuccess }) {
    return (
      <Fragment>
        <TableRow>
          <TableCell onClick={() => onRowClick(row.id)}>
            <ExpandMore />
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell>
            <Select
              size="small"
              value={row.phone.find((data) => data.phoneType === "primary")?.phone}
              sx={{
                color: row.phone.find((data) => data.phoneType === "primary")?.phoneType === "primary" ? "red" : "blue",
              }}
            >
              {row.phone.map((data, index) => (
                <MenuItem key={index} value={data.phone} sx={{ color: data.phoneType === "primary" ? "red" : "blue" }}>
                  {data?.phone}
                </MenuItem>
              ))}
            </Select>
          </TableCell>

          <TableCell>{row.services}</TableCell>
          <TableCell>{row.email[0].email}</TableCell>
          <TableCell>
            <Select
              size="small"
              value={state.leadStatus}
              onChange={(e) => {
                handleStatusSelect(row.id);
                dispatch({ leadStatus: e.target.value });
              }}
            >
              <MenuItem value="select status">Select Status</MenuItem>
              <MenuItem value="wrongLeads">Wrong Lead</MenuItem>
              <MenuItem value="preferredLocal">Preferred Local</MenuItem>
              <MenuItem value="skeptic">Skeptic</MenuItem>
            </Select>
          </TableCell>
          <TableCell>
            <Button>Pick Lead</Button>
          </TableCell>
        </TableRow>
        {/* Expandable Row Details Below */}
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <Box display="flex" marginBottom={6}>
                <Box sx={{ margin: 1, padding: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* first section */}
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={toggleEditable}>{isEditable ? <CancelIcon /> : <EditIcon />}</IconButton>
                  </Box>

                  {/* first section */}
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography variant="subtitle2">Posted {formattedTimestamp(row.createdAt)}</Typography>
                      {/* <Typography>
                      {row.services.map((service, index) => (
                        <Chip key={index} label={service} style={{ margin: "2px" }} />
                      ))}
                    </Typography> */}
                      <Box display="flex" gap={2}>
                        {row.services.map((service, index) => (
                          <Typography color="#16CDF3" variant="h5">
                            {service.toUpperCase()}
                          </Typography>
                        ))}
                      </Box>
                      <Typography>Price | ${row.leadBudget}</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "#CCFEE5", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "0.75rem", px: 2, maxHeight: "50px" }}>
                      <Typography>{formattedPhone(row.phone[0].isoCode, row.phone[0].phone)}</Typography>

                      <CopyToClipboard text={row.phone[0].phone} onCopy={handleCopyPhoneSuccess}>
                        <IconButton>
                          <CopyAll sx={{ fontSize: "18px", color: isCopyPhoneSuccess ? "green" : "black" }} />
                        </IconButton>
                      </CopyToClipboard>
                      {/* <IconButton>
                        <ArrowDownward sx={{ fontSize: "18px" }} />
                      </IconButton> */}
                      <IconButton>
                        <PhoneAndroid sx={{ fontSize: "18px" }} />
                      </IconButton>
                      <IconButton>
                        <Message sx={{ fontSize: "18px" }} />
                      </IconButton>
                      <IconButton>
                        <Email sx={{ fontSize: "18px" }} />
                      </IconButton>
                    </Box>
                  </Box>
                  {/* second section */}
                  <Box>
                    <Typography variant="subtitle2">{row.leadBrief}</Typography>
                  </Box>
                  {/* third section */}
                  <Box display="flex" gap={8} marginTop={3}>
                    <Box display="flex" gap={2}>
                      <Avatar src={avatar} variant="square" sx={{ "&.MuiAvatar-square": { borderRadius: "1rem", border: "1px solid #BDBDBD", height: 50, width: 50 } }} />
                      <Box>
                        <Typography variant="h5">{row.name}</Typography>
                        <Typography variant="subtitle2" style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          {row.location.country} | {row.location.abbreviation}{" "}
                          <div
                            style={{
                              display: "inline-flex",
                              width: "1rem",
                              height: "1rem",
                              borderRadius: "1rem",
                              overflow: "hidden",
                              fontSize: "25px",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {country.getCountryFlagByName(row.location.country)}
                          </div>
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display="flex" flexDirection="column">
                        <Box display="flex" alignItems="center">
                          <Typography variant="subtitle2">Email:</Typography>
                          {isEditable && (
                            <IconButton>
                              <EditIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                          )}
                        </Box>
                        <Box display="flex" alignItems="center">
                          <Typography variant="subtitle2">{row.email[0].email}</Typography>
                          <CopyToClipboard text={row.email[0].email} onCopy={handleCopyEmailSuccess}>
                            <IconButton>
                              <CopyAll sx={{ fontSize: "18px", color: isCopyEmailSuccess ? "green" : "black" }} />
                            </IconButton>
                          </CopyToClipboard>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Box display="flex" alignItems="center">
                          <Typography variant="subtitle2">Industry:</Typography>
                          {isEditable && (
                            <IconButton>
                              <EditIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                          )}
                        </Box>
                        <Typography variant="subtitle2">{row.leadIndustry}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Box display="flex" alignItems="center">
                          <Typography variant="subtitle2">Type:</Typography>
                          {isEditable && (
                            <IconButton>
                              <EditIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                          )}
                        </Box>

                        <Typography variant="subtitle2">{row.leadType}</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Box display="flex" alignItems="center">
                          <Typography variant="subtitle2">Domain:</Typography>
                          {isEditable && (
                            <IconButton>
                              <EditIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                          )}
                        </Box>
                        <Typography variant="subtitle2">www.domain.com</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box display="flex" flexDirection="column" gap={1}>
                        <Box display="flex" alignItems="center">
                          {isEditable && (
                            <IconButton>
                              <EditIcon sx={{ fontSize: "1rem" }} />
                            </IconButton>
                          )}
                        </Box>
                        <Box display="flex">
                          <Instagram className="hover:cursor-pointer" />
                          <Facebook className="hover:cursor-pointer" />
                          <LinkedIn className="hover:cursor-pointer" />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ width: "25rem", borderLeft: "1px solid #BDBDBD", p: 3, display: "flex", flexDirection: "column" }}>
                  <Box marginTop={2}>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <Typography variant="subtitle1">Lead Status</Typography>
                    </Box>
                    <List component="nav">
                      <ListItemButton onClick={handleEmailClick}>
                        <ListItemIcon>
                          <Mail />
                        </ListItemIcon>
                        <ListItemText primary="Email Status" />
                        {openEmail ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openEmail} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 9 }}>
                            <ListItemIcon>
                              <Avatar variant="square" sx={{ "&.MuiAvatar-square": { borderRadius: "0.25rem" }, height: 20, width: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary="Jordan" sx={{ marginLeft: -3 }} />
                            <Chip size="small" label="2" />
                          </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 9 }}>
                            <ListItemIcon>
                              <Avatar variant="square" sx={{ "&.MuiAvatar-square": { borderRadius: "0.25rem" }, height: 20, width: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary="Jordan" sx={{ marginLeft: -3 }} />
                            <Chip size="small" label="1" />
                          </ListItemButton>
                        </List>
                      </Collapse>

                      <ListItemButton onClick={handlePhoneClick}>
                        <ListItemIcon>
                          <PhoneAndroid />
                        </ListItemIcon>
                        <ListItemText primary="Call Status" />
                        {openPhone ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={openPhone} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 9 }}>
                            <ListItemIcon>
                              <Avatar variant="square" sx={{ "&.MuiAvatar-square": { borderRadius: "0.25rem" }, height: 20, width: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary="Jordan" sx={{ marginLeft: -3 }} />
                            <Chip size="small" label="1" />
                          </ListItemButton>
                        </List>
                        <List component="div" disablePadding>
                          <ListItemButton sx={{ pl: 9 }}>
                            <ListItemIcon>
                              <Avatar variant="square" sx={{ "&.MuiAvatar-square": { borderRadius: "0.25rem" }, height: 20, width: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary="Jordan" sx={{ marginLeft: -3 }} />
                            <Chip size="small" label="2" />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    </List>
                  </Box>
                  <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
                    <Button onClick={handleActivity}>Lead Activity</Button>
                    <Button>Pick Lead</Button>
                  </Box>
                </Box>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </Fragment>
    );
  }
};

export default LeadFunnelTable;
