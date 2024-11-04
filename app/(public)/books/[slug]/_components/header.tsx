interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <h5 className="font-heading font-bold text-xl border-b border-foreground w-fit">
      {title}
    </h5>
  );
}
