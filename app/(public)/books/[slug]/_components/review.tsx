import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { iUser } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import Link from "next/link";

interface Props {
  user: iUser;
}

export default function Review({ user }: Props) {
  return (
    <div className="flex gap-4 my-6">
      <Link href={`/profile/${1}`}>
        <Avatar>
          <AvatarImage src="/user-profile.jpg" alt="user's avatar" />
          <AvatarFallback>TT</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2 justify-between font-heading">
          <Link
            href={`/profile/${user.id}`}
            className="font-semibold hover:underline underline-offset-2 cursor-pointer"
          >
            {user.username}
          </Link>

          <div className="flex items-center gap-1">
            <StarIcon fill="#fff0d1" className="text-foreground size-3.5" />
            <span className="leading-3">{user.rating}</span>
          </div>
        </div>

        <p className="text-xs text-foreground/60 italic">
          {formatDate(user.createdAt)}
        </p>

        <p>{user.review}</p>
      </div>
    </div>
  );
}
