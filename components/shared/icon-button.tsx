import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: LucideIcon;
}

export default function IconButton({ icon }: Props) {
  const Icon = icon;

  return (
    <Button className="bg-background w-10 h-10 rounded-full hover:bg-foreground hover:text-background text-foreground">
      <Icon />
    </Button>
  );
}
