import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store';
import { 
  LayoutDashboard, 
  Package, 
  Users, 
  ShoppingCart, 
  LogOut 
} from 'lucide-react';

export function Layout() {
  const { user, setUser } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-gray-900">
                <Package className="h-6 w-6 mr-2" />
                <span className="font-semibold">Inventory System</span>
              </Link>
            </div>
            
            {user && (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-700">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="flex">
        {user && (
          <aside className="w-64 bg-white shadow-sm h-[calc(100vh-4rem)]">
            <nav className="mt-5 px-2">
              <Link
                to="/dashboard"
                className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50"
              >
                <LayoutDashboard className="mr-3 h-6 w-6" />
                Dashboard
              </Link>
              
              {user.role === 'admin' && (
                <>
                  <Link
                    to="/users"
                    className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50"
                  >
                    <Users className="mr-3 h-6 w-6" />
                    Users
                  </Link>
                  <Link
                    to="/products"
                    className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50"
                  >
                    <Package className="mr-3 h-6 w-6" />
                    Products
                  </Link>
                </>
              )}
              
              {user.role === 'vendor' && (
                <Link
                  to="/inventory"
                  className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50"
                >
                  <Package className="mr-3 h-6 w-6" />
                  My Inventory
                </Link>
              )}
              
              {user.role === 'customer' && (
                <Link
                  to="/orders"
                  className="mt-1 group flex items-center px-2 py-2 text-base font-medium rounded-md text-gray-900 hover:bg-gray-50"
                >
                  <ShoppingCart className="mr-3 h-6 w-6" />
                  My Orders
                </Link>
              )}
            </nav>
          </aside>
        )}
        
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}