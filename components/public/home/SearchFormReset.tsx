"use client";

import { XIcon } from "lucide-react";
import Link from "next/link";

export default function SearchFormReset() {
  const handleReset = () => {
    const form = document.getElementById("search-form") as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button
      type="reset"
      onClick={handleReset}
      className="hover:text-destructive duration-300"
    >
      <Link href="/">
        <XIcon size={16} />
      </Link>
    </button>
  );
}
