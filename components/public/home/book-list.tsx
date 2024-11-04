import BookCard from "@/components/public/home/book-card";
import Header from "@/components/public/home/header";
import { book_data } from "@/data";

export default function BookList() {
  return (
    <div className="space-y-8">
      <Header title="All Books" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
        {book_data.map((item) => (
          <BookCard key={item.id} book={item} />
        ))}
      </div>
    </div>
  );
}
