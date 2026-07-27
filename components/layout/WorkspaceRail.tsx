"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navItems } from "./nav-items";

export default function WorkspaceRail() {
  const [active, setActive] = useState("home");
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      className={`sticky top-16 hidden h-[calc(100vh-4rem)] flex-col bg-gradient-to-b from-[#0E1F35] to-[#0B1929] py-5 shadow-[4px_0_24px_-8px_rgba(0,0,0,0.25)] transition-[width] duration-300 lg:flex ${
        collapsed ? "w-[72px]" : "w-[240px]"
      }`}
    >
      <div className="flex items-center px-4">
        {!collapsed && (
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5B7396]">
            Workspace
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          aria-label="Toggle workspace panel"
          className="ml-auto flex h-7 w-7 items-center justify-center rounded-md text-[#7C93B0] transition-colors hover:bg-white/5 hover:text-white"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            className={`transition-transform duration-300 ${collapsed ? "rotate-180" : ""}`}
          >
            <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <nav className="mt-4 flex flex-1 flex-col gap-1 px-2">
        {navItems.map((item) => {
          const isActive = active === item.href.replace("#", "");
          return (
            <Link
              key={item.label}
              href={item.href}
              title={collapsed ? item.label : undefined}
              className={`group relative flex items-center gap-3 rounded-lg px-2.5 py-2.5 transition-colors ${
                isActive ? "bg-white/10" : "hover:bg-white/5"
              }`}
            >
              {isActive && <span className="absolute left-0 h-5 w-[3px] rounded-r bg-[#118DFF]" />}
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                style={{ backgroundColor: `${item.color}22`, color: item.color }}
              >
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  {item.icon}
                </svg>
              </span>
              {!collapsed && (
                <div className="flex min-w-0 flex-col">
                  <span className={`truncate text-sm font-medium ${isActive ? "text-white" : "text-[#B8C6DA]"}`}>
                    {item.label}
                  </span>
                  <span className="truncate text-[10px] text-[#5B7396]">
                    {item.type}
                    {item.count ? ` · ${item.count}` : ""}
                  </span>
                </div>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/5 px-2 pt-3">
        <div className={`flex items-center gap-3 rounded-lg px-2.5 py-2.5 ${collapsed ? "justify-center" : ""}`}>
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#118DFF] to-[#0F6CBD] text-xs font-semibold text-white">
            NJ
          </div>
          {!collapsed && (
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-xs font-medium text-white">Nithish SJ</span>
              <span className="truncate text-[10px] text-[#5B7396]">Analytics Engineer</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}