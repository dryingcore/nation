import { Search } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";

function SideBar() {
    return (
        <Box sx={{ backgroundColor: 'red', width: "100%", height: "100vh", padding: "1rem" }}>
            <Grid container direction="column" spacing={2}>
                <Grid item sx={{ display: "flex", alignItems: "center", backgroundColor: "green", padding: "0.5rem" }}>
                    <Search sx={{ fontSize: "1.4rem", marginRight: "0.5rem" }} />
                    <Typography variant="body1">Search</Typography>
                </Grid>

                <Grid item sx={{ display: "flex", alignItems: "center", backgroundColor: "yellow", padding: "0.5rem" }}>
                    <Typography variant="body1">Home</Typography>
                </Grid>

                <Grid item sx={{ display: "flex", alignItems: "center", backgroundColor: "purple", padding: "0.5rem" }}>
                    <Typography variant="body1">Inbox</Typography>
                </Grid>

                <Grid item sx={{ display: "flex", alignItems: "center", backgroundColor: "orange", padding: "0.5rem" }}>
                    <Typography variant="body1">Settings & Members</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}