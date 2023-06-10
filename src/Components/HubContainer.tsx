import { Alert, AlertTitle, Grid, Link, Paper, Stack, Tooltip, Typography } from "@mui/material";
import { ProjectData } from "../Models/Project";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Me } from "../Models/Me";
import IconElmt from "./IconElmt";
import LinkContainer from "./LinkContainer";
import HoverZoom from "./HoverZoom";
import TypewriterEffect from "./TypewriterEffect";
import CodePaper from "./CodePaper";

/**
 * The props for the HubContainer component
 */
interface HubContainerProps {
  /**
   * The projects to display
   */
  projects?: ProjectData[];
  /**
   * The me data
   */
  me: Me;
  /**
   * Whether the page is still a work in progress
   */
  wip?: boolean;
}

/**
 * A container for the projects
 */
export default function HubContainer({ projects, me, wip }: HubContainerProps) {
  const { t } = useTranslation();

  return (
    <Stack
      component={Paper}
      padding={{ xs: 1, sm: 4, md: 6 }}
      spacing={2}
      maxWidth='md'
      sx={{
        background: "rgba(25,25,25,0.7)",
        color: "white",
      }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <Grid container direction='column' alignContent='center'>
          <Typography variant="h1" fontWeight="bold" textAlign='center'>
            {me?.firstName} {me?.lastName}
          </Typography>
          <Typography variant="h6" textAlign='end'>
            Aka. {me?.pseudo}
          </Typography>
        </Grid>
      </motion.div>
      {wip && (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This page is still under development, some information or features may be missing.
        </Alert>
      )}
      <Typography variant="h4">
        <TypewriterEffect>
          {'>'} {t('hub.aboutme')}
        </TypewriterEffect>
      </Typography>
      <CodePaper title="about.txt">
        <Typography textAlign='justify' p={2}>
          <code>
            {t('me.description')}
          </code>
        </Typography>
      </CodePaper>
      <Typography variant="h4">
        <TypewriterEffect>
          {'>'} {t('hub.links')}
        </TypewriterEffect>
      </Typography>
      <CodePaper title="links.lst">
        <LinkContainer links={me?.links} />
      </CodePaper>
      <Typography variant="h4">
        <TypewriterEffect writeBar>
          {'>'} {t('hub.projects')}
        </TypewriterEffect>
      </Typography>
      <CodePaper title="public-projects.slct">
        <Grid container gap={2} justifyContent='center' py={6}>
          {projects?.map((project) => (
            <HoverZoom
              key={project.name}
            >
              <Tooltip title={`${t(project.description)}${project.link ? '' : ` (${t("hub.nolink")})`}`} placement="top">
                <Link
                  href={project.link}
                  color='inherit'
                  target="_blank"
                  sx={{ textDecoration: "none" }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    gap={1}
                  >
                    <IconElmt tag={project.tag} icon={project.icon} />
                    <Typography variant="h5">{project.name}</Typography>
                  </Grid>
                </Link>
              </Tooltip>
            </HoverZoom>
          ))}
        </Grid>
      </CodePaper>
    </Stack>
  );
}