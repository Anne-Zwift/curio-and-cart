// Product image
export interface ProductImage {
  url: string;
  alt: string;
}

// Review
export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

// The online shop model
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  review: Review[];
}

export interface ApiResponse {
  data: Product[];
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}
