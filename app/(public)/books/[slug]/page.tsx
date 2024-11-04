import BookDetails from "@/app/(public)/books/[slug]/_components/book-details";
import ImageSection from "@/app/(public)/books/[slug]/_components/image-section";
import RatingReview from "@/app/(public)/books/[slug]/_components/rating-review";
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
      <ImageSection image={book.image} price={book.price} />

      <div className="flex flex-col lg:flex-row gap-8 flex-1 font-paragraph">
        <BookDetails book={book} />
        <RatingReview />
      </div>
    </article>
  );
}
