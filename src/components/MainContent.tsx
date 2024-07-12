import { Box, Grid } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    return (
        <Box sx={{ backgroundColor: 'orange', width: "100%", height: "100vh", padding: "1rem", gap: "1rem" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <NoteCard title="First notion note" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NoteCard title="Second notion note" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <NoteCard title="Third notion note" />
                </Grid>
            </Grid>
        </Box>
    );
}
