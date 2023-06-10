import { IconType } from "./IconType";

export interface MeSchool {
    name: string;
    href: string;
}

export interface MeLink {
    name: string;
    href: string;
    icon: IconType;
}

export interface Me {
    firstName: string;
    lastName: string;
    pseudo: string;
    age: number;
    school: MeSchool[],
    links: MeLink[];

    // key value pair for i18n
    translation: Record<string, Record<string, string>>;
}