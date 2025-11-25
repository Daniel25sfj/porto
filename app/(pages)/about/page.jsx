import SidebarNav from "../../components/SidebarNav";

const sidebarData = {
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
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface py-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-3/12">
            <SidebarNav data={sidebarData} />
          </div>

          {/* Main Content */}
          <div className="w-9/12">
            <h1 className="text-3xl font-bold mb-6 text-text">Om meg</h1>
            <div className="bg-card rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="space-y-4 flex-1">
                  <div>
                    <h2 className="text-2xl font-semibold text-text mb-1">
                      Ola Nordmann
                    </h2>
                    <p className="text-textMuted font-medium">
                      Fullstack Utvikler & UI Designer
                    </p>
                  </div>

                  <p className="text-textMuted leading-relaxed">
                    Jeg er en lidenskapelig utvikler som elsker å bygge moderne,
                    brukervennlige webapplikasjoner. Med en bakgrunn som
                    kombinerer teknisk dybde med et øye for design, streber jeg
                    alltid etter å levere løsninger som både ser bra ut og
                    fungerer sømløst.
                  </p>
                  <p className="text-textMuted leading-relaxed">
                    Til daglig jobber jeg med React, Next.js og moderne
                    frontend-teknologier, men jeg har også bred erfaring med
                    backend-systemer og skyinfrastruktur.
                  </p>

                  <div className="pt-6 border-t border-border/50 mt-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-textMuted mb-3">
                      Ferdigheter
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Node.js",
                        "UI/UX Design",
                        "Git",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-surface rounded-full text-sm text-textMuted border border-border hover:border-accent/50 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-card p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Erfaring</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-accent/30 pl-4">
                    <div className="font-medium">Senior Utvikler</div>
                    <div className="text-sm text-textMuted">
                      Tech Corp • 2021 - Nå
                    </div>
                  </li>
                  <li className="border-l-2 border-accent/30 pl-4">
                    <div className="font-medium">Frontend Utvikler</div>
                    <div className="text-sm text-textMuted">
                      Creative Agency • 2018 - 2021
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Utdanning</h3>
                <ul className="space-y-4">
                  <li className="border-l-2 border-accent/30 pl-4">
                    <div className="font-medium">Master i Informatikk</div>
                    <div className="text-sm text-textMuted">
                      NTNU • 2016 - 2018
                    </div>
                  </li>
                  <li className="border-l-2 border-accent/30 pl-4">
                    <div className="font-medium">Bachelor i Datateknologi</div>
                    <div className="text-sm text-textMuted">
                      Høgskolen i Oslo • 2013 - 2016
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
