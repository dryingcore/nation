import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

interface NoteCardProps {
    title: string;
}

const NoteCard: React.FC<NoteCardProps> = (props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: "100%", height: "100%" }}>
            <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <CardHeader>
                        <Typography variant="body1">{props.title}</Typography>
                    </CardHeader>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NoteCard;
