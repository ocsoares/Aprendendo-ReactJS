import { Children } from "./Children";
import "./Header.css";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export function Header(props: IHeaderProps) {
  const { title, subtitle } = props;

  return (
    <div>
      <h1 style={{ color: "darkcyan" }} className="Header">
        {title}
      </h1>
      <span style={{ color: "firebrick" }} className="Header">
        {subtitle}
      </span>
      <Children />
      <Children />
      <Children />
    </div>
  );
}
