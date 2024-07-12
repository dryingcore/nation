import { Box } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    return (
        <Box sx={{ backgroundColor: 'orange', width: "100%", height: "100vh", padding: "1rem", gap: "1rem" }}>

            <Box sx={{ backgroundColor: 'purple', width: "100%", height: "30%", padding: "1rem", gap: "1rem" }}>
                <NoteCard title="First nation note" />
                <NoteCard title="First nation note" />
                <NoteCard title="First nation note" />
            </Box>
        </Box>
    );
}