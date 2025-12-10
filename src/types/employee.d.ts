export type EmployeeFormType = {
    first_name: string;
    middle_name: string;
    last_name:  string;
    date_of_birth: string;
    gender: string;
    national_id: string;
    additional_information: string | null;
    role: string;
    department: string;
    monthly_salary: number;
    qualification: string;
    specialization: string;
    experience: number;
    phone_number: string;
    email_address: string;
    emergency_contact_name: string;
    emergency_contact_number: string;
    medical_information: string;
    bank_name: string;
    account_holder_name: string;
    account_number: number;
    residential_address: string;
}

export type EmployeeDataType = {
    id: number;
    staff_id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    full_name: string;
    date_of_birth: string;
    gender: "MALE" | "FEMALE" | "OTHER";
    national_id: string;
    additional_information: string | null;
    role: string;
    department: string;
    monthly_salary: string;
    qualification: string;
    specialization: string;
    experience: number;
    phone_number: string;
    email_address: string;
    emergency_contact_name: string;
    emergency_contact_number: string;
    medical_information: string;
    account_holder_name: string;
    account_number: string;
    bank_name: string;
    residential_address: string;
    created_at: string;
    updated_at: string;
}
