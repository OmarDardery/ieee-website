export type EventItem = {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  endpoint: string;
  belongsToASociety: boolean;
  society: string; // empty string when global
  postedDate: Date; // when the event was announced
};

export const events: EventItem[] = [
  {
    id: "ai-summit-2025",
    title: "AI Summit 2025",
    description:
      "A full-day summit exploring practical AI applications, ethics, and career paths for engineers.",
    startDate: new Date("2025-02-14T09:00:00"),
    endDate: new Date("2025-02-14T17:00:00"),
    endpoint: "/events/ai-summit-2025",
    belongsToASociety: true,
    society: "Computer Society",
    postedDate: new Date("2024-12-15T10:00:00"),
  },
  {
    id: "comsoc-5g-forum",
    title: "ComSoc 5G/6G Forum",
    description:
      "Deep dive into next-gen wireless, spectrum sharing, and edge-cloud convergence with demos.",
    startDate: new Date("2025-02-28T15:00:00"),
    endDate: new Date("2025-02-28T18:00:00"),
    endpoint: "/events/comsoc-5g-forum",
    belongsToASociety: true,
    society: "ComSoc",
    postedDate: new Date("2025-01-05T09:00:00"),
  },
  {
    id: "embedded-workshop",
    title: "Embedded Systems Workshop",
    description:
      "Hands-on lab covering microcontrollers, sensor integration, and low-power design patterns.",
    startDate: new Date("2025-03-02T10:00:00"),
    endDate: new Date("2025-03-03T16:00:00"),
    endpoint: "/events/embedded-workshop",
    belongsToASociety: true,
    society: "Robotics and Automation",
    postedDate: new Date("2025-01-20T12:00:00"),
  },
  {
    id: "robotics-build-night",
    title: "Robotics Build Night",
    description:
      "Team build session focusing on drivetrain tuning, sensor fusion basics, and control loops.",
    startDate: new Date("2025-03-12T17:30:00"),
    endDate: new Date("2025-03-12T20:30:00"),
    endpoint: "/events/robotics-build-night",
    belongsToASociety: true,
    society: "Robotics and Automation",
    postedDate: new Date("2025-02-10T18:00:00"),
  },
  {
    id: "green-energy-panel",
    title: "Green Energy Panel",
    description:
      "Panel discussion on sustainable energy solutions with industry experts and alumni.",
    startDate: new Date("2025-04-10T13:30:00"),
    endDate: new Date("2025-04-10T15:30:00"),
    endpoint: "/events/green-energy-panel",
    belongsToASociety: true,
    society: "SIGHT",
    postedDate: new Date("2025-02-25T11:00:00"),
  },
  {
    id: "sight-community-power",
    title: "SIGHT Community Power Sprint",
    description:
      "Design sprint to prototype low-cost energy monitoring for underserved communities.",
    startDate: new Date("2025-04-22T10:00:00"),
    endDate: new Date("2025-04-22T14:00:00"),
    endpoint: "/events/sight-community-power",
    belongsToASociety: true,
    society: "SIGHT",
    postedDate: new Date("2025-03-05T09:30:00"),
  },
  {
    id: "hackathon",
    title: "IEEE Spring Hackathon",
    description:
      "48-hour team challenge to design and prototype solutions for community impact.",
    startDate: new Date("2025-05-16T18:00:00"),
    endDate: new Date("2025-05-18T18:00:00"),
    endpoint: "/events/ieee-spring-hackathon",
    belongsToASociety: false,
    society: "",
    postedDate: new Date("2025-03-12T08:00:00"),
  },
  {
    id: "career-fair",
    title: "Tech Careers Meetup",
    description:
      "Meet recruiters and alumni for resume reviews, mock interviews, and internship pathways.",
    startDate: new Date("2025-06-05T11:00:00"),
    endDate: new Date("2025-06-05T15:00:00"),
    endpoint: "/events/tech-careers-meetup",
    belongsToASociety: false,
    society: "",
    postedDate: new Date("2025-04-01T10:00:00"),
  },
  {
    id: "web-security-lab",
    title: "Web Security Lab",
    description:
      "Hands-on lab covering OWASP Top 10, secure auth flows, and practical mitigation exercises.",
    startDate: new Date("2025-03-25T14:00:00"),
    endDate: new Date("2025-03-25T17:00:00"),
    endpoint: "/events/web-security-lab",
    belongsToASociety: true,
    society: "Computer Society",
    postedDate: new Date("2025-02-18T15:00:00"),
  },
  {
    id: "comsoc-satellite-bootcamp-2026",
    title: "ComSoc Satellite Comms Bootcamp",
    description:
      "Weekend intensive on link budgets, modulation schemes, and building a tiny satcom ground station.",
    startDate: new Date("2026-01-19T09:30:00"),
    endDate: new Date("2026-01-20T16:30:00"),
    endpoint: "/events/comsoc-satellite-bootcamp-2026",
    belongsToASociety: true,
    society: "ComSoc",
    postedDate: new Date("2025-11-15T10:00:00"),
  },
  {
    id: "ras-autonomy-week-2026",
    title: "RAS Autonomy Week",
    description:
      "Five-day sprint on perception, planning, and control with daily robot field tests and retro sessions.",
    startDate: new Date("2026-03-04T10:00:00"),
    endDate: new Date("2026-03-08T18:00:00"),
    endpoint: "/events/ras-autonomy-week-2026",
    belongsToASociety: true,
    society: "Robotics and Automation",
    postedDate: new Date("2025-12-10T09:00:00"),
  },
  {
    id: "sight-climate-hack-2026",
    title: "SIGHT Climate Resilience Hack",
    description:
      "Design data-driven tools for flood early warning, resilient microgrids, and community response.",
    startDate: new Date("2026-05-10T09:00:00"),
    endDate: new Date("2026-05-12T17:00:00"),
    endpoint: "/events/sight-climate-hack-2026",
    belongsToASociety: true,
    society: "SIGHT",
    postedDate: new Date("2026-01-05T12:00:00"),
  },
  {
    id: "global-makerfest-2026",
    title: "IEEE Global MakerFest",
    description:
      "Campus-wide maker fair with demos, lightning talks, and project showcases across all disciplines.",
    startDate: new Date("2026-02-15T11:00:00"),
    endDate: new Date("2026-02-15T18:00:00"),
    endpoint: "/events/global-makerfest-2026",
    belongsToASociety: false,
    society: "",
    postedDate: new Date("2025-12-20T14:00:00"),
  },
];
