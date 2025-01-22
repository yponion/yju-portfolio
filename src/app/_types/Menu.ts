export const menu = [
    "Contact",
    "AboutMe",
    "Skills",
    "Archiving",
    "Projects",
] as const;

export type Menu = (typeof menu)[number];