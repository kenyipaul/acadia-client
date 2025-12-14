"use client";
import Link from "next/link";
import * as Icon from "@/components/ui/icons";
import { useQuery } from "@tanstack/react-query";
import { EmployeeType } from "@/types/employee";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"

export default function Page() {
	const { isPending, error, data } = useQuery({
		queryKey: ["employees"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_SERVER_HOST}/employee`).then((res) => res.json()),
	});

    console.log(data)

	return (
		<>
			<header className="flex items-center justify-between mt-10 flex-wrap gap-4">
				<section>
					<h1 className="text-[1.6rem] font-bold">Employee Management</h1>
					<p className="text-[.9em] text-[#999]">Manage all employee records and information</p>
				</section>

				<Link href="/admin/employees/new">
					<button className="gap-2 flex items-center bg-red-theme-100 text-red-theme-400 hover:bg-red-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
						<Icon.NewUserIcon />
						<p className="text-[.95em]">New Employee</p>
					</button>
				</Link>
			</header>

			<main className="mt-10">
				<div className="grid gap-4">
					<section className="flex flex-col @min-[960px]:grid @min-[960px]:grid-cols-[350px_1fr] @min-[1366px]:flex @min-[1366px]:flex-row gap-4 bg-white p-5 rounded-2xl justify-between">
						<input type="text" placeholder="Search by name, email or staff id..." className="bg-[#f6f6f6] w-full @min-[1366px]:max-w-[600px] py-3.5 px-4 rounded-[.8rem] outline-none" id="name-roll-search" />
						<section className="grid min-[400px]:grid-cols-2 min-[600px]:grid-cols-3 @min-[1366px]:max-w-[600px] gap-3 w-full">
							<select id="class-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
								<option value="ALL">All Staff</option>
								<option value="HEADMASTER">Headmaster</option>
								<option value="SECRETARY">Secretary</option>
								<option value="BURSAR">Bursar</option>
								<option value="TEACHER">Teacher</option>
								<option value="LIBRARIAN">Librarian</option>
								<option value="TECHNICIAN">IT Technician</option>
							</select>
							<select id="gender-select" className="bg-[#f6f6f6] w-full py-3.5 px-4 rounded-[.8rem] outline-none">
								<option value="ALL">All Departments</option>
								<option value="ADMINISTRATION">Administration</option>
								<option value="MATHEMATICS">Mathematics</option>
								<option value="SCIENCE">Science</option>
								<option value="LANGUAGES">Languages</option>
								<option value="HUMANITIES">Humanities</option>
								<option value="FINANCE">Finance</option>
								<option value="SUPPORT_SERVICE">Support Services</option>
							</select>
							<button className="p-3.5 px-4 cursor-pointer border border-[#ddd] whitespace-nowrap rounded-[.8rem] w-full">Export to Excel</button>
						</section>
					</section>
					<section className="p-5 bg-white rounded-2xl grid gap-3">
						<div className="overflow-x-auto">
							<table>
								<thead>
									<tr>
										<th>STAFF ID</th>
										<th>FULL NAME</th>
										<th>ROLE</th>
										<th>DEPARTMENT</th>
										<th>CONTACT</th>
										<th>EMAIL</th>
										<th>EMPLOYMENT DATE</th>
										<th>ACTIONS</th>
									</tr>
								</thead>
								<tbody>
                                    {
                                        data && data.map((employee: EmployeeType, key: number) => {
                                            return <Employee key={key} data={employee} />
                                        })
                                    }
                                </tbody>
							</table>
						</div>
                        { data && data.length == 0 && <p className="font-bold text-gray-400 w-fit p-2">No recorded employees here</p> }
                        { isPending && <p className="text-info-400 bg-info-100 w-fit p-2 blink ml-2">Fetching employee information...</p> }
                        { error && <p className="text-red-theme-400 bg-red-theme-100 w-fit p-2 blink">Something went wrong when fetching data</p> }
					</section>
				</div>
			</main>
		</>
	);
}

function Employee({ data }: { data: EmployeeType }) {
	return (
		<tr>
			<td>{data.employee_id}</td>
			<td>{data.full_name}</td>
			<td>{data.role}</td>
			<td className="text-center">{data.department}</td>
			<td>{data.phone_number}</td>
			<td>{data.email_address}</td>
			<td>{new Date(data.created_at).toLocaleDateString()}</td>
			<td className="text-center">
				<Popover>
                    <PopoverTrigger className="cursor-pointer"><Icon.MoreIcon /></PopoverTrigger>
                    <PopoverContent className="bg-white w-full border-none rounded-2xl">
                        <ul>
                            <li className="p-2 px-4 rounded-lg  hover:text-green-theme-600 hover:bg-green-theme-100 cursor-pointer">View More</li>
                            <li className="p-2 px-4 rounded-lg  hover:text-green-theme-600 hover:bg-green-theme-100 cursor-pointer">Edit Record</li>
                            <li className="p-2 px-4 rounded-lg  hover:text-green-theme-600 hover:bg-green-theme-100 cursor-pointer">Delete Record</li>
                        </ul>
                    </PopoverContent>
                </Popover>
			</td>
		</tr>
	);
}
