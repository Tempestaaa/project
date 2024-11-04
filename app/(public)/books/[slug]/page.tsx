import BookDetails from "@/app/(public)/books/[slug]/_components/book-details";
import RatingReview from "@/app/(public)/books/[slug]/_components/rating-review";
import { ScrollArea } from "@/components/ui/scroll-area";
import { book_data } from "@/data";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BookPage({ params }: Props) {
  const slug = (await params).slug;
  const book = book_data.filter((item) => item.id.toString() === slug)[0];

  return (
    <article className="flex flex-col md:flex-row gap-8 px-4 h-full">
      <section className="w-full md:w-1/5 relative min-h-[350px] grid place-items-center md:block">
        <Image
          src={book.image}
          alt="book image"
          width={300}
          height={1}
          className="user-drag-none"
        />
      </section>

      <div className="flex flex-col lg:flex-row gap-8 flex-1 font-paragraph">
        <BookDetails book={book} />
        <RatingReview />
      </div>
    </article>
  );
}
