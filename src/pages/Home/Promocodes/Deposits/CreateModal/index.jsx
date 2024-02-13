import {
  Popover,
  Box,
  FormGroup,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const CreateModal = ({ open, onClose, anchorEl }) => {
  const [currency, setCurrency] = useState("USDT");

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={open}
      onClose={onClose}
      sx={{
        marginTop: "1rem",
      }}
    >
      <Box sx={{ p: 2 }}>
        <FormGroup>
          <FormControlLabel control={<Switch />} label="Unlimited" />
          <FormControlLabel control={<Switch />} label="Random Code" />
        </FormGroup>
        <FormControl>
          <Box display="flex" flexDirection="column" gap={1} marginTop={2}>
            <Typography>Code</Typography>
            <TextField
              size="small"
              type="text"
              placeholder="Code"
              InputProps={{
                style: { borderRadius: "0.75rem" },
              }}
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={1} marginTop={2}>
            <Typography>Uses</Typography>
            <TextField
              size="small"
              type="text"
              value="50"
              placeholder="Uses"
              InputProps={{
                style: { borderRadius: "0.75rem" },
              }}
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={1} marginTop={2}>
            <Typography>Sum</Typography>
            <TextField
              size="small"
              type="text"
              value="0"
              placeholder="Uses"
              InputProps={{
                style: { borderRadius: "0.75rem" },
              }}
              variant="outlined"
              style={{
                width: "100%",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" gap={1} marginTop={2}>
            <Typography>Currency</Typography>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                onChange={handleCurrencyChange}
                sx={{ maxHeight: 100 }}
              >
                <MenuItem value={"USDT"}>USDT</MenuItem>
                <MenuItem value={"ETH"}>ETH</MenuItem>
                <MenuItem value={"BTC"}>BTC</MenuItem>
                <MenuItem value={"ETH"}>ETH</MenuItem>
                <MenuItem value={"LTC"}>LTC</MenuItem>
                <MenuItem value={"BCH"}>BCH</MenuItem>
                <MenuItem value={"DOGE"}>DOGE</MenuItem>
                <MenuItem value={"DAI"}>DAI</MenuItem>
                <MenuItem value={"SHIB"}>SHIB</MenuItem>
                <MenuItem value={"MATIC"}>MATIC</MenuItem>
                <MenuItem value={"APE"}>APE</MenuItem>
                <MenuItem value={"USDC"}>USDC</MenuItem>
                <MenuItem value={"BTC"}>BTC</MenuItem>
                <MenuItem value={"LTC"}>LTC</MenuItem>
                <MenuItem value={"DOGE"}>DOGE</MenuItem>
                <MenuItem value={"BCH"}>BCH</MenuItem>
                <MenuItem value={"SOL"}>SOL</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" flexDirection="column" gap={1} marginTop={2}>
            <Typography>Expires</Typography>
           
          </Box>
        </FormControl>
      </Box>
    </Popover>
  );
};

export default CreateModal;
