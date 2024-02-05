// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Typography, Grid } from '@mui/material'


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
                        

                    </Grid>
                </Grid>

            </Box>
        </Box>

    )
}

export default Home