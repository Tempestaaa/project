import InformationRow from "@/app/(public)/books/[slug]/_components/information-row";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { book_data } from "@/data";
import { formatDate } from "@/lib/utils";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BookPage({ params }: Props) {
  const slug = (await params).slug;
  const book = book_data.filter((item) => item.id.toString() === slug)[0];
  const bookGenres = [
    "Fantasy",
    "Science Fiction",
    "Mystery",
    "Romance",
    "Historical Fiction",
  ];

  return (
    <article className="flex flex-col md:flex-row gap-8 px-4 h-full">
      <section className="w-full md:w-1/5 relative min-h-[350px] grid place-items-center md:block">
        <Image src={book.image} alt="book image" width={300} height={1} />
      </section>

      <ScrollArea className="flex-1 font-paragraph">
        <div className="flex flex-col md:flex-row gap-8">
          <section className="flex-[2] flex flex-col gap-3">
            <h1 className="text-5xl font-bold font-heading">{book.title}</h1>
            <h2 className="text-4xl font-semibold text-foreground/60">
              by {book.author}
            </h2>

            <div className="space-y-2 mt-4">
              <h5 className="font-heading font-bold text-xl border-b border-foreground w-fit">
                Genres
              </h5>
              <ul className="flex gap-2 items-center flex-wrap">
                {bookGenres.map((item) => (
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
              <h5 className="font-heading font-bold text-xl border-b border-foreground w-fit">
                Description
              </h5>
              <p className="text-base">{book.desc}</p>
              <Button>More</Button>
            </div>

            <div className="space-y-2 mt-4">
              <h5 className="font-heading font-bold text-xl border-b border-foreground w-fit">
                More information
              </h5>
            </div>

            <InformationRow title="Original title" value={book.title} />
            <InformationRow title="Series" value={book.title} />
            <InformationRow title="Format" value={"Hardcover"} />
            <InformationRow title="Language" value={"Japanese"} />
            <InformationRow
              title="Published"
              value={formatDate(new Date().toUTCString())}
            />
          </section>

          <section className="flex-1">Review</section>
        </div>
      </ScrollArea>
    </article>
  );
}
