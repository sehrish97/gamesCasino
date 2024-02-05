// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Box, Typography, Grid, CardContent, Card } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { ArrowUpwardOutlined } from '@mui/icons-material';


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
                        <Box sx={{
                            display: "flex",
                            flexFlow: "wrap"
                        }}>
                            <Card sx={{
                                minWidth: "250px",
                                m: 1,
                                border: "1px solid grey",
                                height: "50px",
                                borderRadius: "10px"
                            }}>
                                <CardContent sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                    }}>
                                        <PersonIcon sx={{
                                            textIndent: "10px"
                                        }} />
                                        <Typography variant='h5' sx={{
                                            textIndent: "10px"
                                        }}>Users</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>
                                            0
                                        </Typography>
                                        <Typography variant='h5'>/</Typography>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>238</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                minWidth: "250px",
                                m: 1,
                                border: "1px solid grey",
                                maxHeight: "60px",
                                borderRadius: "10px"

                            }}>
                                <CardContent sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                    }}>
                                        <ArrowDownwardIcon sx={{
                                            textIndent: "10px"
                                        }} />
                                        <Box>
                                            <Typography variant='h5' sx={{
                                                textIndent: "10px",
                                                display: "inline-block"
                                            }}>Deposits
                                            </Typography>
                                            <Typography sx={{
                                                textIndent: "10px",
                                                color: "grey",
                                                fontSize: "12px"
                                            }}>Today's Value: $ 0.00</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>
                                            0
                                        </Typography>
                                        <Typography variant='h5'>/</Typography>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>0</Typography>
                                        <Typography variant='h5' sx={{ textIndent: "10px" }}>|</Typography>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline",
                                            textIndent: "10px"
                                        }}>
                                            0
                                        </Typography>
                                        <Typography variant='h5'>/</Typography>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>0</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                minWidth: "250px",
                                m: 1,
                                border: "1px solid grey",
                                height: "50px",
                                borderRadius: "10px"
                            }}>
                                <CardContent sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                    }}>
                                        <PeopleOutlineOutlinedIcon sx={{
                                            textIndent: "10px"
                                        }} />
                                        <Typography variant='h5' sx={{
                                            textIndent: "10px"
                                        }}>Users (Referred)</Typography>
                                    </Box>
                                    <Box sx={{ display: "flex" }}>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>
                                            0
                                        </Typography>
                                        <Typography variant='h5'>/</Typography>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>3</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                            <Card sx={{
                                minWidth: "250px",
                                m: 1,
                                border: "1px solid grey",
                                maxHeight: "60px",
                                borderRadius: "10px"

                            }}>
                                <CardContent sx={{
                                    display: "flex",
                                    justifyContent: "space-between"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                    }}>
                                        <ArrowUpwardOutlined sx={{
                                            textIndent: "10px"
                                        }} />
                                        <Box>
                                            <Typography variant='h5' sx={{
                                                textIndent: "10px",
                                                display: "inline-block"
                                            }}>Withdraws
                                            </Typography>
                                            <Typography sx={{
                                                textIndent: "10px",
                                                color: "grey",
                                                fontSize: "12px"
                                            }}>
                                                Today's Value: $ 0.00</Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: "flex", width: "75px" }}>
                                        <Typography variant='h5' sx={{
                                            textDecorationLine: "underline"
                                        }}>
                                            0
                                        </Typography>
                                        <Typography variant='h5'>/</Typography>
                                        <Typography variant='h5' sx={{

                                            textDecorationLine: "underline"
                                        }}>1</Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
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