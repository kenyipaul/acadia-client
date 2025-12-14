import "@/styles/pageHeader.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="page-header">
      <h1 className="page-header_title">{title}</h1>

      {subtitle && <p className="page-header_subtitle">{subtitle}</p>}
    </header>
  );
}
