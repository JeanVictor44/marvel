import {Toolbar, AppBar, Box, Tabs, Tab,styled } from '@mui/material';
import { useState } from 'react';
import logo from '../assets/logo.png'


  
function Header(){
    const [value, setValue] = useState('Personagens');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
    return(
        <>
            <AppBar position="static">
                <Toolbar 
                    sx={{
                        backgroundColor:"primary",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"center",
                        pt:"20px"
                    }}
                >
                    <Box>
                        <img src={logo} width="120" loading="lazy"/>
                    </Box>
                    <Box>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor={'secondary'}
                        indicatorColor={"secondary"}
                        sx={{
                            mt:"10px"
                        }}
                    >
                        <Tab
                        value="Personagens"
                        label="Personagens"
                        sx={{
                            color:"#FFF"
                        }}

                        />
                        <Tab 
                            sx={{
                                color:"#FFF"
                            }}
                            value="Revistas" 
                            label="Revistas" 
                        />
                        <Tab  
                            sx={{
                                color:"#FFF"
                            }} value="Filmes" label="Filmes" 
                        />
                        <Tab 
                            sx={{
                            color:"#FFF"
                            }}
                            value="Criadores" 
                            label="Criadores"
                         />

                        <Tab 
                            sx={{
                                color:"#FFF"
                            }}value="Notícias" label="Notícias" 
                        />
                    </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}
export { Header }