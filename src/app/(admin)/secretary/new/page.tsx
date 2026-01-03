"use client";

import "@/styles/pageHeader.css";
import PageHeader from "@/components/ui/PageHeader";
import StudentRegistrationForm from "../components/StudentRegistrationForm";

export default function NewAdmissionPage() {
  return (
    <main className="p-2">
      <PageHeader
        title="Students registration"
        subtitle="Register a new student into the system"
      />

      <StudentRegistrationForm />
    </main>
  );
}
