import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/ui/PageHeader";
import {
  FileText,
  Download,
  TrendingUp,
  Users,
  DollarSign,
  Award,
} from "lucide-react";
import { DocumentIcon, DownloadIcon } from "@/components/ui/icons";

import "@/styles/statsCard.css";
import StatsCards from "@/components/ui/statsCard";
import type { StatCardProps } from "@/components/ui/statsCard";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const statsData: StatCardProps[] = [
  {
    title: "Report available",
    value: "16",
    icon: <FaUserGraduate />,
    bgColor: "#A7E6CF",
    iconColor: "#17B581",
  },
  {
    title: "Generated this month",
    value: "48",
    icon: <FaUserGraduate />,
    bgColor: "#B9E0FF",
    iconColor: "#32A5FF",
  },
  {
    title: "Last generated",
    value: "Today",
    icon: <FaUserGraduate />,
    bgColor: "#FFE4B5",
    iconColor: "#FFC342",
  },
  {
    title: "Export formats",
    value: "PDF, Excel",
    icon: <IoIosNotifications />,
    bgColor: "#C8F2B4",
    iconColor: "#6FD33B",
  },
];

export default function ReportsModule() {
  const reportCategories = [
    {
      title: "Academic Reports",
      icon: Award,
      reports: [
        {
          name: "Class Performance Report",
          description: "Overall class performance analysis",
        },
        {
          name: "Student Progress Report",
          description: "Individual student progress tracking",
        },
        {
          name: "Examination Analysis",
          description: "Detailed exam statistics and trends",
        },
        {
          name: "Subject-wise Performance",
          description: "Performance breakdown by subject",
        },
      ],
    },
    {
      title: "Attendance Reports",
      icon: Users,
      reports: [
        {
          name: "Daily Attendance Report",
          description: "Day-wise attendance records",
        },
        {
          name: "Monthly Attendance Summary",
          description: "Monthly attendance statistics",
        },
        {
          name: "Student Attendance History",
          description: "Individual student attendance",
        },
        {
          name: "Class Attendance Trends",
          description: "Attendance patterns and trends",
        },
      ],
    },
    {
      title: "Financial Reports",
      icon: DollarSign,
      reports: [
        {
          name: "Fee Collection Report",
          description: "Detailed fee collection summary",
        },
        {
          name: "Outstanding Fees Report",
          description: "List of pending fee payments",
        },
        {
          name: "Payment Transaction Log",
          description: "All payment transactions",
        },
        {
          name: "Financial Summary",
          description: "Overall financial statistics",
        },
      ],
    },
    {
      title: "Administrative Reports",
      icon: FileText,
      reports: [
        {
          name: "Student Enrollment Report",
          description: "Student admission and enrollment data",
        },
        { name: "Staff Directory", description: "Complete staff information" },
        {
          name: "Class Distribution",
          description: "Student distribution across classes",
        },
        {
          name: "General Statistics",
          description: "Overall school statistics",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-10">
      <PageHeader
        title="Reports & analytics"
        subtitle="Generate and download various school reports"
      />

      <StatsCards data={statsData} />

      {reportCategories.map((category, index) => {
        const Icon = category.icon;
        return (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl gap-5 flex justify-center flex-col"
          >
            <section>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <CardTitle>{category.title}</CardTitle>
              </div>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {category.reports.map((report, idx) => (
                <div
                  key={idx}
                  className="grid gap-1 border border-[#ddd] rounded-xl p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-bold mb-1">{report.name}</h3>
                      <p className="text-sm text-gray-600">
                        {report.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <button className="gap-2 flex items-center justify-center p-2 cursor-pointer border rounded-[.6rem] border-[#ddd] hover:bg-green-theme-300 hover:text-white">
                      <DownloadIcon className="size-5" />
                      Excel
                    </button>
                    <button className="gap-2 flex items-center justify-center p-2 cursor-pointer border rounded-[.6rem] border-[#ddd] hover:bg-green-theme-300 hover:text-white">
                      <DocumentIcon className="size-5" />
                      PDF
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </div>
        );
      })}
    </div>
  );
}
