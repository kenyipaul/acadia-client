import "@/styles/button.css";

export type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  content: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  type = "button",
  variant = "primary",
  content,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
