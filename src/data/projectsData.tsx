export interface Project {
  title: string;
  description: string;
  bgDark: string[];
  bgLight: string[];
  url: string;
  stack: string[];
  live: boolean;
}

export const mainProjectsData: Project[] = [
  {
    title: "Blog",
    description: "My personal Blog.",
    bgDark: [
      "/projects/blogDark.png",
      "/projects/blogDarkHover.png",
      "/projects/blogLogin.png",
    ],
    bgLight: [
      "/projects/blogLight.png",
      "/projects/blogLightHover.png",
      "/projects/blogLogin.png",
    ],
    url: "https://odin-blog-frontend.vercel.app/",
    stack: ["React", "CSS", "Express.js", "Node.js", "PostgreSQL", "Prisma"],
    live: true,
  },
  {
    title: "Photo Tagging",
    description: 'A <em>"Where\'s Waldo"</em> &nbsp;style game.',
    bgDark: ["/projects/photoTagging.png", "/projects/photoTaggingHover.png"],
    bgLight: ["/projects/photoTagging.png", "/projects/photoTaggingHover.png"],
    stack: ["React", "CSS", "Express.js", "Node.js", "PostgreSQL"],
    url: "https://pfm-photo-tagging-frontend.vercel.app/",
    live: true,
  },
  {
    title: "File Storage",
    description: "Project to store files using Cloudinary.",
    bgDark: ["/projects/fileStorage.png", "/projects/fileStorageHover.png"],
    bgLight: ["/projects/fileStorage.png", "/projects/fileStorageHover.png"],
    stack: ["React", "CSS", "Express.js", "Node.js", "PostgreSQL", "Prisma"],
    url: "https://github.com/Uruwhy1/pfm-fileUploader",
    live: false,
  },
];

export const otherProjectsData: Project[] = [
  {
    title: "Bookshelf",
    description:
      "Bookshelf application built with React, using PostgreSQL for persistant storage.",
    bgDark: [
      "/projects/bookshelfDark.png",
      "/projects/bookshelfDarkHover.png",
      "/projects/bookshelfLight.png",
      "/projects/bookshelfLightHover.png",
    ],
    bgLight: [
      "/projects/bookshelfLight.png",
      "/projects/bookshelfLightHover.png",
      "/projects/bookshelfDark.png",
      "/projects/bookshelfDarkHover.png",
    ],
    url: "https://github.com/Uruwhy1/pfm-inventoryApp",
    live: false,
    stack: ["React", "CSS", "Astro", "PostgreSQL"],
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
    url: "https://uruwhy1.github.io/browser-homepage/dist/index.html",
    live: true,
    stack: ["TypeScript", "CSS", "HTML"],
  },
  {
    title: "Gaming Clips Viewer",
    description: "Tauri app to display and manage gaming clips.",
    bgLight: [
      "/projects/clipsViewer.png",
      "/projects/clipsViewerLight.png",
      "/projects/clipsViewerDark.png",
      "/projects/clipsViewerDark1.png",
    ],
    bgDark: [
      "/projects/clipsViewer.png",
      "/projects/clipsViewerDark.png",
      "/projects/clipsViewerDark1.png",
      "/projects/clipsViewerLight.png",
    ],
    url: "https://github.com/Uruwhy1/clips-viewer",
    live: false,
    stack: ["React", "TypeScript", "CSS", "Tauri", "Rust"],
  },
  {
    title: "Messaging App",
    description: "A real-time messaging application using Websockets.",
    bgDark: [
      "/projects/messagingDark.png",
      "/projects/messagingLight.png",
      "/projects/messagingLogin.png",
    ],
    bgLight: [
      "/projects/messagingLight.png",
      "/projects/messagingDark.png",
      "/projects/messagingLogin.png",
    ],
    url: "https://github.com/Uruwhy1/messagingApp",
    live: false,
    stack: ["CSS", "Node.js", "Express.js", "React"],
  },
  {
    title: "Portfolio Page",
    description: "The page you are currently in!",
    bgDark: [
      "/projects/portfolioDark.png",
      "/projects/portfolioDark1.png",
      "/projects/portfolioLight.png",
      "/projects/portfolioLight1.png",
    ],
    bgLight: [
      "/projects/portfolioLight.png",
      "/projects/portfolioLight1.png",
      "/projects/portfolioDark.png",
      "/projects/portfolioDark1.png",
    ],
    url: "",
    live: true,
    stack: ["TypeScript", "React", "Astro", "CSS"],
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
    url: "https://uruwhy1.github.io/pfl-minesweeperClone/",
    live: true,
    stack: ["JavaScript", "CSS", "HTML"],
  },
];
