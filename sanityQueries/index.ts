import { client } from "@/sanity/lib/client";

export async function getBlogs() {
  const query = `
      *[_type == "blog"] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  blogCardImage,
  author->{
    name,
    image
  }
}

  `;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

export async function getBlogCardData() {
  const query = `
      *[_type == "blog"] {
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  blogCardImage,
  author->{
    name,
    image
  }
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

export async function getTourCardData() {
  const query = `
        *[_type == "tour"] {
  _id,
  title,
  price,
    day,
    tourImage,
    slug
}
  `;
  const data = await client.fetch(query);
  return data;
}
