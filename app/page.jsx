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
    <div className="bg-surface min-h-screen py-8 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main Grid Layout - 12 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Sidebar / Menu Area - Spans 3 cols on desktop */}
          <div className="col-span-1 md:col-span-3 lg:col-span-3 flex flex-col gap-6">
            <div className="sticky top-8">
              <SidebarNav data={portfolioData.sidebar} />
            </div>
          </div>

          {/* Content Area - Spans 9 cols on desktop */}
          <div className="col-span-1 md:col-span-9 lg:col-span-9 flex flex-col gap-6">
            
            {/* Row 1: Hero Section */}
            <Hero data={portfolioData.hero} />

            {/* Row 2: Mixed Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Articles Column (Takes 2/3 width on large screens) */}
              <div className="lg:col-span-2">
                 <ArticleList data={portfolioData.articles} />
              </div>

              {/* Tiles/Widgets Column (Takes 1/3 width on large screens) */}
              <div className="lg:col-span-1">
                <TilesStack data={portfolioData.tiles} />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
