import BookList from "@/components/public/home/book-list";
import SearchForm from "@/components/public/home/search-form";
import { Separator } from "@/components/ui/separator";

interface Props {
  searchParams: Promise<{ query?: string }>;
}

export default async function HomePage({ searchParams }: Props) {
  const query = (await searchParams).query;

  return (
    <article className="h-full">
      <section className="justify-center items-center flex flex-col p-8 min-h-[360px] gap-6">
        <div className="text-center space-y-1">
          <h1 className="text-6xl font-black font-heading uppercase">
            Lose Yourself in a Good Book
          </h1>
          <p className="text-xl text-foreground/60">Escape the Ordinary</p>
        </div>

        <SearchForm query={query} />
      </section>

      <Separator className="mb-12 bg-foreground w-1/2 mx-auto" />
      <BookList />
    </article>
  );
}
