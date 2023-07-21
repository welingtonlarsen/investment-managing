import { Box } from "@mui/material";
import Header from "../../components/header";
import IncomePage from "../income";

const LayoutPage = () => {
    return (
        <>
            <Box sx={{mb: 3}}>
                <Header />
            </Box>
            <IncomePage />
        </>
    )
}

export default LayoutPage;