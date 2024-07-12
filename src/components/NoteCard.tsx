import { Edit } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";

interface NoteCardProps {
    title: string;
}

const NoteCard: React.FC<NoteCardProps> = (props) => {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: "100%", height: "100%" }}>
            <Card sx={{ width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ backgroundColor: 'lightblue', display: "flex", alignItems: "center" }}>
                    <Typography variant="body1" sx={{ flexGrow: 1 }}>{props.title}</Typography>
                    <Edit sx={{ fontSize: "1.4rem", marginRight: "0.5rem" }} />
                </CardContent>

                <CardContent>
                    <Typography variant="body1">This is a note description, Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis natus aspernatur illum fugiat, assumenda officiis soluta aliquam vel excepturi modi magnam cumque sint laboriosam consequatur possimus impedit. Doloremque, vero asperiores.</Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default NoteCard;
