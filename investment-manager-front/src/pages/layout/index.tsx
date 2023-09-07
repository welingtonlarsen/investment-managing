import { Box } from '@mui/material';
import Header from '../../components/header';
import BrokerageNotesPage from '../brokerage-notes-table';
import BrokerageNoteFormPage from '../brokererage-note-form';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from '../../App.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/table',
        element: <BrokerageNotesPage />,
      },
      {
        path: '/form',
        element: <BrokerageNoteFormPage />,
      },
    ],
  },
]);
const LayoutPage = () => {
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Header />
      </Box>
      <Box
        sx={{
          margin: {
            xs: 0,
            sm: 1,
            md: 2,
          },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default LayoutPage;
