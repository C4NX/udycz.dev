import { IconType } from "./IconType";

export enum MeExperienceType {
    Work,
    Internship,
    School,
}

export enum MeExperienceStatus {
    InProgress,
    Finished,
}

export interface MeExperience {
    key: string;
    name: string;
    href: string;
    type: MeExperienceType;
    status: MeExperienceStatus;
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
    experiences: MeExperience[],
    links: MeLink[];

    // key value pair for i18n
    translation: Record<string, Record<string, string>>;
}