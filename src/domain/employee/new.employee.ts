import axios from "axios";
import { EmployeeFormType } from "@/types/employee";

export async function addNewEmployee(employee: EmployeeFormType) {
    try {
		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SERVER_HOST}/employee/`,
			employee
		);

		if (response.status == 201) {
			return { success: true, msg: "Employee's demography recorded successfully" };
		}
	} catch (err: unknown) {

        if (axios.isAxiosError(err)) {
            if (err.response?.status === 400 || err.response?.status === 409) {
                alert(err.response.data.message);
			}
        }

        console.log(err);
	}
}
