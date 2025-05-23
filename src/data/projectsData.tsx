export interface Project {
  title: string;
  description: string;
  bgDark: string;
  bgLight: string;
  url?: string;
  stack: string[];
}

export const mainProjectsData: Project[] = [
  {
    title: "Blog",
    description: "My personal Blog.",
    bgDark: "/projects/blogDark.png",
    bgLight: "/projects/blogLight.png",
    url: "https://www.google.com",
    stack: ["React", "CSS", "Express.js", "Node.js"],
  },
  {
    title: "Photo Tagging",
    description: 'A <em>"Where\'s Waldo"</em> &nbsp;style game.',
    bgDark: "/projects/photoTagging.png",
    bgLight: "/projects/photoTagging.png",

    stack: ["React", "CSS", "Express.js", "Node.js"],
  },
  {
    title: "File Storage",
    description: "Project to store files using Cloudinary.",
    bgDark: "/projects/fileStorage.png",
    bgLight: "/projects/fileStorage.png",
    stack: ["React", "CSS", "Express.js", "Node.js"],
  },
];

export const otherProjectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "The website you are currently on!",
    bgDark: "/projects/blogDark.png",
    bgLight: "/projects/blogLight.png",
    url: "https://www.google.com",
    stack: ["React", "CSS", "Astro"],
  },
  {
    title: "Portfolio Website",
    description: "The website you are currently on!",
    bgDark: "/projects/blogDark.png",
    bgLight: "/projects/blogLight.png",
    url: "https://www.google.com",
    stack: ["React", "CSS", "Astro"],
  },
  {
    title: "Portfolio Website",
    description: "The website you are currently on!",
    bgDark: "/projects/blogDark.png",
    bgLight: "/projects/blogLight.png",
    url: "https://www.google.com",
    stack: ["React", "CSS", "Astro"],
  },
];
