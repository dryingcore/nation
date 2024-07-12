import { Box, Card, CardContent, Typography } from "@mui/material";

interface NoteCardProps {
    title: string;
}

const NoteCard: React.FC<NoteCardProps> = (props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", backgroundColor: 'blue', width: "30%", height: "30%", padding: "0.5rem" }}>
            <Card sx={{ width: "100%", height: "100%" }}>
                <CardContent>
                    <Typography variant="body1">{props.title}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NoteCard;
