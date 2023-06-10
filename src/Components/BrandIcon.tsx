import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QuestionIcon from '@mui/icons-material/HelpOutline';
import { SxProps, Theme } from '@mui/material';
import DocumentIcon from '@mui/icons-material/Description';
import EnvelopeIcon from '@mui/icons-material/Email';

export enum BrandIconType {
    Github = "github",
    LinkedIn = "linkedin",
    Document = "document",
    Mail = "mail",
}

type BrandIconProps ={
    brand: string;
    color?: string;
    sx?: SxProps<Theme> | undefined;
};

export default function BrandIcon({brand, color, sx} : BrandIconProps) {

    const sxDefault: SxProps<Theme> = {
        ...sx,
        color: color ?? "black",
        borderRadius: "50%",
    }

    switch(brand) {
        case BrandIconType.Github:
            return <GitHubIcon sx={sxDefault}/>
        case BrandIconType.LinkedIn:
            return <LinkedInIcon sx={sxDefault}/>
        case BrandIconType.Document:
            return <DocumentIcon sx={sxDefault}/>
        case BrandIconType.Mail:
            return <EnvelopeIcon sx={sxDefault}/>
        default:
            return <QuestionIcon sx={sxDefault}/>
    }
}