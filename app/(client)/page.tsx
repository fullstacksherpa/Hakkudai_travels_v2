import { ModeToggle } from "@/components/mode-toggle";
import { client } from "@/sanity/lib/client";
import { Blog } from "@/utils/interface";

async function getBlogs() {
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
  body
}
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const blogs: Blog[] = await getBlogs();
  console.log(blogs, "blogs");
  return (
    <>
      <div className="items-center justify-center">
        <ModeToggle />
      </div>
      <div>{blogs?.length > 0 && blogs?.map((blog) => <p key={blog._id}>{blog.title}</p>)}</div>
    </>
  );
}
