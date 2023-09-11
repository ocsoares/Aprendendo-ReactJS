interface ITextChildrenProps {
  text: string;
}

export const TextChildren = (props: ITextChildrenProps) => {
  const { text } = props;

  return <p>{text}</p>;
};
