import { JSX } from "react";
import Link from "next/link";

function Header(): JSX.Element {
    return (
        <>
            <div className="fixed top-0 left-0 z-50 flex w-full justify-center px-3 py-3 sm:px-4">
                <div className="flex h-auto w-full max-w-6xl flex-col gap-3 rounded-2xl border border-blue-100/60 bg-white/80 px-4 py-3 text-blue-500 shadow-lg shadow-blue-100/40 backdrop-blur-md sm:h-16 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
                    <Link href="/" className="text-2xl font-semibold tracking-tight transition hover:text-blue-700 sm:text-3xl">IEEE EUI</Link>
                    <nav className="flex flex-wrap items-center gap-2 text-xs font-semibold sm:text-sm">
                        {[
                          { label: "Computer Society", href: "/societies/computer-society" },
                          { label: "Robotics and Automation", href: "/societies/robotics-and-automation" },
                          { label: "SIGHT", href: "/societies/sight" },
                          { label: "ComSoc", href: "/societies/comsoc" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-blue-600 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="h-20" />
        </>
    );
}

export default Header;