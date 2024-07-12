import { Box } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    return (
        <Box sx={{ backgroundColor: 'orange', width: "100%", height: "100vh", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>

            <Box sx={{ backgroundColor: 'purple', width: "100%", padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <NoteCard title="First notion note" />
                <NoteCard title="Second notion note" />
                <NoteCard title="Third notion note" />
            </Box>
        </Box>
    );
}
