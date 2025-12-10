export interface StudentType {
	full_name: string;
	gender: string;
	status: "ACTIVE" | "GRADUATED" | "TRANSFERRED" | null;
	class_level: "FORM1" | "FORM2" | "FROM3" | "FROM4" | "FORM5" | "FORM6" | null;
	additional_information: string;
	date_of_birth: Data | string | null;
	student_contacts: StudentContactType;
	student_parents: StudentParentType;
}

export interface StudentFormType {
    first_name: string;
    middle_name: string | null;
    last_name: string;
    date_of_birth: string;
    gender: string;
    nationality: string;
    medical_information: string;
    academic_status: string;
    last_class_level: string;
    previous_school: string;
    new_class_level: string;
    student_email: string;
    student_phone: string;
    home_address: string;
    father_name: string;
    father_email: string;
    father_phone: string;
    mother_name: string;
    mother_email: string;
    mother_phone: string;
}

export interface StudentDataType {
    id: number;
    roll_number: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    full_name: string;
    date_of_birth: Date;
    gender: 'MALE' | "FEMALE";
    nationality: string;
    medical_information: string;
    student_email: string;
    student_phone: string;
    home_address: string;
    academic_status: "ACTIVE" | "GRADUATED" | "TRANSFERRED" | null;
    last_class_level: string;
    previous_school: string;
    new_class_level: "FORM1" | "FORM2" | "FROM3" | "FROM4" | "FORM5" | "FORM6" | null;
    father_name: string;
    father_email: string;
    father_phone: string;
    mother_name: string;
    mother_email: string;
    mother_phone: string;
    created_at: Date;
    updated_at: Date;
}
