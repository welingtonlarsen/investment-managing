import { Box } from "@mui/material";
import Header from "../../components/header";
import BrokerageNotesPage from "../brokerage-notes-table";

const LayoutPage = () => {
    return (
        <>
            <Box sx={{mb: 3}}>
                <Header />
            </Box>
            <BrokerageNotesPage />
        </>
    )
}

export default LayoutPage;