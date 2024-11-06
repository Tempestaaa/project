import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { book_data, book_genres } from "@/data";

export default function HeaderFilter() {
  return (
    <section className="space-y-4 mt-8">
      <h1 className="font-heading text-3xl font-extrabold text-center">
        All Products
      </h1>
      <div className="flex items-center justify-between gap-4 whitespace-nowrap">
        <h5 className="font-heading text-base font-bold">
          {book_data.length} <span className="text-foreground/60">items</span>
        </h5>

        <Select>
          <SelectTrigger className="min-w-40 w-fit">
            <SelectValue placeholder="Select a genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>
              {book_genres.map((item) => (
                <SelectItem
                  key={item}
                  value={item}
                  className="capitalize hover:!bg-foreground hover:!text-background duration-300"
                >
                  {item}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
