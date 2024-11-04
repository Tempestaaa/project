import { Button } from "@/components/ui/button";
import { HeartIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";

interface Props {
  image: string;
  price: number;
}

export default function ImageSection({ image, price }: Props) {
  return (
    <section className="w-full md:w-1/4 lg:w-1/5 relative space-y-4">
      <div className="grid place-items-center md:block min-h-[350px]">
        <Image
          src={image}
          alt="book image"
          width={300}
          height={1}
          className="user-drag-none"
        />
      </div>

      <div className="flex flex-col gap-2 *:w-full">
        <div className="font-heading font-bold my-4 space-y-1 text-center md:text-start">
          <p className="text-foreground/60">Price</p>
          <p className="text-5xl">${price}</p>
        </div>

        <Button>
          <ShoppingCartIcon />
          <span>Add to Cart</span>
        </Button>
        <Button>
          <HeartIcon />
          <span>Favourite</span>
        </Button>
      </div>
    </section>
  );
}
