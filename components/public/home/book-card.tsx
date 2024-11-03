import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BookCard() {
  return (
    <Card className="rounded-none border-foreground border-2 relative after:absolute after:z-10 after:bg-foreground after:top-2 after:left-2 after:w-full after:h-full group">
      <Link href={`/books/${1}`}>
        <div className="relative h-[400px] z-20">
          <Image
            src="/book-1.jpg"
            alt="book"
            fill
            className="object-fill"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </div>
      </Link>

      <div className="absolute -bottom-4 group-hover:bottom-0 group-hover:left-0 w-full py-2 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-300">
        <Button className="bg-background w-10 h-10 rounded-full hover:bg-foreground hover:text-background text-foreground">
          <ShoppingCartIcon />
        </Button>
        <Button className="bg-background w-10 h-10 rounded-full hover:bg-foreground hover:text-background text-foreground">
          <HeartIcon />
        </Button>
      </div>
    </Card>
  );
}
