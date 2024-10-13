import { SanityDocument } from "@sanity/client";

export interface BlogCardInterface {
  title: string;
  blogCardImage: string;
  publishedAt: string;
  slug: {
    _type: "slug";
    current: string;
  };
}

export interface Blog extends SanityDocument {
  title: string;
  slug: {
    _type: "slug";
    current: string;
  };
  publishedAt: string; // ISO 8601 date string
  excerpt: string;
  blogCardImage: {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
    hotspot: boolean;
  };
  body: Array<{
    _key: string;
    _type: "block" | "image";
    children?: Array<{
      _key: string;
      _type: "span";
      text: string;
      marks: string[];
    }>;
    markDefs?: any[];
    style?: string;
    alt?: string; // Only if the block type is image
  }>;
  categories: Array<{
    _type: "reference";
    _ref: string; // The reference to a category document
  }>;
  author: {
    _type: "reference";
    _ref: string; // The reference to an author document
  };
}

export interface Tour {
  _id: string; // ID of the document
  title: string; // Title of the tour
  price: number; // Price of the tour
  slug: {
    _type: "slug";
    current: string;
  };
  day: string; // Number of days (this should follow the format validation from earlier if necessary)
  tourImage: {
    _type: "image";
    asset: {
      _ref: string; // Reference to the image asset
      _type: "reference";
    };
  }; // Image field
  body: Array<{
    _type: "block" | "image";
    children?: Array<{
      _type: string;
      marks?: string[];
      text?: string;
    }>;
    alt?: string;
    asset?: {
      _ref: string;
      _type: "reference";
    };
  }> | null; // Body field which is an array of blocks or images
}

export interface TourCardInterface {
  slug: string;
  title: string; // Title of the tour
  price: number; // Price of the tour
  day: string; // Number of days (this should follow the format validation from earlier if necessary)
  tourImage: string;
  // Image field
}
