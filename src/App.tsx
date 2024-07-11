import { Box, Container } from "@mui/material";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

export default function App() {
    return (
        <Container sx={{
            width: "100vw", height: "100vh", backgroundColor: "red"
        }}>
            <SideBar />
            <MainContent />
        </Container>
    )
}