import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CharactersGrid } from './components/CharactersGrid';
import { Header } from './components/Header';


function App() {
  
  return (
    <Box>
      <CssBaseline />
      <Header />
      <Box sx={{
        padding:'40px'
      }}>
        <CharactersGrid />

      </Box>

    </Box>
  )
}

export default App
