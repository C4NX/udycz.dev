import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { MeLink } from "../Models/Me";
import IconElmt from "./IconElmt";
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
                </ListItem>
            ))}
        </List>
    )
}