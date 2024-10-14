import { defineType } from "sanity";

export const gallery = defineType({
  name: "gallery",
  type: "document",
  title: "Image Gallery",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Name for Image",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true, // Allows for image cropping and focus adjustments
          },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Important for accessibility and SEO",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    },
  ],
});
