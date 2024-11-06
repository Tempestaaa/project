import HeaderFilter from "@/app/(public)/books/_components/header-filter";
import BookCard from "@/components/public/home/book-card";
import { book_data } from "@/data";

interface Props {}

export default function BooksPage({}: Props) {
  return (
    <article className="space-y-8">
      <HeaderFilter />
      <section className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 flex-1">
        {book_data.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </section>
    </article>
  );
}
