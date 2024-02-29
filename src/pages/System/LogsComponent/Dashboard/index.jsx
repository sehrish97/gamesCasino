import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { PieChart } from "@mui/x-charts";
import ViewListIcon from "@mui/icons-material/ViewList";
import AdbIcon from '@mui/icons-material/Adb';
import CampaignIcon from '@mui/icons-material/Campaign';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import CloseIcon from '@mui/icons-material/Close';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import SupportIcon from '@mui/icons-material/Support';
import CustomBox from "./CustomBox";

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={3}>
        <PieChart
          series={[
            {
              data: [
                { label: `Error`, value: 25 },
                { label: `Warning: 1`, value: 25 },
                { label: `Info: 1`, value: 25 },
                { label: `Debug: 1`, value: 25 },
              ],
              cx: 110,
              innerRadius: 38,
              outerRadius: 90,
            },
          ]}
          height={250}
          width={250}
          slotProps={{
            legend: { hidden: true },
          }}
          colors={["#FF5733", "#ffc107", "#007bff", "#17a2b8"]}
        />
        <Box sx={{ display: "flex", color: "grey", gap: 1, flexWrap: "wrap", alignItems:"center",
      justifyContent:"center" }}>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#B71C1C",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Emergency
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#D32F2F",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Alert
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#F44336",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Critical
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#FF5722",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Error
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#FF9100",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Warning
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#4CAF50",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Notice
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#1976D2",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Info
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "40px",
                height: "15px",
                background: "#90CAF9",
                border: "1px solid white",
              }}
            ></Box>
            <Typography sx={{ fontSize: "12px", textIndent: "5px" }}>
              Debug
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={9}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 3,
            flexWrap: "wrap",
            marginTop:"30px"
          }}
        >
          <CustomBox 
          icon={<ViewListIcon color="white" fontSize="42px" />}
          data="4 entries - 100 %"
          progress={100}
          colour='#8A8A8A'
          />
          <CustomBox 
          icon={<AdbIcon color="white" fontSize="42px"/>}
          data="0 entries - 0 %"
          progress={0}
          colour='#4E4E4E'
          />
          <CustomBox 
          icon={<CampaignIcon color="white" fontSize="42px"/>}
          data="0 entries - 0 %"
          progress={0}
          colour='#4E4E4E'
          />
          <CustomBox 
          icon={<MonitorHeartIcon color="white" fontSize="42px"/>}
          data="0 entries - 0 %"
          progress={0}
          colour='#4E4E4E'
          />
          <CustomBox 
          icon={<CloseIcon color="white" fontSize="42px"/>}
          data="1 entries - 25 %"
          progress={25}
          colour="#FF5722"
          />
          <CustomBox 
          icon={<WarningRoundedIcon color="white" fontSize="42px"/>}
          data="1 entries - 25 %"
          progress={25}
          colour="#FF9100"
          />
          <CustomBox 
          icon={<ErrorIcon color="white" fontSize="42px"/>}
          data="0 entries - 0 %"
          progress={0}
          colour='#4E4E4E'
          />
          <CustomBox 
          icon={<InfoIcon color="white" fontSize="42px"/>}
          data="1 entries - 25 %"
          progress={25}
          colour='#1976D2'
          />
          <CustomBox 
          icon={<SupportIcon color="white" fontSize="42px"/>}
          data="1 entries - 25 %"
          progress={25}
          colour='#90CAF9'
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
