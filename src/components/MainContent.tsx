import { Box } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    return (
        <Box sx={{ backgroundColor: 'orange', width: "100%", height: "100vh", padding: "1rem", gap: "1rem" }}>
            <NoteCard title="Hello, world!" />
            <NoteCard title="Hello, Kotlin!" />
            <NoteCard title="John Doe" />
        </Box>
    );
}