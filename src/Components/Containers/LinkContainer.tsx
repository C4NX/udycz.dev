import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import { MeLink } from "../../Models/Me";
import IconElmt from "../Icons/IconElmt";
import { useTranslation } from "react-i18next";

interface LinkContainerProps {
    links: MeLink[];
}

export default function LinkContainer({ links }: LinkContainerProps) {
    const { t } = useTranslation();

    return (
        <List dense>
            {links?.map((link) => (
                <ListItem key={link.name}>
                    <Tooltip title={link.href} placement='top-start'>
                        <ListItemButton onClick={() => {
                            window.open(link.href, '_blank')?.focus();
                        }}>
                            <ListItemIcon>
                                <IconElmt
                                    icon={link.icon}
                                    size={25}
                                />
                            </ListItemIcon>
                            <ListItemText>
                                <strong>{link.name}</strong> • {t(`me.links.${link.name.toLowerCase()}`)}
                            </ListItemText>
                        </ListItemButton>
                    </Tooltip>
                </ListItem>
            ))}
        </List>
    )
}