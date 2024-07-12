import { Box, Card, CardContent, Typography } from "@mui/material";

interface NoteCardProps {
    title: string;
}

const NoteCard: React.FC<NoteCardProps> = (props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center" ,backgroundColor: 'blue', height: "30%", padding: "1rem" }}>
            <Card sx={{ width: "20%", height: "100%" }}>
                <CardContent>
                    <Typography variant="body1">{props.title}</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NoteCard;
