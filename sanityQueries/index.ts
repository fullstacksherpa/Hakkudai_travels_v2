import { client } from "@/sanity/lib/client";

export async function getBlogs() {
  const query = `
       *[_type == "blog"] {
  _id,
  title,
  slug,
  publishedAt,
  author-> {
    name,
    slug
  },
  excerpt,
  body,
  blogCardImage
}
  `;
  const data = await client.fetch(query);
  return data;
}

export async function getTours() {
  const query = `
        *[_type == "tour"] {
  _id,
  title,
  price,
    day,
    tourImage,
    body,
    slug
}
  `;
  const data = await client.fetch(query);
  return data;
}
