import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';


const CardComponent = ({data}) => {
  return (
<Card sx={{ maxWidth: 275 ,padding:"10px",
border: '1px solid #201f25',
background:"#1c1b20",
borderRadius:"20px",
cursor:"pointer",
transition: 'all 0.3s ease',
":hover":{
  transform:"scale(1.1)"
},
margin:"6px",}}>
      <Box sx={{height:"auto"}}>
        <img src={data.image} width={85} style={{
            overflowClipMargin:"content-box"
        }}/>
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{marginBottom:"10px"}}>
        {data.title}
        </Typography>
        <Typography variant="h5" component="div" color="grey" sx={{marginBottom:"10px"}}>{data.version}</Typography>
        <Typography variant="h6" component="div" color="text.secondary" sx={{marginBottom:"10px"}}>{data.description}</Typography>
        <Typography variant="h6" component="div">
        {data.author}
        </Typography> 
      </CardContent>
      {data.buttons && (
        data.buttons.length === 1 ? (
        <CardActions>
          {data.buttons.map((button, index) => (
            <Button key={index} size="small" sx={{ borderRadius: "30px", backgroundColor: button.backgroundColor, padding: "5px 15px", color: "black" }}>
              {button.icon}{" "} {button.label}
            </Button>
          ))}
        </CardActions>
      ) : (
        <CardActions sx={{display:"block"}}>
          {data.buttons.map((button, index) => (
            <Button key={index} size="small" sx={{ borderRadius: "30px", backgroundColor: button.backgroundColor, padding: "5px 15px", color: "black", marginBottom: '10px' }}>
              {button.icon}{" "} {button.label}
            </Button>
            ))}
            </CardActions>
            )
      )
          }
    </Card>
    
  )
}
export default CardComponent