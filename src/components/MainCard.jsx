import { Card, useTheme } from "@mui/material";
import { forwardRef } from "react";

const MainCard = forwardRef(({ border = true, boxShadow, children, content = true, contentSX = {}, dartTitle, elevation, secondary, shadow, sx = {}, title, codeHighlight, ...others }, ref) => {
    const theme = useTheme()
    
    return(
        <Card
        elevation={elevation || 0}
        ref={ref}
        {...others}
        sx={{
            border: border ? '1px solid' : 'none',
            borderRadius:2,
            borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A700,
            boxShadow: boxShadow && (!border || theme.palette.mode=== 'dark')? shadow || theme.customShadows.z1 : 'inherit',
            ':hover':{
                boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
            },
            '& pre': {
            m: 0,
            p: '16px !important',
            fontFamily: theme.typography.fontFamily,
            fontSize: '0.75rem'
          },
          ...sx 
        }}
        
        >
        {!content && children}
        </Card>
    )
});

export default MainCard;
// elevation 0 border false content false