"use client";

import { book_data, book_genres } from "@/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function HeaderFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value.toLowerCase();
    const query = new URLSearchParams(searchParams);
    if (genre) query.set("genre", genre);
    else query.delete("genre");

    replace(`${pathname}?${query.toString()}`);
  };

  return (
    <section className="space-y-4 mt-8">
      <h1 className="font-heading text-3xl font-extrabold text-center">
        All Products
      </h1>
      <div className="flex items-center justify-between gap-4 whitespace-nowrap">
        <h5 className="font-heading text-base font-bold">
          {book_data.length} <span className="text-foreground/60">items</span>
        </h5>

        <select
          onChange={handleFilter}
          className="h-10 bg-background text-foreground border border-foreground w-fit min-w-40 px-2"
        >
          <option disabled>Select a genre</option>
          {book_genres.map((item) => (
            <option
              key={item}
              value={item}
              className="capitalize hover:!bg-foreground hover:!text-background duration-300"
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}
