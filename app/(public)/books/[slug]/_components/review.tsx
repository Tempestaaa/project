import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

export default function Review() {
  return (
    <div className="flex gap-4 my-6">
      <Avatar>
        <AvatarImage src="/user-profile.jpg" alt="user's avatar" />
        <AvatarFallback>TT</AvatarFallback>
      </Avatar>

      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2 justify-between font-heading">
          <p className="font-semibold hover:underline underline-offset-2 cursor-pointer">
            @Username
          </p>

          <div className="flex items-center gap-1">
            <StarIcon fill="#fff0d1" className="text-foreground size-3.5" />
            <span className="leading-3">5</span>
          </div>
        </div>

        <p className="text-foreground/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem magnam,
          velit tenetur quisquam placeat, ab sit tempora consequuntur optio
          inventore ad similique explicabo corrupti. Fugiat pariatur dignissimos
          id eligendi ea?
        </p>
      </div>
    </div>
  );
}
