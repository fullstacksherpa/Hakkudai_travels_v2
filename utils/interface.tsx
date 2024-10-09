export interface Blog {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  categories: Array<Category>;
  author: string;
  _id: string;
}

export interface Category {
  name: string;
  slug: { current: string };
  _id: string;
}
