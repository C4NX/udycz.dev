export interface Tag {
    name: string;
    icon: string;
    href: string;
}

export interface PortfolioLink {
    name: string
    href: string
    icon?: string,
    tooltip?: string,
}

export enum ProjectStatus {
    InProgress = 'inprogress',
    Completed = 'completed',
    Deprecated = 'deprecated',
}

export interface Project {
    id: string;
    tags: Tag[];
    status: ProjectStatus;
    imageSrc?: string;
    isFeatured?: boolean;
    sourceHref?: string;
    demoHref?: string;
}

export interface Portfolio {
    firstName: string,
    lastName: string,
    email: string,
    birthDate: Date,
    links?: PortfolioLink[],
    services?: PortfolioLink[],
    technologies?: Tag[],
    projects?: Project[],
}