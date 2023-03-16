import { Box, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CharactersGrid } from './components/CharactersGrid';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


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
          <CharactersGrid cardsAmount={14}/>
        </Box>
      </Box>
    </Box>
  
  </>
  )
}

export default App
