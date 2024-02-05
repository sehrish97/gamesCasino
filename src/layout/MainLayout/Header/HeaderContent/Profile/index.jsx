import React, { useRef, useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { Avatar, Box, ButtonBase, CardContent, ClickAwayListener, Fade, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Paper, Popper, Stack, Typography } from "@mui/material";

import MainCard from "../../../../../components/MainCard";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SettingsIcon from "@mui/icons-material/Settings";
import { grey } from "@mui/material/colors";
import { Link } from "react-router-dom";

const Profile = () => {
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleLogout = async () => {
    // logout
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase ref={anchorRef} onClick={handleToggle} aria-controls={open ? "profile-grow" : undefined} aria-haspopup="true">
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Avatar alt="profile user" sx={{ width: 32, height: 32 }} />
          <Typography variant="subtitle1">John Doe</Typography>
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        transition
        anchorEl={anchorRef.current}
        sx={{
          zIndex: 9999,
        }}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Fade
            {...TransitionProps}
            type="fade"
            timeout={{
              appear: 0,
              enter: 300,
              exit: 150,
            }}
          >
            <Box sx={{ transformOrigin: "0 0 0" }}>
              {open && (
                <Paper
                  sx={{
                    width: 290,
                    minWidth: 200,
                    maxWidth: 220,
                  }}
                >
                  <ClickAwayListener onClickAway={handleClose}>
                    <MainCard elevation={0}  border={false} content={false}>
                      <CardContent sx={{ borderBottom: "1px solid", borderColor: grey[200] }}>
                        <Grid container justifyContent="space-between" alignItems="center">
                          <Grid item>
                            <Stack direction="row" spacing={1.25} alignItems="center">
                              <Avatar alt="profile user" sx={{ width: 32, height: 32 }} />
                              <Stack>
                                <Typography className="text-xs">John Doe</Typography>
                                <Typography variant="body2" color="textSecondary">
                                  UI/UX Designer
                                </Typography>
                              </Stack>
                            </Stack>
                          </Grid>
                          <Grid item>
                            <IconButton size="large" color="secondary" onClick={handleLogout}>
                              <LogoutOutlined />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </CardContent>
                      {open && (
                        <>
                          <Box>
                            <List component="nav" sx={{ p: 0, "& .MuiListItemIcon-root": { minWidth: 32 } }}>
                              <ListItemButton>
                                <ListItemIcon>
                                  <SettingsIcon sx={{ width: 20 }} />
                                </ListItemIcon>
                                <Link to="setting">
                                  <ListItemText primary="Setting" />
                                </Link>
                              </ListItemButton>

                              <ListItemButton>
                                <ListItemIcon>
                                  <PowerSettingsNewIcon sx={{ width: 20 }} />
                                </ListItemIcon>
                                <ListItemText primary="logout" />
                              </ListItemButton>
                            </List>
                          </Box>
                        </>
                      )}
                    </MainCard>
                  </ClickAwayListener>
                </Paper>
              )}
            </Box>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
