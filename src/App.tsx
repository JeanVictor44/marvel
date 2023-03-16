import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CharactersGrid } from './components/CharactersGrid';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


function App() {
  
  return (
    <>
    <CssBaseline />
    <Box display="grid" gridTemplateColumns="245px 1fr">
      <Box>
        <Sidebar />
      </Box>
      
      <Box >
        <Header />
        <Box sx={{
          py:5,
          pl:5,
          display:"grid",
          gridTemplateColumns:"1fr 500px"
        }}>
          <CharactersGrid limit={8}/>
          <Box>
          <Typography fontWeight='bold' fontSize="28\px">Personagens Favoritos</Typography>

              <CharactersGrid limit={4}/>  
          </Box>
          
        </Box>
      </Box>
    </Box>
  
  </>
  )
}

export default App
