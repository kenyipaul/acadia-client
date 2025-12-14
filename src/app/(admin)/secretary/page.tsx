import "@/styles/secretary.css";
import "@/styles/statsCard.css";
import StatsCards from "@/components/ui/statsCard";
import type { StatCardProps } from "@/components/ui/statsCard";
import { FaUserGraduate } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const statsData: StatCardProps[] = [
  {
    title: "New admission",
    value: "28",
    icon: <FaUserGraduate />,
    bgColor: "#A7E6CF",
    iconColor: "#17B581",
  },
  {
    title: "Students",
    value: "4,950",
    icon: <FaUserGraduate />,
    bgColor: "#B9E0FF",
    iconColor: "#32A5FF",
  },
  {
    title: "Students per-class",
    value: "50",
    icon: <FaUserGraduate />,
    bgColor: "#FFE4B5",
    iconColor: "#FFC342",
  },
  {
    title: "Notice published",
    value: "12",
    icon: <IoIosNotifications />,
    bgColor: "#C8F2B4",
    iconColor: "#6FD33B",
  },
];

export default function Secretary() {
  return (
    <main className="p-2">
      <h1 className="header">Secretary Dashboard</h1>
      <p className="headerDis">
        Manage students records and school communications.
      </p>

        <StatsCards data={statsData} />

    </main>
  );
}
