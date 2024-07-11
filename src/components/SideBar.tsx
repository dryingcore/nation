import { Search } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

export default function SideBar() {
    return (
        <Box sx={{ backgroundColor: 'red', width: "15%", height: "100vh" }}>
            <Grid container sx={{ backgroundColor: "blue" }}>
                <Grid item xs={12} sx={{ backgroundColor: "green" }}>
                    <Search sx={{ fontSize: "1.4rem" }} />
                    <Typography variant="body1">Search</Typography>
                </Grid>

                <Grid item xs={12} sx={{ backgroundColor: "yellow" }}>
                    <Typography variant="body1">Home</Typography>
                </Grid>

                <Grid item xs={12} sx={{ backgroundColor: "purple" }}>
                    <Typography variant="body1">Inbox</Typography>
                </Grid>

                <Grid item xs={12} sx={{ backgroundColor: "orange" }}>
                    <Typography variant="body1">Settings & Members</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}