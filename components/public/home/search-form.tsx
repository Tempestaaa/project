import SearchFormReset from "@/components/public/home/SearchFormReset";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Form from "next/form";

interface Props {
  query?: string;
}

export default function SearchForm({ query }: Props) {
  return (
    <Form
      id="search-form"
      action="/"
      scroll={false}
      className="w-1/3 flex items-center relative border border-foreground ring-1 has-[:focus-visible]:ring-foreground"
    >
      <Input
        name="query"
        defaultValue={query}
        placeholder="Search Book"
        className="focus-visible:ring-0 border-none"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="">
          <SearchIcon />
        </Button>
      </div>
    </Form>
  );
}
