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
        <BrokerageNotesPage />
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
        <BrokerageNoteFormPage />
      </>
    ),
  },
]);

const LayoutPage = () => {
  return <RouterProvider router={router} />;
};

export default LayoutPage;
