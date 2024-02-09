import { Box, Typography,Grid } from "@mui/material";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";

const RegisteredUsers = () => {
  const customValueFormatter = (value, axisLabel) => {
    return `${axisLabel}: ${value}`;
  };

  const chartData = [
    {
      title: "Registered User",
      data: {
        yAxis: [1, 4, 2, 5, 7, 2, 4, 8],
        xAxis: [
          new Date(2022, 5, 1),
          new Date(2022, 5, 2),
          new Date(2022, 5, 5),
          new Date(2022, 5, 6),
          new Date(2022, 5, 7),
          new Date(2022, 5, 8),
          new Date(2022, 5, 11),
          new Date(2022, 5, 12),
        ],
      },
    },
    {
      title: "Logged In Users",
      data: {
        yAxis: [1, 4, 2, 5, 7, 2, 4, 8],
        xAxis: [
          new Date(2022, 5, 1),
          new Date(2022, 5, 2),
          new Date(2022, 5, 5),
          new Date(2022, 5, 6),
          new Date(2022, 5, 7),
          new Date(2022, 5, 8),
          new Date(2022, 5, 11),
          new Date(2022, 5, 12),
        ],
      },
    },
    {
      title: "Expected Profit",
      data: {
        yAxis: [1, 4, 2, 5, 7, 2, 4, 8],
        xAxis: [
          new Date(2022, 5, 1),
          new Date(2022, 5, 2),
          new Date(2022, 5, 5),
          new Date(2022, 5, 6),
          new Date(2022, 5, 7),
          new Date(2022, 5, 8),
          new Date(2022, 5, 11),
          new Date(2022, 5, 12),
        ],
      },
    },
    {
      title: "Visits",
      data: {
        yAxis: [1, 4, 2, 5, 7, 2, 4, 8],
        xAxis: [
          new Date(2022, 5, 1),
          new Date(2022, 5, 2),
          new Date(2022, 5, 5),
          new Date(2022, 5, 6),
          new Date(2022, 5, 7),
          new Date(2022, 5, 8),
          new Date(2022, 5, 11),
          new Date(2022, 5, 12),
        ],
      },
    },
    {
      title: "New Visits",
      data: {
        yAxis: [1, 4, 2, 5, 7, 2, 4, 8],
        xAxis: [
          new Date(2022, 5, 1),
          new Date(2022, 5, 2),
          new Date(2022, 5, 5),
          new Date(2022, 5, 6),
          new Date(2022, 5, 7),
          new Date(2022, 5, 8),
          new Date(2022, 5, 11),
          new Date(2022, 5, 12),
        ],
      },
    },
    {
      title: "Registered Users (Referred)",
      data: {
        yAxis: [1, 4, 2, 5, 7, 2, 4, 8],
        xAxis: [
          new Date(2022, 5, 1),
          new Date(2022, 5, 2),
          new Date(2022, 5, 5),
          new Date(2022, 5, 6),
          new Date(2022, 5, 7),
          new Date(2022, 5, 8),
          new Date(2022, 5, 11),
          new Date(2022, 5, 12),
        ],
      },
    },
  ];

  return (
    <>
    
   
      {chartData.map((data) => {
        return (
          <>
          <Grid item xs={12} sm={6}>
          <Box
            sx={{
              bgcolor: "#1C1B20",
              padding: "35px 40px",
              borderRadius: "10px",
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: "24px",
                  fontWeight: 400,
                  fontFamily: "sans-serif",
                }}
              >
                {data.title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                paddingTop: "15px",
                marginBottom: "auto",
              }}
            >
              <Box
                sx={{
                  height: "300px",
                  width: "350px",
                }}
              >
                <SparkLineChart
                  label="My Title"
                  sx={{
                    ".MuiLineElement-root": {
                      stroke: "#CB4B4C ",
                      strokeWidth: 5.5,
                    },
                    ".MuiHighlightElement-root": {
                      fill: "#CB4B4C ",
                      stroke: "white",
                      strokeWidth: "2px",
                      r: "6px",
                    },
                  }}
                  data={data.data.yAxis}
                  xAxis={{
                    scaleType: "time",
                    data: data.data.xAxis,
                    valueFormatter: (value) => value.toISOString().slice(0, 10),
                  }}
                  colors={["#CB4B4C"]}
                  showHighlight={true}
                  showTooltip={true}
                  valueFormatter={(value) =>
                    customValueFormatter(value, `${data.title}`)
                  }
                />
              </Box>
            </Box>
            </Box>
            </Grid> 
          </>
        );
      })}
   </>
  );
};

export default RegisteredUsers;
