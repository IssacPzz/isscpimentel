export interface Project {
  role: string;
  title: string;
  note: string;
  href: string;
}

export const projects: Project[] = [
  {
    role: "Live · 2026",
    title: "ShelfDrop",
    note: "Clearance deals across seven retailers, plus a zip-code lookup that tells you whether the thing is actually on a shelf near you.",
    href: "https://shelfdrop.live",
  },
  {
    role: "Running locally",
    title: "The Hub",
    note: "One HTML file holding my habits, goals, money, and weekly review. No account, no server. It opens instantly because it never leaves the machine.",
    href: "#",
  },
  {
    role: "Closed · Learned",
    title: "Backroad Relics",
    note: "Vintage car prints. A trademark notice from Volkswagen arrived four weeks in. I redrew every silhouette generic and learned more IP law than a class would have taught me.",
    href: "#",
  },
  {
    role: "Closed · Learned",
    title: "FinalBellCo",
    note: "Combat sports apparel on Etsy. Real sales, real ad spend, then an honest look at the numbers and a decision to stop.",
    href: "#",
  },
];
