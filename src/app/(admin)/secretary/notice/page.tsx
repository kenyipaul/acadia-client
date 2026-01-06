import Link from "next/link";
import * as Icon from "@/components/ui/icons";
import "@/styles/secretary.css";
import "@/styles/statsCard.css";
import StatsCards from "@/components/ui/statsCard";
import type { StatCardProps } from "@/components/ui/statsCard";
import PageHeader from "@/components/ui/PageHeader";
import { IoIosNotifications } from "react-icons/io";
import { Announcement } from "@/components/ui/Announcement";
import AnnouncementsClient from "@/components/ui/AnnoucementsClient";
import "@/styles/annoucement.css";

const statsData: StatCardProps[] = [
  {
    title: "Total notices",
    value: "4",
    icon: <IoIosNotifications />,
    bgColor: "#A7E6CF",
    iconColor: "#17B581",
  },
  {
    title: "Published",
    value: "3",
    icon: <IoIosNotifications />,
    bgColor: "#B9E0FF",
    iconColor: "#32A5FF",
  },
  {
    title: "Draft",
    value: "1",
    icon: <IoIosNotifications />,
    bgColor: "#FFE4B5",
    iconColor: "#FFC342",
  },
  {
    title: "This month",
    value: "12",
    icon: <IoIosNotifications />,
    bgColor: "#C8F2B4",
    iconColor: "#6FD33B",
  },
];

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Mid-Term Exam Schedule Released",
    description: "The mid-term examination will begin on January 20, 2024.",
    date: "2024-01-15",
    audience: "All Students",
    status: "published",
    priority: "high",
  },
  {
    id: "2",
    title: "Library Hours Extended",
    description: "Library will now be open until 6:00 PM on weekdays.",
    date: "2024-01-12",
    audience: "Students",
    status: "draft",
    priority: "medium",
  },
  {
    id: "3",
    title: "Library Hours Extended",
    description: "Library will now be open until 6:00 PM on weekdays.",
    date: "2024-01-12",
    audience: "Students",
    status: "draft",
    priority: "low",
  },
  {
    id: "4",
    title: "Library Hours Extended",
    description: "Library will now be open until 6:00 PM on weekdays.",
    date: "2024-01-12",
    audience: "Students",
    status: "draft",
    priority: "low",
  },
];

export default function Notice() {
  return (
    <>
      <section className="header-section-notice">
        <PageHeader
          title="Annoucements & notices"
          subtitle="Create and manage school announcements"
        />

        {/* <Link href="/admin/employees/new"> */}
        <button className="gap-2 flex items-center bg-green-theme-100 text-green-theme-400 hover:bg-green-theme-400 hover:text-white px-5 py-3 rounded-full cursor-pointer">
          <Icon.NewUserIcon />
          <p className="text-[.95em]">Create Notice</p>
        </button>
        {/* </Link> */}
      </section>

      <section>
        <StatsCards data={statsData} />

        <section className="announcement-section">
          <AnnouncementsClient announcements={announcements} />
        </section>
      </section>
    </>
  );
}
