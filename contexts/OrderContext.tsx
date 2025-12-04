"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Order } from "@/types/order";
import { useAuth } from "./AuthContext";

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Omit<Order, "id" | "createdAt" | "updatedAt">) => void;
  getOrderById: (id: string) => Order | undefined;
  getUserOrders: () => Order[];
  loading: boolean;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  // Load orders from localStorage on mount
  useEffect(() => {
    const loadOrders = () => {
      try {
        const storedOrders = localStorage.getItem("orders");
        if (storedOrders) {
          const parsedOrders = JSON.parse(storedOrders);
          // Convert date strings back to Date objects
          const ordersWithDates = parsedOrders.map((order: any) => ({
            ...order,
            createdAt: new Date(order.createdAt),
            updatedAt: new Date(order.updatedAt),
          }));
          setOrders(ordersWithDates);
        }
      } catch (error) {
        console.error("Failed to load orders:", error);
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem("orders", JSON.stringify(orders));
      } catch (error) {
        console.error("Failed to save orders:", error);
      }
    }
  }, [orders, loading]);

  const addOrder = (orderData: Omit<Order, "id" | "createdAt" | "updatedAt">) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setOrders((prevOrders) => [newOrder, ...prevOrders]);
  };

  const getOrderById = (id: string): Order | undefined => {
    return orders.find((order) => order.id === id);
  };

  const getUserOrders = (): Order[] => {
    if (!user) return [];
    return orders.filter((order) => order.userId === user.email);
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        getOrderById,
        getUserOrders,
        loading,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
