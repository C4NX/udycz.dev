import { ProjectData } from "../Models/Project";
import { GithubIcon } from "./MyIcons";

export const MyProjects: ProjectData[] = [
    {
        name: "udycz.dev",
        description: "This website (Work in progress)",
        link: "https://github.com/C4NX/udycz.dev",
        tag: {
            type: "success",
            value: "Active"
        },
        icon: GithubIcon,
    },
    {
        name: "DotNetPonies",
        description: "A library to interact with the PonyTown API (https://pony.town/)",
        link: "https://github.com/C4NX/DotNetPonies",
        tag: {
            type: "info",
            value: "Scheduled"
        },
        icon: GithubIcon,
    },
    {
        name: "OWC",
        description: "OuterWildsCoop was a test to see if it was possible to make a coop mod for Outer Wilds.",
        link: "https://github.com/C4NX/OuterWildsCoop",
        tag: {
            type: "warning",
            value: "Archived"
        },
        icon: GithubIcon,
    },
]