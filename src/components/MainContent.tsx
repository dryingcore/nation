import { Box } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: 'orange',
                width: "100%",
                height: "100vh",
                padding: "1rem",
                gap: "1rem",
            }}
        >
            {[...Array(8).keys()].map((index) => (
                <NoteCard key={index} title={`Note ${index + 1}`} />
            ))}
        </Box>
    );
}
