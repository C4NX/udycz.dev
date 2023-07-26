import {Chip, Grid, IconButton, Step, StepContent, Stepper, Typography} from "@mui/material";
import {MeExperience, MeExperienceStatus} from "../../Models/Me";
import {useTranslation} from "react-i18next";
import LaunchIcon from '@mui/icons-material/Launch';
import PendingIcon from '@mui/icons-material/Pending';
import DoneIcon from '@mui/icons-material/Done';

interface StepsContainerProps {
    steps: MeExperience[];
}

export default function StepsContainer({steps}: StepsContainerProps) {

    const {t} = useTranslation();

    return (
        <Stepper orientation='vertical' sx={{p: 2}}>
            {steps?.map((step) => (
                <Step key={step.key} active={true}>
                    <Grid container gap={1} pl={1} alignItems='center' sx={{
                        direction: {
                            xs: 'column',
                            md: 'row'
                        }
                    }}>
                        <Chip
                            label={t(`experience.status.${step.status}`)}
                            icon={step.status === MeExperienceStatus.InProgress ? <PendingIcon/> : <DoneIcon/>}
                            color={step.status === MeExperienceStatus.InProgress ? 'info' : 'success'}
                            size='small'
                        />
                        <Typography fontWeight='bold'>
                            {step.name}
                        </Typography>
                        <IconButton
                            sx={{
                                display: {
                                    xs: 'none',
                                    md: 'inline-flex'
                                }
                            }}
                            onClick={() => {
                                window.open(step.href, '_blank')?.focus();
                            }}>
                            <LaunchIcon fontSize='small'/>
                        </IconButton>
                    </Grid>
                    <StepContent>
                        <Typography textAlign='justify'>
                            {t(`experience.${step.key.toLowerCase()}.description`)}
                        </Typography>
                    </StepContent>
                </Step>
            ))}
        </Stepper>
    )
}