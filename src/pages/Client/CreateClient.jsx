import { Box, Typography } from '@mui/material'
import React from 'react'
import CreateClientForm from '../../features/Client/CreateClientForm'

const CreateClient = () => {
  return (
    <Box sx={{ p: 4 }}>
    <Typography  variant="h5" sx={{my:2}}>Create a New Client</Typography>
    <CreateClientForm />
  </Box>
  )
}

export default CreateClient