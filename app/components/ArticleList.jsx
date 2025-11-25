export default function ArticleList({ data }) {
  return (
    <div className="flex flex-col gap-4">
      {data.cards.map((card, idx) => (
        <article
          key={idx}
          className="bg-card rounded-2xl p-6 flex gap-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex-1 flex flex-col gap-3">
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
