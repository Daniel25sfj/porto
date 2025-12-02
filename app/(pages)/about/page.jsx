import SidebarNav from "../../components/SidebarNav";

const sidebarData = {
  logo: { text: "Min Portfolio" },
  actions: [],
  navGroups: [
    {
      title: "Meny",
      items: [{ label: "Om meg", href: "/about" }],
    },
  ],
  assetCards: [],
};

export default function AboutPage() {
  return (
    <div className="bg-surface py-6 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-4">
          {/* Sidebar */}
          <div className="w-3/12">
            <SidebarNav data={sidebarData} />
          </div>

          {/* Main Content */}
          <div className="w-9/12">
            <h1 className="text-3xl font-bold mb-4 text-text">Om meg</h1>
            <div className="bg-card rounded-2xl p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="space-y-3 flex-1">
                  <div>
                    <h2 className="text-2xl font-semibold text-text mb-1">
                      Daniel Helgason
                    </h2>
                    <p className="text-textMuted font-medium">
                      Frontend utvikler
                    </p>
                  </div>

                  <p className="text-textMuted leading-relaxed text-sm">
                    Jeg er en lidenskapelig utvikler som elsker å bygge moderne,
                    brukervennlige webapplikasjoner. Med en bakgrunn som
                    kombinerer teknisk dybde med et øye for design, streber jeg
                    alltid etter å levere løsninger som både ser bra ut og
                    fungerer sømløst.
                  </p>
                  <p className="text-textMuted leading-relaxed text-sm">
                    Til daglig jobber jeg med React, Next.js og moderne
                    frontend-teknologier, men jeg har også bred erfaring med
                    backend-systemer og skyinfrastruktur.
                  </p>

                  <div className="pt-4 border-t border-border/50 mt-4">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-textMuted mb-2">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-card p-5 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Erfaring</h3>
                <p className="text-textMuted text-sm">Kommer snart!</p>
              </div>
              <div className="bg-card p-5 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3">Prosjekter</h3>
                <p className="text-textMuted text-sm">Kommer snart!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
