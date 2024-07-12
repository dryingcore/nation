import { Box } from "@mui/material";
import NoteCard from "./NoteCard";

export default function MainContent() {
    // Array of titles for NoteCards
    const titles = ["Hello, world!", "Hello, Kotlin!", "John Doe", "Jane Doe", "Lorem Ipsum", "Dolor Sit"];

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
            {titles.map((title, index) => (
                <NoteCard key={index} title={title} />
            ))}
        </Box>
    );
}
