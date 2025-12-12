import { ReactNode } from "react";
import TopBar from "@/layouts/topbar";
import * as Icon from "@/components/ui/icons"
import Sidebar, { LinkButton } from "@/layouts/sidebar"

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main className="h-dvh flex items-center overflow-hidden">
            <Sidebar theme="hover:text-red-theme-500 hover:bg-red-theme-100">
                <LinkButton title="Dashboard" link="/admin" icon={<Icon.DashIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <LinkButton title="Reports" link="/admin/reports" icon={<Icon.AnalysisIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <LinkButton title="Calender" link="/admin/calendar" icon={<Icon.CalendarIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <br />
                <LinkButton title="Accounts" link="/admin/accounts" icon={<Icon.StudentAccountIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <LinkButton title="Students" link="/admin/students" icon={<Icon.StudentsIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <LinkButton title="Employees" link="/admin/employees" icon={<Icon.EmployeeIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <br />
                <LinkButton title="Server Stats" link="/admin/server" icon={<Icon.ServerIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <LinkButton title="Messages" link="/admin/messages" icon={<Icon.MessageIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
                <LinkButton title="Notice" link="/admin/notice" icon={<Icon.NoticeIcon />} className="hover:text-red-theme-500 hover:bg-red-theme-100" active_color="bg-red-theme-100 text-red-theme-500" />
            </Sidebar>
            <main className="h-full w-full flex flex-col">
                <TopBar />
                <main className="px-[min(5rem,3%)] h-full @container overflow-y-auto">{children}</main>
            </main>
        </main>
    )
}
