import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import { CharactersGrid } from '../components/CharactersGrid';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';


function App() {
  
  return (
    <>

    <Box display="grid" gridTemplateColumns="245px 1fr">
    <CssBaseline />

      <Box>
        <Sidebar />
      </Box>
      
      <Box >
        <Header />
        <Box sx={{
          py:5,
          pl:5,
        }}>
          <Outlet />

        </Box>
      </Box>
    </Box>
  
  </>
  )
}

export default App
