export default function Footer() {
  return (
    <footer className="bg-sidebar py-6 px-6 mt-auto border-t border-divider shrink-0">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-textMuted">
          © {new Date().getFullYear()} Min Portfolio. Alle rettigheter
          reservert.
        </p>
        <div className="flex gap-6 text-sm text-textMuted">
          <a
            href="mailto:Helgason@protonmail.com"
            className="hover:text-primary transition-colors"
          >
            Kontakt
          </a>
          <a
            href="https://github.com/daniel25sfj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
