import { defineType } from "sanity";

export const video = defineType({
  name: "video",
  type: "document",
  title: "Video",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "videoFile",
      type: "file", // Using 'file' type for videos
      title: "Video File",
      options: {
        accept: "video/*", // Restrict to video files only
      },
    },
  ],
});
