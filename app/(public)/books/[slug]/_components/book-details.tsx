import Header from "@/app/(public)/books/[slug]/_components/header";
import InformationRow from "@/app/(public)/books/[slug]/_components/information-row";
import { Button } from "@/components/ui/button";
import { book_genres } from "@/data";
import { iBook } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface Props {
  book: iBook;
}

export default function BookDetails({ book }: Props) {
  return (
    <section className="flex-[2] flex flex-col gap-3">
      <h1 className="text-5xl font-bold font-heading">{book.title}</h1>
      <h2 className="text-4xl font-semibold text-foreground/60">
        by {book.author}
      </h2>

      <div className="space-y-2 mt-4">
        <Header title="Genres" />
        <ul className="flex gap-2 items-center flex-wrap">
          {book_genres.map((item) => (
            <li
              key={item}
              className="py-1 px-4 bg-foreground text-background cursor-pointer whitespace-nowrap"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-2 mt-4">
        <Header title="Description" />
        <p className="text-base text-foreground/60">{book.desc}</p>
        <Button>More</Button>
      </div>

      <div className="space-y-2 mt-4">
        <Header title="More information" />
        <InformationRow title="Original title" value={book.title} />
        <InformationRow title="Series" value={book.title} />
        <InformationRow title="Format" value={"Hardcover"} />
        <InformationRow title="Language" value={"Japanese"} />
        <InformationRow
          title="Published"
          value={formatDate(new Date().toUTCString())}
        />
      </div>
    </section>
  );
}
