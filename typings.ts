type Article = {
  author?: string;
  category: string;
  country: string;
  description: string;
  image?: string;
  language: string;
  published_at: string;
  source: string;
  title: string;
  url: string;
}

type Pagination = {
  count: number;
  limit: number;
  offset: number;
  total: number;
}

type NewsResponse = {
  pagination: Pagination;
  data: Article[];
}

type Category =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";