
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import { Layout } from './components/Layout';
import { Shop } from './pages/Shop';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProductDetail } from './pages/ProductDetail';
import { AIAssistant } from './pages/AIAssistant';

// Simple placeholder components for demonstration
const CartPage = () => <div className="p-8 text-center"><h2 className="text-2xl font-bold">Your Shopping Cart</h2><p className="text-gray-500 mt-2">Implementation of the checkout flow with Stripe/Razorpay simulation goes here.</p></div>;
const SellerDashboard = () => <div className="p-8 text-center"><h2 className="text-2xl font-bold">Seller Hub</h2><p className="text-gray-500 mt-2">Manage your inventory, track sales, and fulfill orders.</p></div>;
const OrdersPage = () => <div className="p-8 text-center"><h2 className="text-2xl font-bold">My Orders</h2><p className="text-gray-500 mt-2">Track your active shipments and view order history.</p></div>;
const NotificationsPage = () => <div className="p-8 text-center"><h2 className="text-2xl font-bold">Notifications</h2><p className="text-gray-500 mt-2">Stay updated on your orders and promotions.</p></div>;

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/seller" element={<SellerDashboard />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="*" element={<div className="p-8 text-center">404 - Not Found</div>} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
