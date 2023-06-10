import HubContainer from "./Components/HubContainer"
import './App.css'
import { Grid } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import "@fontsource/roboto/700.css";
import LanguageSwitcher from "./Components/LanguageSwitcher";
import BackgroundParticles from "./Components/BackgroundParticles";
import { MyMe } from "./Data/MyMe";
import { MyProjects } from "./Data/MyProjects";

function App() {
  return (
    <>
      <BackgroundParticles />
      <LanguageSwitcher />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          position: "absolute",
          zIndex: 1,
        }}
        height="100%"
      >
        <HubContainer
          projects={MyProjects}
          me={MyMe}
          wip
        />
      </Grid>
    </>
  );
}

export default App