import InformationRow from "@/app/(public)/books/[slug]/_components/information-row";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/lib/utils";

export default function ProfilePage() {
  return (
    <article className="h-full grid place-items-center">
      <Card className="max-w-2xl rounded-none border-none">
        <CardContent className="py-6 flex flex-col md:flex-row gap-8">
          <div className="space-y-4">
            <Avatar className="w-28 h-28 self-center md:self-start">
              <AvatarImage src="/user-profile.jpg" alt="user's avatar" />
              <AvatarFallback>RR</AvatarFallback>
            </Avatar>

            <div className="font-paragraph space-y-1">
              <p>
                4{" "}
                <span className="font-heading font-bold text-foreground/60">
                  Followed
                </span>
              </p>
              <p>
                4{" "}
                <span className="font-heading font-bold text-foreground/60">
                  Following
                </span>
              </p>
              <p>
                4{" "}
                <span className="font-heading font-bold text-foreground/60">
                  Friends
                </span>
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-2">
            <p className="font-heading font-extrabold text-2xl">Username</p>
            <Separator className="bg-foreground/30" />

            <div className="space-x-2 *:min-w-20">
              <Button>Follow</Button>
              <Button>Message</Button>
              <Button>Add</Button>
            </div>

            <InformationRow title="Favourites" value="4" />
            <InformationRow
              title="Join date"
              value={formatDate(new Date().toUTCString())}
            />
            <InformationRow
              title="Bio"
              value="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae tempora soluta fugiat. Dolore sunt voluptate obcaecati reprehenderit, nihil labore laboriosam pariatur molestiae, eaque rem et numquam natus velit, laudantium nam."
            />
          </div>
        </CardContent>
      </Card>
    </article>
  );
}
