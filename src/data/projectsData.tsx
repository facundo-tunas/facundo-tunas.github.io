export interface Project {
  title: string;
  description: string;
  bgDark: string[];
  bgLight: string[];
  url?: string;
  stack: string[];
}

export const mainProjectsData: Project[] = [
  {
    title: "Blog",
    description: "My personal Blog.",
    bgDark: ["/projects/blogDark.png", "/projects/blogDarkHover.png"],
    bgLight: ["/projects/blogLight.png", "/projects/blogL.png"],
    url: "https://www.google.com",
    stack: ["React", "CSS", "Express.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Photo Tagging",
    description: 'A <em>"Where\'s Waldo"</em> &nbsp;style game.',
    bgDark: ["/projects/photoTagging.png", "/projects/photoTaggingHover.png"],
    bgLight: ["/projects/photoTagging.png", "/projects/photoTaggingHover.png"],
    stack: ["React", "CSS", "Express.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "File Storage",
    description: "Project to store files using Cloudinary.",
    bgDark: ["/projects/fileStorage.png"],
    bgLight: ["/projects/fileStorage.png"],
    stack: ["React", "CSS", "Express.js", "Node.js", "PostgreSQL"],
  },
];

export const otherProjectsData: Project[] = [
  {
    title: "Bookshelf",
    description:
      "Bookshelf application built with React, using PostgreSQL for persistant storage.",
    bgDark: ["/projects/bookshelfDark.png", "/projects/bookshelfDarkHover.png"],
    bgLight: [
      "/projects/bookshelfLight.png",
      "/projects/bookshelfLightHover.png",
    ],
    url: "https://www.google.com",
    stack: ["React", "CSS", "Astro", "PostgreSQL"],
  },
  {
    title: "Minesweeper Clone",
    description:
      "Simple Minesweeper clone using vanilla JS. Saves statistics to localStorage.",
    bgDark: [
      "/projects/minesweeperClone.png",
      "/projects/minesweeperCloneHover.png",
    ],
    bgLight: [
      "/projects/minesweeperClone.png",
      "/projects/minesweeperCloneHover.png",
    ],
    url: "https://www.google.com",
    stack: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Browser Homepage",
    description:
      "Custom browser startpage, with bookmarks, smart search and different themes.",
    bgDark: [
      "/projects/browserDark.png",
      "/projects/browserDarkHover.png",
      "/projects/browserLight.png",
      "/projects/browserLightHover.png",
    ],
    bgLight: [
      "/projects/browserLight.png",
      "/projects/browserLightHover.png",
      "/projects/browserDark.png",
      "/projects/browserDarkHover.png",
    ],
    url: "https://www.google.com",
    stack: ["JavaScript", "CSS", "HTML"],
  },
  {
    title: "Portfolio Website",
    description: "The website you are currently in!",
    bgDark: ["/projects/blogDark.png"],
    bgLight: ["/projects/blogLight.png"],
    url: "https://www.google.com",
    stack: ["React", "CSS", "Astro"],
  },
];
