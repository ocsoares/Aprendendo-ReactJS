import { Button } from "./Button";
import { Children } from "./Children";
import "./Header.css";

interface IHeaderProps {
  title: string;
  subtitle: string;
  variant: "small" | "medium" | "large" | "big-large";
}

export function Header(props: IHeaderProps) {
  const { title, subtitle, variant } = props;

  return (
    <div className={`Header ${variant}`}>
      <h1 style={{ color: "darkcyan" }}>{title}</h1>
      <span style={{ color: "firebrick" }}>{subtitle}</span>
      <Children />
      <Button />
    </div>
  );
}
