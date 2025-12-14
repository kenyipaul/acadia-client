export interface EmployeeFormType {
	full_name: string;
	date_of_birth: string;
	gender: string;
	nationality: string;
	national_id: string;

	additional_information: string | null;
	role: string;
	employment_type: string;

	department: string;
	qualification: string;
	specialization: string;
	experience: number;

	phone_number: string;
	email_address: string;
	residential_address: string;

	emergency_contact_name: string;
	emergency_contact_number: string;
	emergency_contact_relationship: string;

	bank_name: string;
	salary_amount: number;
	pay_frequency: string;
	tax_number: string;
	account_holder_name: string;
	bank_account_number: number;
};

export interface EmployeeType {
	id: number;
	employee_id: string;
	full_name: string;
	gender: "MALE" | "FEMALE";
	date_of_birth: string;
	nationality: string;
	national_id: string;
	additional_information: string;

	role: string;
	department: string;
	employment_type: string;

	salary_amount: string;
	qualification: string;
	specialization: string;
	experience: number; // years of experience

	phone_number: string;
	email_address: string;
	residential_address: string;

	emergency_contact_name: string;
	emergency_contact_number: string;
	emergency_contact_relationship: string;

	bank_name: string;
	pay_frequency: string;
	tax_number: string;
	account_holder_name: string;
	bank_account_number: string;

    created_at: string;
    updated_at: string;
}
