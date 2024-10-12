import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "./client";

// Initialize the Sanity image builder
const builder = imageUrlBuilder(client);

// Function to generate the image URL from the asset
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
