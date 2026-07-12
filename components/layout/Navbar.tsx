import Link from "next/link";

import Button from "../ui/Button";
import Container from "../common/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Container>
        <nav className="mt-5 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-6 backdrop-blur-xl">

          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-white transition hover:text-blue-400"
          >
            <span className="text-blue-500">N</span>ithishSJ
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/projects"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Projects
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Contact
            </Link>
          </div>

          {/* Resume Button */}
          <Button href="/resume">
            Resume
          </Button>

        </nav>
      </Container>
    </header>
  );
}