"use client";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@/components/ui/icons";
import useSidebarState from "@/store/sidebar";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

export default function Sidebar({ children, theme }: { children: ReactNode, theme?: string }) {
    const closeSidebar = useSidebarState((state) => state.closeSidebar);
    const sidebarState = useSidebarState((state) => state.sidebarState);

    return (
        <aside className={`flex h-dvh w-full min-w-65 transition-all absolute z-99 ${sidebarState ? "left-0" : "-left-65 max-w-65"} min-[1000px]:relative min-[1000px]:left-0 min-[1000]:max-w-65`}>
            <main className="flex flex-col justify-between min-w-65 bg-white border-r border-[#eee]">
                <section>
                    <header className="p-4 px-5 h-15 flex items-center justify-between border-b border-[#eee]">
                        <Image width={100} height={100} src="/logo.svg" alt="" />
                        <button onClick={closeSidebar} className="cursor-pointer">
                            <Icon.MenuIcon className="size-7.5" />
                        </button>
                    </header>
                    <main className="gap-1 grid p-4">{children}</main>
                </section>

                <section className="p-4">
                    <LinkButton title="Settings" link="" icon={<Icon.SettingsIcon />} className={theme} />
                    <LinkButton title="Log out" link="" icon={<Icon.LogoutIcon />} className={theme} />
                </section>
            </main>
            <section onClick={closeSidebar} className={`bg-[#00000005] backdrop-blur-[.2rem] h-full w-full ${sidebarState ? "flex" : "hidden"} min-[1000]:hidden`}></section>
        </aside>
    );
}

export function LinkButton({ title, link, icon, className, active_color }: { title: string, link: string, icon?: ReactNode, className?: string, active_color?: string }) {
    const path = usePathname();
    const closeSidebar = useSidebarState((state) => state.closeSidebar);

    return (
        <Link href={link} onClick={closeSidebar}>
            <button className={`flex items-center gap-3.5 cursor-pointer px-3 py-3 w-full rounded-xl ${className} ${path == link && active_color }`}>
                {icon}
                <p>{title}</p>
            </button>
        </Link>
    );
}

export function MultiLinkButton({ title, icon, children }: { title: string, icon: ReactNode, children: ReactNode }) {
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
