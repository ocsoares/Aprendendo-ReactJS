import { Children } from "./Children";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export function Header(props: IHeaderProps) {
  const { title, subtitle } = props;

  return (
    <div>
      <h1 style={{ color: "darkcyan" }}>{title}</h1>
      <span style={{ color: "firebrick" }}>{subtitle}</span>
      <Children />
      <Children />
      <Children />
    </div>
  );
}
