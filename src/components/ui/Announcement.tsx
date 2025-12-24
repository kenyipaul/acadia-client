"use client";

import React from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import "@/styles/annoucement.css";

export type AnnouncementStatus = "published" | "draft";
export type AnnouncementPriority = "high" | "medium" | "low";

export interface Announcement {
  id: string;
  title: string;
  description: string;
  date: string;
  audience: string;
  status: AnnouncementStatus;
  priority: AnnouncementPriority;
}

interface BadgeProps {
  label: string;
  variant: "status" | "priority";
  value: string;
}

const Badge: React.FC<BadgeProps> = ({ label, variant, value }) => {
  return (
    <span className={`badge badge-${variant} badge-${value}`}>{label}</span>
  );
};

interface AnnouncementCardProps {
  data: Announcement;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
  data,
  onEdit,
  onDelete,
}) => {
  const { title, description, date, audience, status, priority } = data;

  return (
    <div className="announcement-card">
      <div className="announcement-header">
        <h3>{title}</h3>

        <div className="announcement-actions">
          <button onClick={onEdit}>
            <FiEdit2 />
          </button>
          <button onClick={onDelete} className="danger">
            <FiTrash2 />
          </button>
        </div>
      </div>

      <div className="announcement-badges">
        <Badge
          label={status === "published" ? "Published" : "Draft"}
          variant="status"
          value={status}
        />
        <Badge
          label={priority.charAt(0).toUpperCase() + priority.slice(1)}
          variant="priority"
          value={priority}
        />
      </div>

      <p className="announcement-description">{description}</p>

      <div className="announcement-meta">
        <span>📅 {date}</span>
        <span>👥 {audience}</span>
      </div>
    </div>
  );
};
