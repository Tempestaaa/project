import Link from "next/link";
import { ChevronsLeftIcon } from "lucide-react";

export default function BackToHome() {
  return (
    <Link href="/" className="fixed top-0 left-0 w-full h-14">
      <div className="container flex items-center h-full gap-2 group *:duration-300">
        <ChevronsLeftIcon className="group-hover:opacity-60" />
        <span className="font-heading font-bold group-hover:opacity-60">
          Back to Home page
        </span>
      </div>
    </Link>
  );
}
