import { Edit } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface NoteCardProps {
    title: string;
}

const NoteCard: React.FC<NoteCardProps> = (props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: "100%", height: "100%" }}>
            <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1, backgroundColor: 'lightblue', display: "flex" }}>
                    <Typography variant="body1">{props.title}</Typography>
                    <Edit sx={{ fontSize: "1.4rem", marginRight: "0.5rem" }} />
                </CardContent>

                <CardContent>
                    <Typography variant="body1">This is a note</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NoteCard;
