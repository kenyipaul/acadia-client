"use client"
import Image from "next/image";
import * as Icon from "@/components/ui/icons";
import useSidebarState from "@/store/sidebar";

export default function TopBar() {
    const openSidebar = useSidebarState((state) => state.openSidebar);

    return (
        <main className="p-3 px-5 h-15 bg-white flex items-center border-b border-[#eee] justify-between">
            <section className="flex items-center gap-2 min-[1000px]:hidden">
                <button onClick={openSidebar} className="cursor-pointer">
                    <Icon.MenuIcon className="size-7.5" />
                </button>
                <Image width={106} height={100} src="/logo.svg" alt="" />
            </section>
            <span></span>
            <section className="flex items-center gap-4">
                <button className="cursor-pointer rounded-full min-[700px]:bg-[#eee] min-[700px]:p-1.5"><Icon.MessageIcon className="size-[27] min-[500]:size-[30] min-[700]:size-[23]" /></button>
                <button className="cursor-pointer rounded-full min-[700px]:bg-[#eee] min-[700px]:p-1.5"><Icon.NotificationIcon className="size-[27] min-[500]:size-[30] min-[700]:size-[23]" /></button>
                <div className="gap-2 flex items-center cursor-pointer">
                    <Icon.AccountIcon className="size-[27] min-[500]:size-[30] min-[700]:size-[35]" />
                    <div className="items-center hidden min-[490px]:flex gap-2">
                        <div>
                            <h1 className="font-bold text-[.9em]">HI JOHN!</h1>
                            <p className="hidden text-[.7em] text-[#999] min-[700px]:flex">Admin</p>
                        </div>
                        {/* <Icon.ArrowDownIcon /> */}
                    </div>
                </div>
            </section>
        </main>
    )
}
