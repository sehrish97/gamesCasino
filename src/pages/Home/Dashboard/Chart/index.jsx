import { Box, Stack } from "@mui/material";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

const MyChart = () => {

  const customValueFormatter = (value, axisLabel) => {
    return `${axisLabel}: ${value}`;
  };

  return (
    <>
    
      <SparkLineChart
        label="My Title"
        sx={{
          '.MuiLineElement-root': {
            stroke: '#CB4B4C ',
            strokeWidth: 5.5,
          },
          '.MuiHighlightElement-root': {
            fill: '#CB4B4C ',
            stroke: 'white',
            strokeWidth: '2px',
            r: '6px'
          }
        }}
        data={[1, 4, 2, 5, 7, 2, 4, 8]}
        xAxis={{
          scaleType: 'time',
          data: [
            new Date(2022, 5, 1),
            new Date(2022, 5, 2),
            new Date(2022, 5, 5),
            new Date(2022, 5, 6),
            new Date(2022, 5, 7),
            new Date(2022, 5, 8),
            new Date(2022, 5, 11),
            new Date(2022, 5, 12),
          ],
          valueFormatter: (value) => value.toISOString().slice(0, 10),
        }}
        colors={['#CB4B4C']}
        showHighlight={true}
        showTooltip={true}
        valueFormatter={(value) => customValueFormatter(value, "Registered Users")}
      />
    </>
  )
}

export default MyChart