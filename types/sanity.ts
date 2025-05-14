import { PortableTextBlock } from "next-sanity";

export type Hero = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
};

export type WorkProps = {
  _id: string;
  _createdAt: string;
  title: string;
  company: string;
  service_type: string[];
  image: string;
  alt: string;
  slug: string;
  content: PortableTextBlock[]; //Sanity stores rich text as array of TextBlocks
};

export type Review = {
  _id: string;
  _createdAt: Date;
  name: string;
  company: string;
  review: string;
  url: string;
};

export type Service = {
  _id: string;
  _createdAt: Date;
  title: string;
  subtitle: string;
  icon: string | undefined;
};
