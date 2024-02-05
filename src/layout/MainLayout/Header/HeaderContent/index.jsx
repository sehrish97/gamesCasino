import { Box } from '@mui/material'
import React, { useState } from 'react'
import Profile from './Profile'

const HeaderContent = () => {
  return (
    <>
    <Box sx={{ width: '100%', ml: 1 }} />
    <Profile />
    </>
  )
}

export default HeaderContent