import Rating from "@/app/(public)/books/[slug]/_components/rating";
import Review from "@/app/(public)/books/[slug]/_components/review";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { book_comments } from "@/data";

export default function RatingReview() {
  return (
    <section className="flex-1">
      <Tabs defaultValue="reviews" className="h-full space-y-4">
        <TabsList>
          <TabsTrigger value="rating">Rating</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="rating">
          <Rating />
        </TabsContent>

        <TabsContent value="reviews">
          <ScrollArea className="h-[calc(100svh-12rem)] pr-6">
            {book_comments.map((item) => (
              <Review key={item.id} user={item} />
            ))}
            <ScrollBar />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </section>
  );
}
