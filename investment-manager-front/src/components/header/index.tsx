import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <Button component={Link} to={'/form'} sx={{ my: 2, color: 'white', display: 'block' }}>
              REGISTRAR
            </Button>
            <Button component={Link} to={'/table'} sx={{ my: 2, color: 'white', display: 'block' }}>
              LISTAGEM
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
