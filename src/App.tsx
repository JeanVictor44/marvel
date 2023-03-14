import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CharactersGrid } from './components/CharactersGrid';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';


function App() {
  
  return (
    <>
    <CssBaseline />
    <Box display="grid" gridTemplateColumns="250px 1fr">
      <Box>
        <Sidebar />
      </Box>
      
      <Box >
        <Header />
        <Box sx={{
          padding:'40px',
          display:"grid",
          gridTemplateColumns:"1fr 500px"
        }}>
          <CharactersGrid />

        </Box>
      </Box>
    </Box>
  
  </>
  )
}

export default App
