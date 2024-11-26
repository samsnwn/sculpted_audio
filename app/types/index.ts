export type Client = {
  name: string;
  content: string;
  labels?: string;
  image: string;
};

export type Project = {
  name: string;
  content?: string;
  content2?: string;
  link: string;
  image: string;
};

export type Service = {
  title: string
  description: string
}

export type Faq = {
  question: string;
  answer: string;
}

export type AboutCardProps = {
    name: string;
    content: string;
  };
