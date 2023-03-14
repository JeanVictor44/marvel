import {Toolbar, AppBar, Box } from '@mui/material';
import logo from '../assets/logo.png'


  
function Header(){
    return(
        <>
            <AppBar 
                position="static"
                sx={{
                    backgroundColor:"background.default",
                    display:"flex",
                    justifyContent:"space-between",
                    pt:"20px",
                    boxShadow:0
                }}
            >
                daslkdaslj                    
            </AppBar>
        </>
    )
}
export { Header }