import { Avatar, Badge } from "@mui/material";
import { IconTag } from "../../Models/IconTag";
import { IconType, IconTypeEnum } from "../../Models/IconType";
import BrandIcon from "./BrandIcon";

interface IconElmtProps {
    tag?: IconTag;
    icon?: IconType;
    size?: number;
}

export default function IconElmt({ tag, icon, size = 64 }: IconElmtProps) {

    const sxDefault = {
        width: size,
        height: size,
        backgroundColor: 'white',
        p: 1
    }

    return (
        <Badge badgeContent={tag?.value} color={tag?.type}>
            {icon && icon.type === IconTypeEnum.Url && (
                <Avatar
                    src={icon.value}
                    sx={sxDefault}
                />)}
            {icon && icon.type === IconTypeEnum.Brand && (
                <BrandIcon
                    brand={icon.value}
                    color={icon.color}
                    sx={{ ...sxDefault, color: 'black' }}
                />)}
        </Badge>
    )
}