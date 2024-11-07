interface Props {
  title: string;
  value: React.ReactNode;
}

export default function InformationRow({ title, value }: Props) {
  return (
    <div className="flex">
      <p className="w-1/4 font-heading font-bold">{title}</p>
      <p className="flex-1 text-foreground/60 font-paragraph">{value}</p>
    </div>
  );
}
