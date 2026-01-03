"use client";

import {
  RegistrationForm,
  FormSection,
  TextInput,
  SelectInput,
  TextArea,
} from "@/components/ui/RegistrationForm";

export default function StudentRegistrationForm() {
  return (
    <RegistrationForm onCancel={() => console.log("Cancelled")}>
      {/* ================= Personal Information ================= */}
      <FormSection title="Personal Information">
        <TextInput label="First Name" required placeholder="Enter first name" />

        <TextInput label="Middle Name" placeholder="Enter middle name" />

        <TextInput label="Last Name" required placeholder="Enter last name" />

        <SelectInput
          label="Gender"
          required
          placeholder="Select gender"
          options={["Male", "Female", "Other"]}
        />

        <TextInput label="Date of Birth" type="date" required />

        <TextInput label="Admission Date" type="date" required />
      </FormSection>

      {/* ================= Academic Information ================= */}
      <FormSection title="Academic Information">
        <SelectInput
          label="Class"
          required
          placeholder="Select class"
          options={["FORM 1", "FORM 2", "FORM 3", "FORM 4"]}
        />

        <SelectInput
          label="Stream"
          required
          placeholder="Select stream"
          options={["A", "B", "C"]}
        />

        <TextInput
          label="Previous School"
          placeholder="Enter previous school name"
        />
      </FormSection>

      {/* ================= Parent / Guardian ================= */}
      <FormSection title="Parent / Guardian Information">
        <TextInput
          label="Parent / Guardian Name"
          required
          placeholder="Full name"
        />

        <TextInput
          label="Phone Number"
          required
          placeholder="+255 XXX XXX XXX"
        />

        <TextInput
          label="Email Address"
          type="email"
          placeholder="email@example.com"
        />

        <TextInput label="Alternative Contact" placeholder="+255 XXX XXX XXX" />

        <TextArea label="Home Address" placeholder="Enter full address" />
      </FormSection>

      {/* ================= Medical ================= */}
      <FormSection title="Medical Information (Optional)">
        <TextArea
          label="Medical Conditions / Allergies"
          placeholder="Enter any medical conditions, allergies, or special requirements"
        />
      </FormSection>
    </RegistrationForm>
  );
}
