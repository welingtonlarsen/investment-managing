import { Box } from '@mui/material';
import Header from '../../components/header';
import BrokerageNotesPage from '../brokerage-notes-table';
import BrokerageNoteFormPage from '../brokererage-note-form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/brokeragenotes/table',
    element: (
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
          <BrokerageNotesPage />
        </Box>
      </>
    ),
  },
  {
    path: '/brokeragenotes/form',
    element: (
      <>
        <Box sx={{ mb: 3 }}>
          <Header />
        </Box>
        <Box
          sx={{
            margin: {
              xs: 2,
              sm: 1,
              md: 10,
            },
          }}
        >
          <BrokerageNoteFormPage />
        </Box>
      </>
    ),
  },
]);

const LayoutPage = () => {
  return <RouterProvider router={router} />;
};

export default LayoutPage;
