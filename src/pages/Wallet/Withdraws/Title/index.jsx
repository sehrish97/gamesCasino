import * as React from 'react';
import PropTypes from 'prop-types';
import {Typography,Box} from '@mui/material';

function Title(props) {
  return (
    <Box sx={{
      marginBottom:"35px",
    }}>
    <Typography sx={{
      fontSize:"3rem"
    }} color="primary" gutterBottom>
      {props.children}
    </Typography>
    </Box>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;