import { Box, Container } from "@mui/material";

export default function MainContent() {
    return (
        <Box sx={{ backgroundColor: "white", width: "100%" }}>
            <Container sx={{ backgroundColor: "red", height: "100vh" }}>
                <h1>Main Content</h1>
            </Container>
        </Box>
    )
}