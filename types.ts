
export type UserRole = 'ADMIN' | 'SELLER' | 'CUSTOMER';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  rating: number;
  reviews: number;
  sellerId: string;
  sellerName: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type OrderStatus = 'PENDING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'RETURNED';

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  date: string;
  trackingNumber?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
  read: boolean;
}
