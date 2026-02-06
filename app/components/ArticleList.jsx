export default function ArticleList({ data }) {
  return (
    <div className="flex flex-col gap-3">
      {data.cards.map((card, idx) => (
        <article
          key={idx}
          className="bg-card rounded-2xl p-5 flex flex-col sm:flex-row gap-6 shadow-sm hover:shadow-lg transition-all group"
        >
          {card.media && (
             <div className="w-full sm:w-48 h-48 sm:h-auto bg-gradient-to-br from-surface to-divider rounded-xl shrink-0 flex items-center justify-center">
                <span className="text-textMuted/20 text-4xl">✦</span>
             </div>
          )}
          <div className="flex-1 flex flex-col gap-3 justify-center">
            <div className="flex items-center gap-2 text-sm text-textMuted">
              <span className="font-medium text-text">{card.author}</span>
              <span>•</span>
              <span>{card.timeAgo}</span>
            </div>
            <h3 className="text-xl font-semibold text-text">{card.title}</h3>
            <p className="text-base leading-relaxed text-textMuted">
              {card.excerpt}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
