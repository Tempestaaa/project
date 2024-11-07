export interface iNavLinks {
  title: string;
  href: string;
}

export interface iBook {
  id: number;
  title: string;
  author: string;
  desc: string;
  image: string;
  rating: number;
  price: number;
}

export interface iUser {
  id: number;
  username: string;
  review: string;
  createdAt: string;
  rating: number;
}
