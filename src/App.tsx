import { Box } from "@mui/material";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

export default function App() {
    return (
        <Box sx={{ display: "flex" }}>
            <SideBar />
            <MainContent />
        </Box>
    )
}