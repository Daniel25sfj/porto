export default function TilesStack({ data }) {
  return (
    <div className="flex flex-col gap-4">
      {data.tiles.map((tile, idx) => {
        const isGradient = tile.classes.includes("gradient");
        const baseClasses = isGradient
          ? "bg-gradient-to-r from-brandGreen to-brandGreenDark text-white"
          : "bg-card";

        const content = (
          <>
            <h4
              className={`text-lg font-semibold ${
                isGradient ? "text-white" : "text-text"
              }`}
            >
              {tile.title}
            </h4>
            <p
              className={`text-sm ${
                isGradient ? "text-white/90" : "text-textMuted"
              }`}
            >
              {tile.subtitle}
            </p>
            {tile.badge && (
              <span className="mt-2 text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full w-fit">
                {tile.badge}
              </span>
            )}
          </>
        );

        if (tile.href) {
          return (
            <a
              key={idx}
              href={tile.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${baseClasses} rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col gap-2 cursor-pointer`}
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={idx}
            className={`${baseClasses} rounded-2xl p-6 hover:shadow-lg transition-all flex flex-col gap-2`}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}

function getIconForTile(iconName) {
  return null;
}
