export interface WorkTileData {
  jobTitle: string;
  company: string;
  startEndDate: string;
  isPresent: boolean;
  location: string;
  description: string;
}

export const workExpData: WorkTileData[] = [
  {
    jobTitle: "Senior Frontend Developer",
    company: "Baly Group",
    startEndDate: "Feb, 2023",
    isPresent: true,
    location: "Baghdad, Iraq",
    description:
      "At Baly, I'm responsible for a small team that helps build and ship new features to our Food and Grocery delivery systems, whether implementing application features and/or dashboards to monitor and manage. Using React for all of our internal systems.   ",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Masiya Net",
    startEndDate: "Mar, 2022 - Feb, 2023",
    isPresent: false,
    location: "Kuwait City, Kuwait",
    description:
      "At Masiya Net, I drive project excellence, utilizing Laravel and VueJS for full-stack development. Currently, I'm focused on enhancing the Postshipper System and successfully implementing an issue tracker system.",
  },
  {
    jobTitle: "Frontend Developer",
    company: "Capital Tech",
    startEndDate: "Jan, 2021 - Mar, 2022",
    isPresent: false,
    location: "Baghdad, Iraq",
    description:
      "Instrumental in enhancing company operations, I implemented internal systems and dynamic portals for clients. Leveraged React and Typescript to create seamless, user-centric solutions that optimized efficiency and user experience.",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Enjaz Tech",
    startEndDate: "Jan, 2018 - Jan, 2021",
    isPresent: false,
    location: "Baghdad, Iraq",
    description:
      "I led internal system implementations. Key focus on analysis software and a notification portal system, underscoring my versatile contribution to enhancing company operations. ",
  },
  {
    jobTitle: "Full Stack Developer",
    company: "Support Tech",
    startEndDate: "Dec, 2016 - Jan, 2018",
    isPresent: false,
    location: "Baghdad, Iraq",
    description:
      "Proficiently skilled in Angular and Laravel, I've been a driving force behind successfully implementing a comprehensive travel software solution and developing crucial internal systems, showcasing adaptability, innovation, and a strong commitment to the company's growth and success",
  },
];
