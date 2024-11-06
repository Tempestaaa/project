import Link from "next/link";

interface Props {
  title: string;
  href: string;
}

export default function Header({ title, href }: Props) {
  return (
    <div className="flex items-end justify-between gap-4">
      <h2 className="text-3xl font-bold font-heading border-b border-foreground">
        {title}
      </h2>
      <Link
        href={href}
        className="text-foreground/60 hover:text-foreground duration-300 cursor-pointer"
      >
        More
      </Link>
    </div>
  );
}
