// ! PLEASE DON'T REMOVE ANYTHING FROM THIS FILE
import Sidebar from "@/layouts/sidebar";
import { ReactNode } from "react";

export default function RootLayout({children}: {children: ReactNode}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
