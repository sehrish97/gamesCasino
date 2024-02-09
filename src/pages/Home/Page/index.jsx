import { Box, Typography, Grid } from "@mui/material";
import { PieChart } from "@mui/x-charts";

const Page = () => {
  const pieData = [
    {
      title: "Page",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
   
  ];
  const pieDataTwo = [
    {
      title: "Device Type",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
    {
      title: "Browser",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
    {
      title: "Operating System",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
    {
      title: "Region",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
    {
      title: "Country",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
    {
      title: "City",
      height: 300,
      width: 200,
      data: [
        { label: `Page "Demonstration"`, value: 45 },
        { label: `Page "Demonstration"`, value: 24 },
        { label: `Page "Demonstration"`, value: 9 },
        { label: `Page "Demonstration"`, value: 35 },
        { label: `Page "Demonstration"`, value: 55 },
        { label: `Page "Demonstration"`, value: 98 },
        { label: `Page "Demonstration"`, value: 58 },
        { label: `Page "Demonstration"`, value: 67 },
        { label: `Page "Demonstration"`, value: 15 },
      ],
    },
   
  ];

  return (
    <>
      {pieData.map((data) => {
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
                    <PieChart
                      series={[
                        {
                          data: data.data,
                          cx: 165,
                          innerRadius: 83,
                          outerRadius: 120,
                        },
                      ]}
                      height={data.height}
                      slotProps={{
                        legend: { hidden: true },
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Grid>

          </>
        );
      })}
      {pieDataTwo.map((data) => {
        return (
          <>
            <Grid item xs={12} sm={4}>
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
                    <PieChart
                      series={[
                        {
                          data: data.data,
                          cx: 165,
                          innerRadius: 83,
                          outerRadius: 120,
                        },
                      ]}
                      height={data.height}
                      slotProps={{
                        legend: { hidden: true },
                      }}
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

export default Page;
