import { Grid } from "@mui/material";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

export default function App() {
    return (
        <Grid container sx={{ height: "100vh" }}>
            <Grid item sx={{ width: "15%" }}>
                <SideBar />
            </Grid>

            <Grid item sx={{ width: "85%" }}>
                <MainContent />
            </Grid>
        </Grid>
    );
}