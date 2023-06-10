import { IconTag } from "./IconTag";
import { IconType } from "./IconType";

export interface ProjectData {
    name: string;
    description: string;
    link?: string;
    icon?: IconType;
    tag?: IconTag;
}