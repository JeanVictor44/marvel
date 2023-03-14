import { DarkModeOutlined, Drafts, MovieCreation, Person } from "@mui/icons-material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';

function Sidebar(){
    return (
        <Box sx={{ 
          maxWidth: 250, 
          bgcolor: '#1D1D2A', 
          height:'100vh',
            
          borderRightColor:"#2E2D40",
          borderRightWidth:"1px",
          borderRightStyle:"solid",
          pl:'20px',
          pt:"40px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between"
        }}>
        <nav >
          <List>
            <Typography 
              variant="h2" 
              fontWeight={700} 
              fontSize="30px"
              mb="40px"
            >
              Mundo Geek
            </Typography>
            <ListItem disablePadding >
              <ListItemButton>
                <ListItemIcon>
                  <Person sx={{
                    color:"text.primary"
                  }} />
                </ListItemIcon>
                <ListItemText primary="Personagens" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MovieCreation sx={{
                    color:"text.primary"
                  }} />
                </ListItemIcon>
                <ListItemText primary="Filmes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AutoStoriesOutlinedIcon sx={{
                    color:"text.primary"
                  }} />
                </ListItemIcon>
                <ListItemText primary="Comics" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Séries" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Drafts />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>

        <nav>
        <List>
          <ListItem disablePadding sx={{
          }}>
                <ListItemButton>
                  <ListItemIcon>
                    <DarkModeOutlined 
                      sx={{
                      color:"text.primary"
                    }}/>
                  </ListItemIcon>
                  <ListItemText primary="Theme" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{
          }}>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutOutlinedIcon sx={{
                      color:"text.primary"
                    }}/>
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
              
          </List>
        </nav>
        
      </Box>
    )
}

export { Sidebar }