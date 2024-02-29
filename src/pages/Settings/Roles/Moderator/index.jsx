import { Box, Typography } from '@mui/material'
import React from 'react'
import { InfoRounded } from "@mui/icons-material";

const Moderator = () => {
    return (
        <>
            <Box>
                <Typography sx={{ fontSize: "20.16px" }}>Moderator</Typography>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    border: "2px solid white",
                    padding: "20px 25px",
                    borderRadius: "500px",
                    borderColor: "#9aa1ff",
                    color: "#dcdeff",
                    mt: 2
                }}
            >
                <InfoRounded sx={{ marginRight: "10px", fontSize: "1.1rem" }} />
                This role can't be edited or removed.
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                    border: "2px solid white",
                    padding: "20px 25px",
                    borderRadius: "500px",
                    borderColor: "#9aa1ff",
                    color: "#dcdeff",
                    mt: 2
                }}
            >
                <InfoRounded sx={{ marginRight: "10px", fontSize: "1.1rem" }} />
                This role enables blue border for user's chat messages and ability to moderate chat messages.
            </Box>
        </>
    )
}

export default Moderator