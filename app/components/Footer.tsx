import Link from "next/link";
import { societies } from "../societies-data";

const footerLinks = [
  { label: "Events", href: "/events" },
  ...societies.map((society) => ({
    label: society.name,
    href: `/societies/${society.slug}`,
  })),
];

function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white px-6 py-10 text-gray-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm space-y-2">
          <p className="text-xl font-semibold text-blue-600">IEEE EUI</p>
          <p className="text-sm text-gray-600">
            IEEE Student Branch at Egypt University of Informatics — building
            engineers through workshops, hackathons, trips, and industry
            collaboration.
          </p>
        </div>
        <nav className="grid gap-2 text-sm" aria-label="Footer">
          {footerLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-600 transition hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-gray-500">
        © {new Date().getFullYear()} IEEE EUI Student Branch (STB60211912)
      </p>
    </footer>
  );
}

export default Footer;
