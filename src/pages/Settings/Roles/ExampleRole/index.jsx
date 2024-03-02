import React, { useState } from 'react';
import {
    Switch,
    FormControlLabel,
    Box,
    Typography,
    FormControl,
    Button,
} from "@mui/material";
import { styled } from '@mui/system';

const IOSSwitch = styled((props) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 2,
        transitionDuration: "300ms",
        "&.Mui-checked": {
            transform: "translateX(16px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                backgroundColor: theme.palette.mode === "dark" ? "#4bcb27" : "#4bcb27",
                opacity: 1,
                border: 0,
            },
            "&.Mui-disabled + .MuiSwitch-track": {
                opacity: 0.5,
            },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
            color: "#4bcb27",
            border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
            color:
                theme.palette.mode === "light"
                    ? theme.palette.grey[100]
                    : theme.palette.grey[600],
        },
        "&.Mui-disabled + .MuiSwitch-track": {
            opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
        },
    },
    "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
    },
    "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
            duration: 500,
        }),
    },
}));

const ExampleRole = () => {
    const [switchesState, setSwitchesState] = useState({
        switch1: true,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
        switch6: false,
        switch7: false,
        switch8: false,
        switch9: false,
        switch10: false,
        switch11: false,
        switch12: false,
        switch13: false,
        switch14: false,
        switch15: false,
        switch16: false,
        switch17: false,
        switch18: false,
        switch19: false,
        switch20: false,
        switch21: false,
        switch22: false,
    });

    const handleChange = (event) => {
        setSwitchesState({ ...switchesState, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <FormControl>

                <Box>
                    <Typography sx={{ fontSize: "20.16px" }}>Example role</Typography>
                </Box>

                {/* Moderator */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Moderator</Typography>
                    <Typography>Mute & delete chat messages. Blue border is added to own messages only if user has system chat moderator role.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch1" checked={switchesState.switch1} onChange={handleChange} />}
                    label="Allow"
                />

                {/* Dashboard */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Dashboard</Typography>
                    <Typography>Access to dashboard</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch2" checked={switchesState.switch2} onChange={handleChange} />}
                    label="Allow"
                />
                {/* Ignore bet & user profile privacy */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Ignore bet & user profile privacy</Typography>
                    <Typography>Show player name regardless of their privacy settings.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch3" checked={switchesState.switch3} onChange={handleChange} />}
                    label="Allow"
                />
                {/* Ignore bet & user profile privacy */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Wallet</Typography>
                    <Typography>Allows control over funds, settings can be changed if allowed to edit.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch4" checked={switchesState.switch4} onChange={handleChange} />}
                    label="Allow"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch5" checked={switchesState.switch5} onChange={handleChange} />}
                    label="Allow"
                />
                {/* Withdraws & Deposits */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Withdraws & Deposits</Typography>
                    <Typography>User withdraw requests and deposits.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch6" checked={switchesState.switch6} onChange={handleChange} />}
                    label="Allow"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch7" checked={switchesState.switch7} onChange={handleChange} />}
                    label="Edit"
                />
                {/* Notifications */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Notifications</Typography>
                    <Typography>Notifications</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch8" checked={switchesState.switch8} onChange={handleChange} />}
                    label="Allow"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch9" checked={switchesState.switch9} onChange={handleChange} />}
                    label="Create"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch10" checked={switchesState.switch10} onChange={handleChange} />}
                    label="Delete"
                />
                {/* Promocode */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Promocode</Typography>
                    <Typography>Access to promocodes.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch11" checked={switchesState.switch11} onChange={handleChange} />}
                    label="Allow"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch12" checked={switchesState.switch12} onChange={handleChange} />}
                    label="Create"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch13" checked={switchesState.switch13} onChange={handleChange} />}
                    label="Delete"
                />
                {/* Users */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Users</Typography>
                    <Typography>Account information in dashboard. 'Create' permission allows user to register new accounts with permissions creator might not have access to!</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch14" checked={switchesState.switch14} onChange={handleChange} />}
                    label="Allow"
                />
                <FormControlLabel
                    sx={{ ml: 0,mt: 2  }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch15" checked={switchesState.switch15} onChange={handleChange} />}
                    label="Edit"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch16" checked={switchesState.switch16} onChange={handleChange} />}
                    label="Create"
                />
                <FormControlLabel
                    sx={{ ml: 0, mt: 2 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch17" checked={switchesState.switch17} onChange={handleChange} />}
                    label="Delete"
                />
                {/* Banner */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Banner</Typography>
                    <Typography>Allows to edit banner contents which shows immediately after page is loaded.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch18" checked={switchesState.switch18} onChange={handleChange} />}
                    label="Allow"
                />


                {/* VIP Settings */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>VIP Settings</Typography>
                    <Typography>Allows to edit VIP ranks.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch19" checked={switchesState.switch19} onChange={handleChange} />}
                    label="Allow"
                />
                {/* Game analytics */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Game analytics</Typography>
                    <Typography>Allows to view game statistics like daily/total wager, profit, etc.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch20" checked={switchesState.switch20} onChange={handleChange} />}
                    label="Allow"
                />

                {/* Game analytics */}
                <Box my={2}>
                    <Typography sx={{ fontSize: "20.16px", my: 2 }}>Sport management</Typography>
                    <Typography>Allows to refund, cancel and change status of sport bets.</Typography>
                </Box>
                <FormControlLabel
                    sx={{ ml: 0 }}
                    control={<IOSSwitch sx={{ mr: 1 }} name="switch21" checked={switchesState.switch21} onChange={handleChange} />}
                    label="Allow"
                />
                <Box display={"flex"} mt={2}>
                    <Button variant='outlined'>Remove</Button>
                </Box>



            </FormControl>
        </>
    );
};

export default ExampleRole;
