import Header from "@/app/(public)/books/[slug]/_components/header";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon, StarIcon } from "lucide-react";

export default function Rating() {
  return (
    <div className="space-y-8">
      <form>
        <Label>
          <Header title="Write your review" />
          <Textarea
            rows={10}
            className="resize-none mt-4"
            placeholder="What's your opinion on this book?"
          />
        </Label>

        <div className="flex justify-end mt-2">
          <Button type="submit">
            <SendIcon />
            <span>Send</span>
          </Button>
        </div>
      </form>

      <form>
        <Header title="Rating" />
        <div className="flex items-center justify-center gap-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="size-10" />
          ))}
        </div>

        <div className="flex justify-end mt-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
