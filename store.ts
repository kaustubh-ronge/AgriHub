// import { create } from "zustand";
// import { persist } from "zustand/middleware";
// import { Product } from "./sanity.types";

// export interface CartItem {
//   product: Product;
//   quantity: number;
// }

// interface StoreState {
//   items: CartItem[];
//   addItem: (product: Product, quantity?: number) => void;
//   removeItem: (productId: string, quantity?: number) => void;
//   deleteCartProduct: (productId: string) => void;
//   resetCart: () => void;
//   getTotalPrice: () => number;
//   getSubTotalPrice: () => number;
//   getItemCount: (productId: string) => number;
//   getGroupedItems: () => CartItem[];
//   //   // favorite
//   favoriteProduct: Product[];
//   addToFavorite: (product: Product) => Promise<void>;
//   removeFromFavorite: (productId: string) => void;
//   resetFavorite: () => void;
// }

// const useStore = create<StoreState>()(
//   persist(
//     (set, get) => ({
//       items: [],
//       favoriteProduct: [],
//       addItem: (product, quantity = 1) =>
//         set((state) => {
//           const existingItem = state.items.find(
//             (item) => item.product._id === product._id
//           );
//           if (existingItem) {
//             return {
//               items: state.items.map((item) =>
//                 item.product._id === product._id
//                   ? { ...item, quantity: Number((item.quantity + quantity).toFixed(3)) }
//                   : item
//               ),
//             };
//           } else {
//             return { items: [...state.items, { product, quantity }] };
//           }
//         }),
//       removeItem: (productId, quantity = 1) =>
//         set((state) => ({
//           items: state.items.reduce((acc, item) => {
//             if (item.product._id === productId) {
//               const newQty = Number((item.quantity - quantity).toFixed(3));
//               if (newQty > 0) {
//                 acc.push({ ...item, quantity: newQty });
//               }
//             } else {
//               acc.push(item);
//             }
//             return acc;
//           }, [] as CartItem[]),
//         })),
//       deleteCartProduct: (productId) =>
//         set((state) => ({
//           items: state.items.filter(
//             ({ product }) => product?._id !== productId
//           ),
//         })),
//       resetCart: () => set({ items: [] }),
//       getTotalPrice: () => {
//         return get().items.reduce(
//           (total, item) => total + (item.product.price ?? 0) * item.quantity,
//           0
//         );
//       },
//       getSubTotalPrice: () => {
//         return get().items.reduce((total, item) => {
//           const price = item.product.price ?? 0;
//           const discount = ((item.product.discount ?? 0) * price) / 100;
//           const discountedPrice = price + discount;
//           return total + discountedPrice * item.quantity;
//         }, 0);
//       },
//       getItemCount: (productId) => {
//         const item = get().items.find((item) => item.product._id === productId);
//         return item ? item.quantity : 0;
//       },
//       getGroupedItems: () => get().items,
//       addToFavorite: (product: Product) => {
//         return new Promise<void>((resolve) => {
//           set((state: StoreState) => {
//             const isFavorite = state.favoriteProduct.some(
//               (item) => item._id === product._id
//             );
//             return {
//               favoriteProduct: isFavorite
//                 ? state.favoriteProduct.filter(
//                     (item) => item._id !== product._id
//                   )
//                 : [...state.favoriteProduct, { ...product }],
//             };
//           });
//           resolve();
//         });
//       },
//       removeFromFavorite: (productId: string) => {
//         set((state: StoreState) => ({
//           favoriteProduct: state.favoriteProduct.filter(
//             (item) => item?._id !== productId
//           ),
//         }));
//       },
//       resetFavorite: () => {
//         set({ favoriteProduct: [] });
//       },
//     }),
//     {
//       name: "cart-store",
//     }
//   )
// );

// export default useStore;























// useStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "./sanity.types";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface StoreState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string, quantity?: number) => void;
  // ✅ ADD THIS NEW METHOD TO THE INTERFACE
  setItemQuantity: (productId: string, quantity: number) => void; 
  deleteCartProduct: (productId: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getSubTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItems: () => CartItem[];
  favoriteProduct: Product[];
  addToFavorite: (product: Product) => Promise<void>;
  removeFromFavorite: (productId: string) => void;
  resetFavorite: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      items: [],
      favoriteProduct: [],
      
      // ✅ ADD THE IMPLEMENTATION HERE
      setItemQuantity: (productId, quantity) =>
        set((state) => {
          if (quantity <= 0) {
            return { items: state.items.filter((item) => item.product._id !== productId) };
          }
          return {
            items: state.items.map((item) =>
              item.product._id === productId ? { ...item, quantity } : item
            ),
          };
        }),

      addItem: (product, quantity = 1) =>
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product._id === product._id
          );
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.product._id === product._id
                  ? { ...item, quantity: Number((item.quantity + quantity).toFixed(3)) }
                  : item
              ),
            };
          } else {
            return { items: [...state.items, { product, quantity }] };
          }
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
      // ... rest of your store logic
      deleteCartProduct: (productId) =>
        set((state) => ({
          items: state.items.filter(({ product }) => product?._id !== productId),
        })),
      resetCart: () => set({ items: [] }),
      getTotalPrice: () => get().items.reduce((total, item) => total + (item.product.price ?? 0) * item.quantity, 0),
      getSubTotalPrice: () => get().items.reduce((total, item) => {
          const price = item.product.price ?? 0;
          const discount = ((item.product.discount ?? 0) * price) / 100;
          return total + (price + discount) * item.quantity;
        }, 0),
      getItemCount: (productId) => {
        const item = get().items.find((item) => item.product._id === productId);
        return item ? item.quantity : 0;
      },
      getGroupedItems: () => get().items,
      addToFavorite: (product) => new Promise((resolve) => {
          set((state) => {
            const isFav = state.favoriteProduct.some((i) => i._id === product._id);
            return { favoriteProduct: isFav ? state.favoriteProduct.filter((i) => i._id !== product._id) : [...state.favoriteProduct, { ...product }] };
          });
          resolve();
      }),
      removeFromFavorite: (id) => set((state) => ({ favoriteProduct: state.favoriteProduct.filter((i) => i?._id !== id) })),
      resetFavorite: () => set({ favoriteProduct: [] }),
    }),
    { name: "cart-store" }
  )
);

export default useStore;