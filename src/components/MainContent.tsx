import { Box, Grid } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    // Array of titles for NoteCards
    const notes = [
        { title: "Note 1" },
        { title: "Note 2" },
        { title: "Note 3" },
        { title: "Note 4" },
        { title: "Note 5" },
        { title: "Note 6" },
        { title: "Note 7" },
        { title: "Note 8" }
    ];

    return (
        <Box sx={{ display: "flex", backgroundColor: 'orange', width: "100%", height: "100vh", padding: "1rem" }}>
            <Grid container spacing={2} sx={{ width: "100%", height: "100%", backgroundColor: 'darkred' }}>
                {notes.map(({ title }, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                        <NoteCard title={title} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
