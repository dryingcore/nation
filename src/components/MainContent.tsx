import { Box, Grid } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    // Array of titles for NoteCards
    const titles = ["a", "b", "c", "d", "e", "f"]

    return (
        <Box sx={{ display: "flex", backgroundColor: 'orange', width: "100%", height: "100vh", padding: "1rem" }}>
            <Grid container spacing={2} sx={{ width: "100%", height: "100%", overflow: "hidden", backgroundColor: 'darkgreen' }}>
                {titles.map((title, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <NoteCard title={title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
