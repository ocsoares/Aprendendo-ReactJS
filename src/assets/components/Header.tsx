import { PropsWithChildren } from "react";

interface IHeaderProps {
  title: string;
  subtitle: string;
}

export function Header(props: PropsWithChildren<IHeaderProps>) {
  const { title, subtitle, children } = props;

  return (
    <div>
      <h1 style={{ color: "darkcyan" }}>{title}</h1>
      <span style={{ color: "firebrick" }}>{subtitle}</span>
      <p style={{ color: "darkorchid" }}>{children}</p>
    </div>
  );
}
