import { ReactNode } from "react";
import TopBar from "@/layouts/topbar";
import * as Icon from "@/components/ui/icons"
import Sidebar, { LinkButton } from "@/layouts/sidebar"

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <main className="h-dvh flex items-center overflow-hidden">
            <Sidebar>
                <LinkButton title="Students" link="/admin/students" icon={<Icon.StudentsIcon />} />
                <LinkButton title="Employees" link="/admin/employees" icon={<Icon.EmployeeIcon />} />
                <br />
                <LinkButton title="User Accounts" link="/admin/accounts" icon={<Icon.StudentAccountIcon />} />
            </Sidebar>
            <main className="h-full w-full">
                <TopBar />
                {children}
            </main>
        </main>
    )
}
