import { ReactNode } from "react";
import TopBar from "@/layouts/topbar";
import * as Icon from "@/components/ui/icons"
import Sidebar, { LinkButton } from "@/layouts/sidebar"

export default function RootLayout({children}: {children: ReactNode}) {
    return (
      <main className="h-dvh flex items-center overflow-hidden">
        <Sidebar>
          <LinkButton
            title="Dashboard"
            link="/secretary"
            icon={<Icon.DashIcon />}
            className="hover:text-green-theme-400 hover:bg-green-theme-100"
            active_color="bg-green-theme-100 text-green-theme-400"
          />
          <LinkButton
            title="Analysis"
            link="/secretary/analysis"
            icon={<Icon.AnalysisIcon />}
            className="hover:text-green-theme-400 hover:bg-green-theme-100"
            active_color="bg-green-theme-100 text-green-theme-400"
          />
          <LinkButton
            title="New admission"
            link="/secretary/new"
            icon={<Icon.AddIcon />}
            className="hover:text-green-theme-400 hover:bg-green-theme-100"
            active_color="bg-green-theme-100 text-green-theme-400"
          />
          <LinkButton
            title="Students"
            link="/secretary/students"
            icon={<Icon.StudentsIcon />}
            className="hover:text-green-theme-400 hover:bg-green-theme-100"
            active_color="bg-green-theme-100 text-green-theme-400"
          />
          <LinkButton
            title="Notice"
            link="/secretary/notice"
            icon={<Icon.NoticeIcon />}
            className="hover:text-green-theme-400 hover:bg-green-theme-100"
            active_color="bg-green-theme-100 text-green-theme-400"
          />
        </Sidebar>
        <main className="h-full w-full">
          <TopBar />
          <main className="px-[min(5rem,3%)] @container">{children}</main>
        </main>
      </main>
    );
}
