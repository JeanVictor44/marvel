import { AppBar, Box, InputLabel, FormControl, OutlinedInput, Avatar, Typography } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

  
function Header(){
    return(
        <>
            <AppBar 
                position="static"
                sx={{
                    backgroundColor:"background.default",
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"space-between",
                    alignItems:"center",
                    pt:"20px",
                    boxShadow:0
                }}
            >
                <FormControl sx={{ 
                    ml: 5, 
                    width:"100%",
                    maxWidth: '650px',
                    border:'1px solid #2E2D40'
                    
                }} 
                    variant="outlined"
                    focused={false}
                    
                >
                    <InputLabel htmlFor="outlined-adornment-search" sx={{
                        color:'#fff',
                        
                    }} >
                        Search...
                    </InputLabel>
                    <OutlinedInput

                        id="outlined-adornment-search"
                        label="search"
                        
                    />
                    </FormControl>   

                    <Box sx={{
                        mr:5,
                        display:'flex',
                        alignItems:"center",
                        gap:"20px"
                    }}>
                        <NotificationsNoneIcon />
                        <Box sx={{
                            display:"flex",
                            alignItems:"center",
                            gap:"10px"
                        }}>
                            <Avatar alt="Jean Victor" src="/static/images/avatar/1.jpg" />
                            <Typography>Jean Victor</Typography>
                        </Box>
                    </Box>

            </AppBar>
        </>
    )
}
export { Header }