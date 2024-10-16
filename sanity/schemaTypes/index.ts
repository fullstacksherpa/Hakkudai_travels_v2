import { type SchemaTypeDefinition } from "sanity";
import { blog } from "../schemas/blog";
import { category } from "../schemas/category";
import { author } from "../schemas/author";
import { tour } from "../schemas/tour";
import { video } from "../schemas/video";
import { gallery } from "../schemas/gallery";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog, category, author, tour, video, gallery],
};
