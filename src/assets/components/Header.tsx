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
    <div>
      <h1 style={{ color: "darkcyan" }} className={`Header ${variant}`}>
        {title}
      </h1>
      <span style={{ color: "firebrick" }} className={`Header ${variant}`}>
        {subtitle}
      </span>
      <Children />
      <Children />
      <Children />
    </div>
  );
}
