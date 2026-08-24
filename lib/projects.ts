export interface Project {
  name: string;
  url?: string;
  description: string;
  tags: string[];
  category: "client" | "personal";
}

export const projects: Project[] = [
  {
    name: "ShelfDrop",
    url: "shelfdrop.live",
    description:
      "Retail clearance aggregator. Next.js on Vercel, custom domain, 7 retailer pages, zip-code store locator, email capture.",
    tags: ["Next.js", "Live Site"],
    category: "client",
  },
  {
    name: "The Hub",
    description:
      "Self-contained personal command center. Habit tracking, goals, financial view, Kanban pipeline, weekly review, and an advisory panel modeled on people I learn from. Runs entirely local.",
    tags: ["HTML", "Personal Tool"],
    category: "personal",
  },
  {
    name: "Backroad Relics",
    description:
      "Vintage automotive print-on-demand store. Full DNS and email auth setup, Printify integration, 50-design production plan. Got an IP notice from Volkswagen and pivoted to generic silhouettes — an education in trademark law I didn't expect.",
    tags: ["Shopify", "Design"],
    category: "personal",
  },
  {
    name: "FinalBellCo",
    description:
      "Combat sports apparel on Etsy. Five design templates, a full tag and title system, paid ad testing. Reached first sales, then read the data honestly and paused it.",
    tags: ["Etsy", "Print on Demand"],
    category: "personal",
  },
];
