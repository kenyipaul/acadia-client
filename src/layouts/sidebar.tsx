"use client";
import Link from "next/link";
import * as Icon from "@/components/ui/icons";
import useSidebarState from "@/store/sidebar";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ children }: { children: ReactNode }) {
    const closeSidebar = useSidebarState((state) => state.closeSidebar);
    const sidebarState = useSidebarState((state) => state.sidebarState);

    return (
        <aside className={`grid h-dvh bg-white w-full max-w-65 transition-all border-r border-[#eee] absolute z-99 ${sidebarState ? "left-0" : "-left-65"} min-[1000px]:relative min-[1000px]:left-0`}>
            <main className="flex flex-col justify-between">
                <section>
                    <header className="p-4 flex items-center justify-between border-b border-[#eee]">
                        <h1 className="text-2xl font-bold">ACADIA</h1>
                        <button onClick={closeSidebar} className="cursor-pointer">
                            <Icon.MenuIcon />
                        </button>
                    </header>
                    <main className="grid p-5">{children}</main>
                </section>

                <section className="p-5">
                    <LinkButton title="Settings" link="" icon={<Icon.SettingsIcon />} />
                    <LinkButton title="Log out" link="" icon={<Icon.LogoutIcon />} />
                </section>
            </main>
        </aside>
    );
}

export function LinkButton({ title, link, icon }: { title: string; link: string; icon?: ReactNode }) {
    const path = usePathname();

    return (
        <Link href={link}>
            <button className={`flex ${path == link ? "bg-green-theme-100" : "" } items-center gap-5 cursor-pointer hover:text-green-theme-600 hover:bg-green-theme-100 px-5 py-4 w-full rounded-2xl`}>
                {icon}
                <p>{title}</p>
            </button>
        </Link>
    );
}

export function MultiLinkButton({ title, icon, children }: { title: string; icon: ReactNode; children: ReactNode }) {
    const [menuState, setMenuState] = useState(false);

    return (
        <div className="grid cursor-pointer w-full">
            <button onClick={() => setMenuState(!menuState)} className="px-5 py-4 flex items-center gap-5 justify-between cursor-pointer">
                <section className="flex items-center gap-5 ">
                    {icon} <p>{title}</p>
                </section>
                <section className={`${menuState ? "rotate-180" : "rotate-0"} transition-all`}>
                    <Icon.ArrowDownIcon />
                </section>
            </button>
            <div className={`${menuState ? "flex" : "hidden"} pl-8 gap-3`}>
                <div className="w-0.5 rounded-full h-full bg-green-theme-100"></div>
                <section className="w-full">{children}</section>
            </div>
        </div>
    );
}
