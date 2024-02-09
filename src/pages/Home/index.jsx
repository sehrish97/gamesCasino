// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';

import HomeChips from './Chips';



const Home = () => {
    return (
        <Box>
            <Box sx={{ p: 4 }}>
                <Typography sx={{
                    fontWeight: "400",
                    fontFamily: "inter sans-serif",
                    fontSize: "43px"
                }}>Dashboard</Typography>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <HomeChips />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box>
                            <Typography variant="h5">Welcome to the Dashboard!</Typography>
                            <Typography>This is a simple dashboard built using MUI and React.js.</Typography><br /><br />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >

    )
}

export default Home