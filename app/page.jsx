import SidebarNav from "./components/SidebarNav";
import Hero from "./components/Hero";
import ArticleList from "./components/ArticleList";
import TilesStack from "./components/TilesStack";

const portfolioData = {
  sidebar: {
    logo: { text: "Min Portfolio" },
    actions: [],
    navGroups: [
      {
        title: "Meny",
        items: [{ label: "Om meg", href: "/about" }],
      },
    ],
    assetCards: [],
  },
  hero: {
    image: "/thumbnail.jpg",
    content: {
      kicker: "Velkommen",
      title: "Hei, jeg er en kreativ utvikler og designer",
      body: "Dette er min portfolio hvor jeg samler mine prosjekter innen ikonografi, 3D-modellering og illustrasjon. Utforsk mine arbeider nedenfor.",
    },
    cta: { label: "Front-end utvikler" },
  },
  articles: {
    cards: [
      {
        author: "Meg",
        timeAgo: "15. januar 2026",
        title: "Portfolio",
        excerpt:
          "Utforsk mine nyeste prosjekter og arbeider innen design, utvikling og kreativ teknologi.",
        media: true,
      },
      {
        author: "Meg",
        timeAgo: "15. januar 2026",
        title: "La til AI PDF Reader",
        excerpt: "logg inn med clerk og test ut!",
        media: true,
      },
    ],
  },
  tiles: {
    tiles: [
      {
        title: "GamingPortal",
        subtitle: "jobbes forløpig med",
        icon: "palette",
        classes: ["gradient"],
        href: "https://test1-ashen-mu.vercel.app/",
      },
      {
        title: "Farge Disco",
        subtitle: "Random fargekombinasjoner",
        icon: "palette",
        classes: ["gradient"],
        href: "https://color-orpin-phi.vercel.app/",
      },
      {
        title: "Ai pdf leser",
        subtitle: "test ut!",
        icon: "cube",
        classes: ["gradient"],
        href: "https://pdf-ai-reader-indol.vercel.app/",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="bg-surface py-6 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Left Sidebar - 3/12 width */}
          <div className="w-full md:w-3/12">
            <SidebarNav data={portfolioData.sidebar} />
          </div>

          {/* Right Content - 9/12 width */}
          <div className="w-full md:w-9/12 flex flex-col gap-4">
            {/* Hero Section */}
            <Hero data={portfolioData.hero} />

            {/* Knowledge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {/* Article List - 4 columns */}
              <div className="col-span-1 md:col-span-4">
                <ArticleList data={portfolioData.articles} />
              </div>

              {/* Tiles Stack - 2 columns */}
              <div className="col-span-1 md:col-span-2">
                <TilesStack data={portfolioData.tiles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
