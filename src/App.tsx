import HubContainer from "./Components/Containers/HubContainer"
import './App.css'
import {createTheme, Grid, ThemeProvider} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "@fontsource/roboto/700.css";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import BackgroundParticles from "./Components/Effects/BackgroundParticles";
import {MyMe} from "./Data/MyMe";
import {MyProjects} from "./Data/MyProjects";

function App() {

    const theme = createTheme({
        palette: {
            mode: 'dark',
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <BackgroundParticles/>
            <LanguageSwitcher/>
            <Grid
                container
                justifyContent="center"
                alignItems="center"
                height="100%"
                sx={{
                    position: "absolute",
                    zIndex: 1,
                }}
            >
                <HubContainer
                    projects={MyProjects}
                    me={MyMe}
                    wip
                />
            </Grid>
        </ThemeProvider>
    );
}

export default App