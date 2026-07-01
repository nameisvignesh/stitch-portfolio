import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-lg border-t border-white/5 bg-surface-container-lowest transition-opacity duration-200 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-md">
        <div className="flex flex-col gap-xs items-center md:items-start">
          <span className="font-label-caps text-label-caps text-on-surface">
            VIGNESH.EXE
          </span>
          <span className="font-code-sm text-code-sm uppercase tracking-widest text-secondary">
            © {new Date().getFullYear()} VIGNESH. ALL SYSTEMS OPERATIONAL.
          </span>
        </div>
        <div className="flex gap-lg">
          <a
            className="font-code-sm text-code-sm uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-code-sm text-code-sm uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Link
            className="font-code-sm text-code-sm uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
            href="/#terminal"
          >
            Terminal
          </Link>
          <Link
            className="font-code-sm text-code-sm uppercase tracking-widest text-outline hover:text-on-surface transition-colors"
            href="/#status"
          >
            Status
          </Link>
        </div>
        <div className="flex items-center gap-xs">
          <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
          <span className="font-code-sm text-code-sm text-outline">
            SYSTEM HEALTH: 100%
          </span>
        </div>
      </div>
    </footer>
  );
}
