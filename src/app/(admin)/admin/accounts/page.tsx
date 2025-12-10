"use client";
import Link from "next/link";
import * as Icon from "@/components/ui/icons";
import { useEffect, useRef, useState } from "react";
import { UserType } from "@/types/user";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Page() {

    return (
        <>
            <header className="flex items-center justify-between mt-10">
                <section>
                    <h1 className="text-[1.6rem] font-bold">Manage Accounts</h1>
                    <p className="text-[.9em] text-[#999]">Manage student and staff account accesses</p>
                </section>

                <Link href="/admin/employees/new">
                    <button className="gap-2 flex items-center bg-red-theme-100 text-red-theme-400 hover:bg-red-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
                        <Icon.NewUserIcon />
                        <p className="text-[.95em]">New Account</p>
                    </button>
                </Link>
            </header>

            <main className="mt-10">
                <div className="grid gap-4">
                    <section className="flex flex-col @min-[960px]:grid @min-[960px]:grid-cols-[350px_1fr] @min-[1366px]:flex @min-[1366px]:flex-row gap-4 bg-white p-5 rounded-2xl justify-between">
                        <input type="text" placeholder="Search by user id or username..." className="bg-[#f6f6f6] w-full @min-[1366px]:max-w-[600px] py-3.5 px-4 rounded-[.8rem] outline-none" id="name-roll-search" />
                        <section className="grid min-[400px]:grid-cols-2 min-[600px]:grid-cols-3 @min-[1366px]:max-w-[600px] gap-3 w-full">
                            <select id="role-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
                                <option value="ALL">All Role</option>
                                <option value="ADMIN">Admin</option>
                                <option value="STUDENT">Student</option>
                                <option value="HEADMASTER">Headmaster</option>
                            </select>
                            <select id="status-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
                                <option value="ALL">All Status</option>
                                <option value="ACTIVE">Active</option>
                                <option value="FROZEN">Frozen</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                            <button className="p-3.5 px-4 cursor-pointer border border-[#ddd] whitespace-nowrap rounded-[.8rem] w-full">Export to Excel</button>
                        </section>
                    </section>
                    <section className="p-5 bg-white rounded-2xl grid gap-3">
                        <div className="overflow-x-auto">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>USER ID</th>
                                        <th>USERNAME</th>
                                        <th>ROLE TYPE</th>
                                        <th>STATUS</th>
                                        <th>CREATED ON</th>
                                        <th>LAST ACTIVE</th>
                                        <th>ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                        {/* {} */}
                    </section>
                </div>
            </main>

        </>
    );
}
