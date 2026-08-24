"use client";

import { useState } from "react";
import Link from "next/link";
import { SectionHeader } from "./section-header";
import { Reveal } from "./reveal";
import { ArrowUpRight } from "./icons";
import { projects } from "@/lib/projects";

const filters = [
  { key: "all", label: "All" },
  { key: "client", label: "Client Work" },
  { key: "personal", label: "Personal" },
] as const;

type FilterKey = (typeof filters)[number]["key"];

export function WorkSection() {
  const [active, setActive] = useState<FilterKey>("all");

  const visible = projects.filter((p) => active === "all" || p.category === active);

  return (
    <section id="work" className="scroll-mt-24 bg-canvas px-4 py-[var(--space-section-y)] sm:px-6">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeader label="Selected Work" ghost="Work" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActive(f.key)}
                  aria-pressed={active === f.key}
                  className={`rounded-pill px-4 py-2 text-sm font-medium transition-colors ${
                    active === f.key
                      ? "bg-ink text-inverse"
                      : "bg-tag-bg text-body hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive("all")}
              className="lift inline-flex w-fit items-center gap-1.5 rounded-pill bg-white-pill px-5 py-2.5 text-sm font-medium text-ink shadow-[var(--shadow-pill)] hover:shadow-[var(--shadow-hover)]"
            >
              View All
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 md:grid-cols-2 md:gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={i * 80} className="h-full">
              <article className="lift flex h-full flex-col overflow-hidden rounded-card bg-white shadow-[var(--shadow-card)]">
                <div className="relative flex aspect-[16/10] items-center justify-center bg-ink-soft px-6">
                  <span className="font-display text-2xl font-extrabold uppercase tracking-[-0.02em] text-inverse/90 sm:text-3xl">
                    {project.name}
                  </span>
                  <span className="absolute bottom-3 right-4 text-2xs uppercase tracking-widest text-inverse/40">
                    Image coming soon
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold tracking-[-0.01em] text-ink">
                      {project.name}
                    </h3>
                    {project.url && (
                      <Link
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex shrink-0 items-center gap-1 text-xs font-medium text-body hover:text-ink"
                      >
                        {project.url}
                        <ArrowUpRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                  <p className="mt-3 text-sm leading-[1.6] text-body">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill bg-tag-bg px-3 py-1 text-2xs font-medium text-body"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
