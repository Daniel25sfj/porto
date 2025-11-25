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
        items: [
          { label: "Om meg", href: "/about" },
          { label: "Kontakt", href: "/kontakt" },
        ],
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
        timeAgo: "Nylig oppdatert",
        title: "Design System Arkitektur",
        excerpt:
          "Hvordan jeg strukturerer mine designsystemer for skalerbarhet og gjenbrukbarhet i moderne webapplikasjoner.",
        media: true,
      },
      {
        author: "Meg",
        timeAgo: "1 uke siden",
        title: "3D Karakter Design",
        excerpt:
          "En gjennomgang av prosessen fra skisse til ferdig render av 3D-karakterer for spill og media.",
        media: true,
      },
    ],
  },
  tiles: {
    tiles: [
      {
        title: "Iconography",
        subtitle: "Se samling",
        icon: "palette",
        classes: ["gradient"],
      },
      {
        title: "Farge Disco",
        subtitle: "Random fargekombinasjoner",
        icon: "palette",
        classes: ["gradient"],
        href: "https://color-orpin-phi.vercel.app/",
      },
      {
        title: "3D Models",
        subtitle: "Utforsk modeller",
        icon: "cube",
        classes: ["gradient"],
      },
      {
        title: "Spot Illustrations",
        subtitle: "Illustrasjonsgalleri",
        icon: "sparkles",
        classes: ["gradient"],
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-surface py-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Two Column Layout */}
        <div className="flex gap-6">
          {/* Left Sidebar - 3/12 width */}
          <div className="w-3/12">
            <SidebarNav data={portfolioData.sidebar} />
          </div>

          {/* Right Content - 9/12 width */}
          <div className="w-9/12 flex flex-col gap-6">
            {/* Hero Section */}
            <Hero data={portfolioData.hero} />

            {/* Knowledge Grid */}
            <div className="grid grid-cols-6 gap-6">
              {/* Article List - 4 columns */}
              <div className="col-span-4">
                <ArticleList data={portfolioData.articles} />
              </div>

              {/* Tiles Stack - 2 columns */}
              <div className="col-span-2">
                <TilesStack data={portfolioData.tiles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
