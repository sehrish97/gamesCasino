// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Typography, Grid } from '@mui/material';

import HomeChips from './Chips';
// import MyChart from './Chart';
import RegisteredUsers from './RegisteredUsers';
import Page from './Page';



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
                    <Grid container xs={12} sm={6}>
                        <HomeChips />
                    </Grid>
                        <RegisteredUsers />
                   
                        <Page />
                </Grid>
            </Box>
        </Box >

    )
}

export default Home