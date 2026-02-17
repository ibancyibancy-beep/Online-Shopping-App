
import { Product } from './types';

export const CATEGORIES = ['Electronics', 'Fashion', 'Home & Living', 'Beauty', 'Sports'];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Nexus Ultra Pro Watch',
    description: 'The ultimate smartwatch with health tracking and seamless connectivity.',
    price: 299.99,
    category: 'Electronics',
    images: ['https://picsum.photos/seed/watch1/600/600'],
    stock: 50,
    rating: 4.8,
    reviews: 1240,
    sellerId: 's1',
    sellerName: 'TechGizmo Store'
  },
  {
    id: '2',
    name: 'Leather Messenger Bag',
    description: 'Handcrafted genuine leather bag for the modern professional.',
    price: 129.50,
    category: 'Fashion',
    images: ['https://picsum.photos/seed/bag1/600/600'],
    stock: 20,
    rating: 4.5,
    reviews: 450,
    sellerId: 's2',
    sellerName: 'LeatherCrafts'
  },
  {
    id: '3',
    name: 'Wireless Noise Cancelling Headphones',
    description: 'Pure sound, zero noise. Industry-leading ANC technology.',
    price: 349.00,
    category: 'Electronics',
    images: ['https://picsum.photos/seed/audio1/600/600'],
    stock: 15,
    rating: 4.9,
    reviews: 3200,
    sellerId: 's1',
    sellerName: 'TechGizmo Store'
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    description: 'Sleek design with adjustable brightness and color temperature.',
    price: 59.99,
    category: 'Home & Living',
    images: ['https://picsum.photos/seed/lamp1/600/600'],
    stock: 100,
    rating: 4.2,
    reviews: 150,
    sellerId: 's3',
    sellerName: 'ModernHome'
  }
];
