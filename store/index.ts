import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/sanity.types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  // 🛒 Cart
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string, quantity?: number) => void;
  deleteCartProduct: (productId: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getSubTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => CartItem[];

  // ❤️ Wishlist
  favoriteProduct: Product[];
  addToFavorite: (product: Product) => Promise<void>;
  removeFromFavorite: (productId: string) => void;
  resetFavorite: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // --------------------
      // 🛒 CART STATE
      // --------------------
      items: [],

      addItem: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product._id === product._id
          );

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? {
                      ...item,
                      quantity: Number(
                        (item.quantity + quantity).toFixed(3)
                      ),
                    }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, { product, quantity }],
          };
        }),

      removeItem: (productId, quantity = 1) =>
        set((state) => ({
          items: state.items.reduce((acc, item) => {
            if (item.product._id === productId) {
              const newQty = Number((item.quantity - quantity).toFixed(3));
              if (newQty > 0) {
                acc.push({ ...item, quantity: newQty });
              }
            } else {
              acc.push(item);
            }
            return acc;
          }, [] as CartItem[]),
        })),

      deleteCartProduct: (productId) =>
        set((state) => ({
          items: state.items.filter(
            (item) => item.product._id !== productId
          ),
        })),

      resetCart: () => set({ items: [] }),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) =>
            total + (item.product.price ?? 0) * item.quantity,
          0
        ),

      getSubTotalPrice: () =>
        get().items.reduce((total, item) => {
          const price = item.product.price ?? 0;
          const discount = ((item.product.discount ?? 0) * price) / 100;
          return total + (price - discount) * item.quantity;
        }, 0),

      getItemCount: (productId) => {
        const item = get().items.find(
          (item) => item.product._id === productId
        );
        return item ? item.quantity : 0;
      },

      getGroupedItems: () => get().items,

      // --------------------
      // ❤️ WISHLIST STATE
      // --------------------
      favoriteProduct: [],

      addToFavorite: async (product) => {
        set((state) => {
          const exists = state.favoriteProduct.some(
            (item) => item._id === product._id
          );

          return {
            favoriteProduct: exists
              ? state.favoriteProduct.filter(
                  (item) => item._id !== product._id
                )
              : [...state.favoriteProduct, product],
          };
        });
      },

      removeFromFavorite: (productId) =>
        set((state) => ({
          favoriteProduct: state.favoriteProduct.filter(
            (item) => item._id !== productId
          ),
        })),

      resetFavorite: () => set({ favoriteProduct: [] }),
    }),
    {
      name: "shop-cart-wishlist-store", // localStorage key
    }
  )
);

export default useStore;
