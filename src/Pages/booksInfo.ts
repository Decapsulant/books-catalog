export interface Volume {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    averageRating?: number;
    imageLinks: {
      thumbnail: string;
    };
    categories?: string | string[];
  };
}

export interface VolumeResponse {
  items: Volume[];
  totalItems: number;
}
