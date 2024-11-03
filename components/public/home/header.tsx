interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-foreground/60 hover:text-foreground duration-300 cursor-pointer">
        More
      </p>
    </div>
  );
}
