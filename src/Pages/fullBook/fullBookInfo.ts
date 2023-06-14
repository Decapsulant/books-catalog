interface FullBookInfo {
  pageCount: number;
  title: string;
  language: string;
  authors: string[];
  publishedDate: string;
  description: string;
  imageLinks?: {
    thumbnail: string;
  };
  averageRating?: number;
  categories?: string;
}

export interface FullBookInfoResponse {
  volumeInfo: FullBookInfo;
}
