import Link from "next/link"
import * as Icon from '@/components/ui/icons'

export default function Notice() {
    return (
        <>
            <header className="flex items-center justify-between mt-10 flex-wrap gap-4">
                <section>
                    <h1 className="text-[1.6rem] font-bold">Announcements & Notices</h1>
                    <p className="text-[.9em] text-[#999]">Create and manage school announcements</p>
                </section>

                {/* <Link href="/admin/employees/new"> */}
                    <button className="gap-2 flex items-center bg-red-theme-100 text-red-theme-400 hover:bg-red-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
                        <Icon.NewUserIcon />
                        <p className="text-[.95em]">Create Notice</p>
                    </button>
                {/* </Link> */}
            </header>

            <section className="gap-2 grid mt-10 @min-[500]:grid-cols-2 @min-[700]:grid-cols-3 @min-[900]:grid-cols-4">
                <div className="p-5 grid gap-2 bg-white rounded-[.7rem]">
                    <p className="text-dark-theme-100">Total Notices</p>
                    <h1 className="text-3xl font-bold">4</h1>
                </div>
                <div className="p-5 grid gap-2 bg-white rounded-[.7rem]">
                    <p className="text-dark-theme-100">Published</p>
                    <h1 className="text-3xl font-bold">3</h1>
                </div>
                <div className="p-5 grid gap-2 bg-white rounded-[.7rem]">
                    <p className="text-dark-theme-100">Drafts</p>
                    <h1 className="text-3xl font-bold">1</h1>
                </div>
                <div className="p-5 grid gap-2 bg-white rounded-[.7rem]">
                    <p className="text-dark-theme-100">This Month</p>
                    <h1 className="text-3xl font-bold">4</h1>
                </div>
            </section>

            <main className="p-5 min-[700]:p-8 bg-white rounded-2xl mt-10 grid gap-5">
                <h1 className="text-xl font-bold">All Announcements</h1>
                <section className="gap-3 grid">
                    <div className="grid gap-2 py-5 border-b border-[#eee]">
                        <div className="flex items-center justify-between mb-2">
                            <section className="flex items-center gap-2">
                                <p className="p-2 px-3 bg-dark-theme-100 text-white text-[.8em] rounded-full">Published</p>
                                <p className="p-2 px-3 bg-[#ddd] text-black text-[.8em] rounded-full">Medium</p>
                            </section>
                            <section className="flex items-center gap-4">
                                <button className="cursor-pointer text-info-400">
                                    <Icon.EditIcon />
                                </button>
                                <button className="cursor-pointer text-danger-300">
                                    <Icon.DeleteIcon />
                                </button>
                            </section>
                        </div>
                        <h1 className="text-xl font-bold">Mid-Term Exam Schedule Released</h1>
                        <p className="text-dark-theme-100">The mid-term examination will begin on January 20, 2024. Please check the notice board for detailed timetable.</p>
                        <div className="flex items-center gap-5">
                            <p>2024-10-14</p>
                            <p>Administration</p>
                        </div>
                    </div>

                    <div className="grid gap-2 py-5 border-b border-[#eee]">
                        <div className="flex items-center justify-between mb-2">
                            <section className="flex items-center gap-2">
                                <p className="p-2 px-3 bg-dark-theme-100 text-white text-[.8em] rounded-full">Published</p>
                                <p className="p-2 px-3 bg-[#ddd] text-black text-[.8em] rounded-full">Medium</p>
                            </section>
                            <section className="flex items-center gap-4">
                                <button className="cursor-pointer text-info-400">
                                    <Icon.EditIcon />
                                </button>
                                <button className="cursor-pointer text-danger-300">
                                    <Icon.DeleteIcon />
                                </button>
                            </section>
                        </div>
                        <h1 className="text-xl font-bold">Mid-Term Exam Schedule Released</h1>
                        <p className="text-dark-theme-100">The mid-term examination will begin on January 20, 2024. Please check the notice board for detailed timetable.</p>
                        <div className="flex items-center gap-5">
                            <p>2024-10-14</p>
                            <p>Students</p>
                        </div>
                    </div>

                    <div className="grid gap-2 py-5 border-b border-[#eee]">
                        <div className="flex items-center justify-between mb-2">
                            <section className="flex items-center gap-2">
                                <p className="p-2 px-3 bg-dark-theme-100 text-white text-[.8em] rounded-full">Published</p>
                                <p className="p-2 px-3 bg-[#ddd] text-black text-[.8em] rounded-full">Medium</p>
                            </section>
                            <section className="flex items-center gap-4">
                                <button className="cursor-pointer text-info-400">
                                    <Icon.EditIcon />
                                </button>
                                <button className="cursor-pointer text-danger-300">
                                    <Icon.DeleteIcon />
                                </button>
                            </section>
                        </div>
                        <h1 className="text-xl font-bold">Mid-Term Exam Schedule Released</h1>
                        <p className="text-dark-theme-100">The mid-term examination will begin on January 20, 2024. Please check the notice board for detailed timetable.</p>
                        <div className="flex items-center gap-5">
                            <p>2024-10-14</p>
                            <p>All</p>
                        </div>
                    </div>

                    <div className="grid gap-2 py-5 border-b border-[#eee]">
                        <div className="flex items-center justify-between mb-2">
                            <section className="flex items-center gap-2">
                                <p className="p-2 px-3 bg-dark-theme-100 text-white text-[.8em] rounded-full">Published</p>
                                <p className="p-2 px-3 bg-[#ddd] text-black text-[.8em] rounded-full">Medium</p>
                            </section>
                            <section className="flex items-center gap-4">
                                <button className="cursor-pointer text-info-400">
                                    <Icon.EditIcon />
                                </button>
                                <button className="cursor-pointer text-danger-300">
                                    <Icon.DeleteIcon />
                                </button>
                            </section>
                        </div>
                        <h1 className="text-xl font-bold">Mid-Term Exam Schedule Released</h1>
                        <p className="text-dark-theme-100">The mid-term examination will begin on January 20, 2024. Please check the notice board for detailed timetable.</p>
                        <div className="flex items-center gap-5">
                            <p>2024-10-14</p>
                            <p>All</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
