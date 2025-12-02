import SidebarNav from "../../components/SidebarNav";
import ArticleList from "../../components/ArticleList";

const sidebarData = {
  logo: { text: "Min Portfolio" },
  actions: [],
  navGroups: [
    {
      title: "Meny",
      items: [
        { label: "Om meg", href: "/about" },
      ],
    },
  ],
  assetCards: [],
};

const mockDocs = {
  cards: [
    {
      author: "Økonomiavdelingen",
      timeAgo: "2 timer siden",
      title: "Årsrapport 2024",
      excerpt:
        "En oppsummering av årets nøkkeltall og resultater, inkludert vekst i brukerbase og omsetning for det foregående året.",
      media: true,
    },
    {
      author: "IT Support",
      timeAgo: "1 dag siden",
      title: "Sikkerhetsrutiner v3.1",
      excerpt:
        "Nye retningslinjer for passordhåndtering, tofaktorautentisering og sikker bruk av hjemmekontorløsninger.",
      media: false,
    },
    {
      author: "HR",
      timeAgo: "3 dager siden",
      title: "Personalhåndbok 2025",
      excerpt:
        "Oppdatert informasjon om ferieavvikling, permisjonsregler og oversikt over ansattgoder og forsikringer.",
      media: false,
    },
    {
      author: "Produktteamet",
      timeAgo: "1 uke siden",
      title: "Produktveikart Q1-Q2",
      excerpt:
        "Strategisk plan for produktutvikling det neste halvåret, inkludert lansering av nye funksjoner og forbedringer.",
      media: true,
    },
  ],
};

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-surface py-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-6">
          <div className="w-3/12">
            <SidebarNav data={sidebarData} />
          </div>
          <div className="w-9/12">
            <h1 className="text-3xl font-bold mb-6 text-text">Dokumenter</h1>
            <ArticleList data={mockDocs} />
          </div>
        </div>
      </div>
    </div>
  );
}
