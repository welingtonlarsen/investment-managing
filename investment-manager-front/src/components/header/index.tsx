import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Button onClick={() => navigate('/brokeragenotes/form')} sx={{ my: 2, color: 'white', display: 'block' }}>
                Notas
              </Button>
              <Button onClick={() => navigate('/brokeragenotes/table')} sx={{ my: 2, color: 'white', display: 'block' }}>
                Relatórios
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
