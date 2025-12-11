"use client";
import Link from "next/link";
import * as Icon from "@/components/ui/icons";
import { StudentDataType } from "@/types/student";
import { useEffect, useRef, useState, useCallback } from "react";
// import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export default function Page() {
    return (
        <>
            <header className="flex items-center justify-between mt-10">
                <section>
                    <h1 className="text-[1.6rem] font-bold">Student Management</h1>
                    <p className="text-[.9em] text-[#999]">Manage all student records and information</p>
                </section>

                <Link href="/admin/students/new">
                    <button className="gap-2 flex items-center bg-green-theme-100 text-green-theme-400 hover:bg-green-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
                        <Icon.NewUserIcon />
                        <p className="text-[.95em]">New Student</p>
                    </button>
                </Link>
            </header>
            <main className="mt-10">
                <div className="grid gap-4">
                    <section className="flex flex-col @min-[960px]:grid @min-[960px]:grid-cols-[350px_1fr] @min-[1366px]:flex @min-[1366px]:flex-row gap-4 bg-white p-5 rounded-2xl justify-between">
                        <input type="text" placeholder="Search by name or roll number..." className="bg-[#f6f6f6] w-full @min-[1366px]:max-w-[600px] py-3.5 px-4 rounded-[.8rem] outline-none" id="name-roll-search" />
                        <section className="grid min-[400px]:grid-cols-2 min-[600px]:grid-cols-2 min-[750px]:grid-cols-4 @min-[1366px]:max-w-[700px] gap-3 w-full">
                            {/* <select id="class-select" className="bg-[#f6f6f6] w-full py-4 px-6 rounded-[.8rem] outline-none"></select> */}
                            <select id="class-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
                                <option value="ALL">All Classes</option>
                                <option value="FORM1">Form 1</option>
                                <option value="FORM2">Form 2</option>
                                <option value="FORM3">Form 3</option>
                                <option value="FORM4">Form 4</option>
                            </select>
                            <select id="gender-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
                                <option value="ALL">All Genders</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                            </select>
                            <select id="status-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
                                <option value="ALL">All Status</option>
                                <option value="ACTIVE">Active</option>
                                <option value="GRADUATED">Graduated</option>
                                <option value="TRANSFERRED">Transferred</option>
                            </select>
                            <button className="p-3.5 px-4 cursor-pointer border border-[#ddd] whitespace-nowrap rounded-[.8rem] w-full">Export to Excel</button>
                        </section>
                    </section>

                    <section className="p-5 bg-white rounded-2xl grid gap-3">

                        <div className="overflow-x-auto">
                            <table>
                                <thead>
                                    <tr>
                                        <th>ROLL</th>
                                        <th>FULL NAME</th>
                                        <th>GENDER</th>
                                        <th>CLASS</th>
                                        <th>ENROLL DATE</th>
                                        <th>STATUS</th>
                                        {/* <th>FEES STATUS</th> */}
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {!isPending && !error && filteredStudents.map((student: StudentDataType, key: number) => {
                                        return <Student student={student} key={key} />;
                                    })} */}
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

function Student({ student }: { student: StudentDataType }) {
    return (
        <tr>
            <td>#{student.roll_number}</td>
            <td>{student.full_name}</td>
            <td>{student.gender}</td>
            <td>{student.new_class_level}</td>
            <td>{new Date(student.created_at).toLocaleDateString()}</td>
            <td className="text-center">{student.academic_status}</td>
            {/* <td>
                <p className="bg-green-200 text-green-600 w-fit p-2 px-4 rounded-full text-[.9em]">Paid</p>
            </td> */}
            <td className="text-center">


                {/* <Popover>
                    <PopoverTrigger className="cursor-pointer"><Icon.MoreIcon /></PopoverTrigger>
                    <PopoverContent className="bg-white w-full border-none rounded-2xl">
                        <ul>
                            <li className="p-2 px-4 rounded-lg  hover:text-green-theme-600 hover:bg-green-theme-100 cursor-pointer">View More</li>
                            <li className="p-2 px-4 rounded-lg  hover:text-green-theme-600 hover:bg-green-theme-100 cursor-pointer">Edit Record</li>
                            <li className="p-2 px-4 rounded-lg  hover:text-green-theme-600 hover:bg-green-theme-100 cursor-pointer">Delete Record</li>
                        </ul>
                    </PopoverContent>
                </Popover> */}
            </td>
        </tr>
    );
}
