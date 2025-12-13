export interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  bgColor?: string;
  iconColor?: string;
}

export interface StatsCardsProps {
  data: StatCardProps[];
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  bgColor = "#A7E6CF",
  iconColor = "rgba(255,255,255,0.4)",
}) => {
  return (
    <div className="stat-card" style={{ backgroundColor: bgColor }}>
      <div className="stat-text">
        <span className="stat-title">{title}</span>
        <span className="stat-value">{value}</span>
      </div>
      <div className="stat-icon" style={{ color: iconColor }}>
        {icon}
      </div>
    </div>
  );
};

const StatsCards: React.FC<StatsCardsProps> = ({ data }) => {
  return (
    <div className="stats-container">
      {data.map((item, index) => (
        <StatCard key={index} {...item} />
      ))}
    </div>
  );
};

export default StatsCards;
