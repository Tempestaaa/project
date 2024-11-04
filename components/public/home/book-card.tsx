import IconButton from "@/components/shared/icon-button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { iBook } from "@/lib/types";
import { EllipsisIcon, HeartIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  book: iBook;
}

export default function BookCard({ book }: Props) {
  return (
    <Card className="border-none">
      <CardTitle className="relative h-[260px] group">
        <Link href={`/books/${book.id}`}>
          <Image
            src={book.image}
            alt="book"
            fill
            className="object-contain py-4"
          />
        </Link>

        <div className="absolute top-4 right-1 flex flex-col gap-3 *:shadow-sm *:shadow-foreground opacity-0 group-hover:opacity-100 duration-300">
          <IconButton icon={ShoppingCartIcon} />
          <IconButton icon={HeartIcon} />
          <IconButton icon={EllipsisIcon} />
        </div>
      </CardTitle>

      <CardContent>
        <h3 className="font-paragraph text-base font-bold line-clamp-1">
          {book.title}
        </h3>
        <p className="text-foreground/60">by {book.author}</p>
        <h2 className="mt-2 text-2xl font-heading font-bold">${book.price}</h2>
      </CardContent>
    </Card>
  );
}
