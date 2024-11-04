interface Props {
  title: string;
  value: React.ReactNode;
}

export default function InformationRow({ title, value }: Props) {
  return (
    <div className="flex items-center">
      <p className="w-1/4 font-heading font-bold">{title}</p>
      <p className="flex-1 text-foreground/60">{value}</p>
    </div>
  );
}
