type TextNode = {
  type: 'text';
  text: string;
};

type ParagraphNode = {
  type: 'paragraph';
  children: TextNode[];
};

type Avatar = {
  id: number;
  documentId: string;
  url: string;
  mime: string;
  name: string;
};

export type ReviewAdapterType = {
  id: number;
  documentId: string;
  name: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  source: string;
  description: ParagraphNode[];
  avatar: Avatar[];
};

export type ResponseAdapterType = {
  createdAt: string;
  publishedAt: string;
  name: string;
  link: string;
  description: string;
  documentId: string;
  id: string;
  source: string;
  avatar: string | undefined;
  updatedAt: string;
};
