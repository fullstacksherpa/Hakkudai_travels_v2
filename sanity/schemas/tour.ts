import { defineType } from "sanity";

import { Rule } from "sanity";
export const tour = defineType({
  name: "tour",
  title: "Tour",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Title is Required"),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: Rule) => Rule.required().error("Price is Required"),
    },
    {
      name: "day",
      title: "Day",
      type: "string",
      validation: (Rule: Rule) => Rule.required().error("Write how many days of trip"),
    },
    {
      name: "tourImage",
      title: "Tour Image",
      type: "image",
      options: {},
      validation: (Rule: Rule) => Rule.required().error("Please Provide image"),
    },
    {
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
  ],
});
