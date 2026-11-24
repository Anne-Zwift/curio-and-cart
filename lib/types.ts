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

export interface CartItem {
  product: Product;
  quantity: number;
}

// remote control, update state
export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface ContactFormValues {
  fullName: string;
  subject: string;
  email: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  subject?: string;
  email?: string;
  message?: string;
}
