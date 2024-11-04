import Rating from "@/app/(public)/books/[slug]/_components/rating";
import Review from "@/app/(public)/books/[slug]/_components/review";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RatingReview() {
  return (
    <section className="flex-1">
      <Tabs defaultValue="rating" className="h-full space-y-4">
        <TabsList>
          <TabsTrigger value="rating">Rating</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>

        <TabsContent value="rating">
          <Rating />
        </TabsContent>

        <ScrollArea className="h-[550px] pr-6">
          <TabsContent value="reviews" className="space-y-6">
            {[...Array(8)].map((_, i) => (
              <Review key={i} />
            ))}
          </TabsContent>

          <ScrollBar />
        </ScrollArea>
      </Tabs>
    </section>
  );
}
