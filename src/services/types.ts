export type ImageSpec = {
  extension: "jpg" | "gif" | "png";
  path: string;
};

export type ResourceSpec = {
  name: string;
  resourceURI: string;
};

export type ComicsListItem = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string | null;
  modified: string;
  isbn: string;
  format: string;
  pageCount: number;
  resourceURI: string;
  urls: {
    type: "detail";
    url: string;
  }[];
  series: ResourceSpec;
  variants: ResourceSpec[];
  thumbnail: ImageSpec;
  images: ImageSpec[];
};
