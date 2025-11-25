"use client";

import Link from "next/link";

export default function SidebarNav({ data }) {
  return (
    <aside className="bg-sidebar p-6 rounded-3xl flex flex-col gap-6 h-fit sticky top-6">
      {/* Logo Section */}
      <div className="flex flex-col gap-2">
        <Link href="/">
          <h2 className="text-lg font-semibold text-text hover:text-primary transition-colors cursor-pointer">
            {data.logo.text}
          </h2>
        </Link>
        <span className="text-xs bg-brandGreen text-primary px-3 py-1 rounded-full w-fit font-medium">
          {data.logo.badge}
        </span>
      </div>

      {/* Add New Section Button */}
      {data.actions.map((action, idx) => (
        <button
          key={idx}
          className="flex items-center gap-2 text-primary text-sm hover:opacity-80 transition-opacity"
        >
          <span className="text-lg">+</span>
          {action.label}
        </button>
      ))}

      {/* Navigation Groups */}
      {data.navGroups.map((group, idx) => (
        <nav key={idx} className="flex flex-col gap-3">
          <h3 className="text-xs uppercase tracking-[0.25em] font-semibold text-textMuted">
            {group.title}
          </h3>
          <ul className="flex flex-col gap-2">
            {group.items.map((item, itemIdx) => {
              const label = typeof item === "string" ? item : item.label;
              const href = typeof item === "string" ? "#" : item.href;

              return (
                <li key={itemIdx}>
                  <Link
                    href={href}
                    className="text-sm text-text hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ))}

      {/* Asset Cards */}
      <div className="flex flex-col gap-3 mt-4">
        {data.assetCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-card rounded-xl p-4 flex items-center gap-3 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-wider text-textMuted">
                {card.eyebrow}
              </span>
              <span className="text-sm font-semibold text-text">
                {card.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}

function getIconEmoji(iconName) {
  return null;
}
