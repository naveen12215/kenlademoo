import Link from "next/link";
import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_REACH_EMAIL,
  COMPANY_LOCATION,
  COMPANY_REGIONS,
} from "@/lib/constants";

const colophon = [
  { label: "Services", href: "/services" },
  { label: "Stack", href: "/technologies" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer
      className="border-t border-warm-200 lg:pl-[var(--chrome-spine)]"
      role="contentinfo"
    >
      <div className="flex flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p className="text-sm font-semibold tracking-wide text-warm-700">
          © {new Date().getFullYear()} {COMPANY_NAME}
          <span className="mx-2 font-medium text-warm-400">·</span>
          {COMPANY_REGIONS}
          <span className="mx-2 font-medium text-warm-400">·</span>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="font-semibold hover:text-brand-orange"
          >
            {COMPANY_EMAIL}
          </a>
          <span className="mx-2 font-medium text-warm-400">·</span>
          <a
            href={`mailto:${COMPANY_REACH_EMAIL}`}
            className="font-semibold hover:text-brand-orange"
          >
            {COMPANY_REACH_EMAIL}
          </a>
        </p>
        <p className="text-sm font-semibold tracking-wide text-warm-600">
          {COMPANY_LOCATION}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-warm-200 px-4 py-4 lg:px-8">
        {colophon.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-semibold tracking-wide text-warm-700 hover:text-brand-orange"
          >
            {link.label}
          </Link>
        ))}
        <span className="ml-auto text-[12px] font-medium tracking-wide text-warm-500">
          ⌘K search · ` console
        </span>
      </div>
    </footer>
  );
}
