import { Alert, AlertTitle, Grid, Link, Paper, Stack, Tooltip, Typography} from "@mui/material";
import { ProjectData } from "../../Models/Project";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Me } from "../../Models/Me";
import IconElmt from "../Icons/IconElmt";
import LinkContainer from "./LinkContainer";
import HoverZoom from "../Effects/HoverZoom";
import TypewriterEffect from "../Effects/TypewriterEffect";
import CodePaper from "./CodePaper";
import CodePaperMarkdown from "./CodePaperMarkdown";
import StepsContainer from "./StepsContainer";

/**
 * The props for the HubContainer component
 */
interface HubContainerProps {
  /**
   * The projects to display
   */
  projects?: ProjectData[];
  /**
   * Me data
   */
  me: Me;
  /**
   * Whether the page is still a work in progress
   */
  wip?: boolean;
  info?: string;
}

/**
 * A container for the projects
 */
export default function HubContainer({ projects, me, wip, info }: HubContainerProps) {
  const { t } = useTranslation();

  return (
    <Stack
      component={Paper}
      paddingBottom={0}
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
      {info && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          {info}
        </Alert>
      )}
      <Typography variant="h4">
        <TypewriterEffect>
          {'>'} {t('hub.aboutme')}
        </TypewriterEffect>
      </Typography>
      <CodePaperMarkdown title="about.txt">
        {t('me.description')}
      </CodePaperMarkdown>
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
      <Typography variant="h4">
        <TypewriterEffect writeBar>
          {'>'} {t('hub.experience')}
        </TypewriterEffect>
      </Typography>
      <CodePaper title="work.steps">
        <StepsContainer steps={me?.experiences} />
      </CodePaper>
    </Stack>
  );
}