import SidebarNav from "../../components/SidebarNav";
import TiltedCard from "../../components/TiltedCard";

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
        <div className="flex flex-col md:flex-row gap-4">
          {/* Sidebar */}
          <div className="w-full md:w-3/12">
            <SidebarNav data={sidebarData} />
          </div>

          {/* Main Content */}
          <div className="w-full md:w-9/12 flex flex-col gap-4">
            {/* About "Hero" */}
            <section className="bg-card rounded-3xl p-5 md:p-8 flex flex-col md:flex-row gap-6 items-center shadow-[0_20px_60px_rgba(8,15,32,0.12)]">
              <div className="flex-1 flex flex-col gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-brandGreen">
                    Om meg
                  </span>
                  <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-text mt-2 leading-tight">
                    Daniel Helgason
                  </h1>
                  <p className="text-sm md:text-base text-textMuted font-medium mt-1">
                    Frontend utvikler
                  </p>
                </div>

                <p className="text-base leading-relaxed text-textMuted">
                  Jeg er en lidenskapelig utvikler som elsker å bygge moderne,
                  brukervennlige webapplikasjoner. Med en bakgrunn som
                  kombinerer teknisk dybde med et øye for design, streber jeg
                  alltid etter å levere løsninger som både ser bra ut og
                  fungerer sømløst.
                </p>
                <p className="text-base leading-relaxed text-textMuted">
                  Til daglig jobber jeg med React, Next.js og moderne
                  frontend-teknologier, men jeg har også bred erfaring med
                  backend-systemer og skyinfrastruktur.
                </p>

                <div className="pt-4 border-t border-border/50 mt-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-textMuted mb-2">
                    Ferdigheter
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "React",
                      "Next.js",
                      "JavaScript",
                      "Tailwind CSS",
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

              <div className="shrink-0 w-40 h-40 md:w-56 md:h-56 bg-linear-to-br from-accent/20 to-brandGreen/20 rounded-2xl flex items-center justify-center relative">
                <TiltedCard
                  imageSrc="/thumbnail.jpg"
                  altText="Profilbilde av Daniel"
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.1}
                  showMobileWarning={false}
                  showTooltip={false}
                  displayOverlayContent={true}
                  imgClassName="object-cover object-[center_30%]"
                />
              </div>
            </section>

            {/* Extra sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-card p-5 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-text">
                  Erfaring
                </h3>
                <p className="text-textMuted text-sm">Kommer snart!</p>
              </div>
              <div className="bg-card p-5 rounded-2xl shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-text">
                  Prosjekter
                </h3>
                <p className="text-textMuted text-sm">Kommer snart!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
