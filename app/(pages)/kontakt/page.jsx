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
  assetCards: [
    {
      eyebrow: "Kontakt",
      title: "Ta kontakt",
      icon: "sparkles",
    },
  ],
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-surface py-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-3/12">
            <SidebarNav data={sidebarData} />
          </div>

          {/* Main Content */}
          <div className="w-9/12 flex flex-col gap-6">
            <div className="bg-card p-10 rounded-3xl shadow-sm">
              <h1 className="text-4xl font-bold text-primary mb-2">Kontakt</h1>
              <p className="text-textMuted text-lg mb-8">
                Ta gjerne kontakt for samarbeid eller spørsmål.
              </p>

              <div className="grid gap-6">
                {/* Email Card */}
                <div className="p-6 bg-surface rounded-2xl border border-divider hover:border-accent transition-colors group">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-primary">
                      E-post
                    </h3>
                  </div>
                  <a
                    href="mailto:Helgason@protonmail.com"
                    className="text-textMuted group-hover:text-primary transition-colors text-lg break-all"
                  >
                    Helgason@protonmail.com
                  </a>
                </div>

                {/* GitHub Card */}
                <div className="p-6 bg-surface rounded-2xl border border-divider hover:border-accent transition-colors group">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-lg font-semibold text-primary">
                      GitHub
                    </h3>
                  </div>
                  <a
                    href="https://github.com/daniel25sfj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textMuted group-hover:text-primary transition-colors text-lg"
                  >
                    github.com/daniel25sfj
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
