"use client";
// AnnouncementsClient.tsx

import { AnnouncementCard, Announcement } from "@/components/ui/Announcement";

interface Props {
  announcements: Announcement[];
}

export default function AnnouncementsClient({ announcements }: Props) {
  return (
    <>
      {announcements.map((item) => (
        <AnnouncementCard
          key={item.id}
          data={item}
          onEdit={() => console.log("Edit", item.id)}
          onDelete={() => console.log("Delete", item.id)}
        />
      ))}
    </>
  );
}
