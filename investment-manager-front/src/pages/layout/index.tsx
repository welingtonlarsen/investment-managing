import { Box } from '@mui/material';
import Header from '../../components/header';
import BrokerageNotesPage from '../brokerage-notes-table';
import BrokerageNoteFormPage from '../brokererage-note-form';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/brokeragenotes/table',
    element: <BrokerageNotesPage />,
  },
  {
    path: '/brokeragenotes/form',
    element: <BrokerageNoteFormPage />,
  },
]);

const LayoutPage = () => {
  return (
    <>
      <Box sx={{ mb: 3 }}>
        <Header />
      </Box>
      <RouterProvider router={router} />
      {/* <BrokerageNotesPage />
            <BrokerageNoteForm /> */}
    </>
  );
};

export default LayoutPage;
