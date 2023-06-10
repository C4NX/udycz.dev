import { Paper, Typography } from "@mui/material";

interface CodePaper {
    children: React.ReactNode | React.ReactNode[] | string | string[];
    title: string;
    textAlign?: "left" | "center" | "right" | "justify" | undefined;
}

export default function CodePaper({ children, title }: CodePaper) {
    return (
        <Paper elevation={24}>
            <Paper sx={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                <Typography p={1} fontWeight='bold'>
                    {title}
                </Typography>
            </Paper>
            {children}
        </Paper>
    )
}