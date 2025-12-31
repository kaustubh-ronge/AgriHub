
// import { sanityFetch } from "../lib/live";
// import {
//   BLOG_CATEGORIES,
//   // BRAND_QUERY, // ❗️ No longer needed for product page
//   NURSERY_QUERY,
//   DEAL_PRODUCTS,
//   GET_ALL_BLOG,
//   LATEST_BLOG_QUERY,
//   MY_ORDERS_QUERY,
//   OTHERS_BLOG_QUERY,
//   PRODUCT_BY_SLUG_QUERY, // ✅ This is the new, powerful query
//   SINGLE_BLOG_QUERY,
//   NURSERY_BY_SLUG_QUERY,
//   HOME_BANNER_QUERY,
//   VIDEO_BLOG_QUERY,
// } from "./query";

// const getCategories = async (quantity?: number) => {
//   try {
//     const query = quantity
//       ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
//           ...,
//           "productCount": count(*[_type == "product" && references(^._id)])
//         }`
//       : `*[_type == 'category'] | order(name asc) {
//           ...,
//           "productCount": count(*[_type == "product" && references(^._id)])
//         }`;
//     const { data } = await sanityFetch({
//       query,
//       params: quantity ? { quantity } : {},
//     });
//     return data;
//   } catch (error) {
//     console.log("Error fetching categories", error);
//     return [];
//   }
// };

// const getAllNurseries = async () => {
//   try {
//     const { data } = await sanityFetch({ query: NURSERY_QUERY });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching all Nursery:", error);
//     return [];
//   }
// };

// export const getNurseryBySlug = async (slug: string) => {
//   try {
//     const nursery = await sanityFetch({
//       query: NURSERY_BY_SLUG_QUERY,
//       params: {
//         slug,
//       },
//     });
//     return nursery?.data || null;
//   } catch (error) {
//     console.error("Error fetching nursery by Slug:", error);
//     return null;
//   }
// };

// // Fetch a single nursery by its slug
// export const getNurseryBySlugQuery = `
//   *[_type == "nursery" && slug.current == $slug][0] {
//     _id,
//     title,
//     "slug": slug.current,
//     description,
//     "image": image.asset->url,
//     address,
//     phoneNumber,
//     email,
//     rating,
//     "products": *[_type == "product" && references(^._id)] {
//       _id,
//       title,
//       price,
//       "image": image.asset->url,
//       slug
//     }
//   }
// `;

// const getLatestBlogs = async () => {
//   try {
//     const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching latest Blogs:", error);
//     return [];
//   }
// };
// const getDealProducts = async () => {
//   try {
//     const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching deal Products:", error);
//     return [];
//   }
// };

// // ✅ --- THIS FUNCTION IS UPDATED ---
// // It uses the new PRODUCT_BY_SLUG_QUERY which gets everything (product + brand)
// const getProductBySlug = async (slug: string) => {
//   try {
//     const product = await sanityFetch({
//       query: PRODUCT_BY_SLUG_QUERY, // Using the new query
//       params: {
//         slug,
//       },
//     });
//     return product?.data || null;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     return null;
//   }
// };

// // ❗️ --- THIS FUNCTION IS NO LONGER NEEDED ---
// // We can remove it, as getProductBySlug now gets the brand info.
// /*
// const getBrand = async (slug: string) => {
//   try {
//     const product = await sanityFetch({
//       query: BRAND_QUERY,
//       params: {
//         slug,
//       },
//     });
//     return product?.data || null;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     return null;
//   }
// };
// */

// const getMyOrders = async (userId: string) => {
//   try {
//     const orders = await sanityFetch({
//       query: MY_ORDERS_QUERY,
//       params: { userId },
//     });
//     return orders?.data || null;
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     return null;
//   }
// };
// const getAllBlogs = async (quantity: number) => {
//   try {
//     const { data } = await sanityFetch({
//       query: GET_ALL_BLOG,
//       params: { quantity },
//     });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching all brands:", error);
//     return [];
//   }
// };

// const getSingleBlog = async (slug: string) => {
//   try {
//     const { data } = await sanityFetch({
//       query: SINGLE_BLOG_QUERY,
//       params: { slug },
//     });
//     return data ?? null;
//   } catch (error) {
//     console.log("Error fetching all brands:", error);
//     return null;
//   }
// };
// const getBlogCategories = async () => {
//   try {
//     const { data } = await sanityFetch({
//       query: BLOG_CATEGORIES,
//     });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching all brands:", error);
//     return [];
//   }
// };

// const getOthersBlog = async (slug: string, quantity: number) => {
//   try {
//     const { data } = await sanityFetch({
//       query: OTHERS_BLOG_QUERY,
//       params: { slug, quantity },
//     });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching all brands:", error);
//     return [];
//   }
// };

// const getHomeBanner = async () => {
//   try {
//     const { data } = await sanityFetch({
//       query: HOME_BANNER_QUERY,
//     });
//     return data ?? null;
//   } catch (error) {
//     console.log("Error fetching Home Banner:", error);
//     return null;
//   }
// };

// // 🎥 Fetch Video Blogs Only
// const getVideoBlogs = async (limit?: number) => {
//   try {
//     const { data } = await sanityFetch({
//       query: VIDEO_BLOG_QUERY,
//     });

//     return limit ? data?.slice(0, limit) : data ?? [];
//   } catch (error) {
//     console.log("Error fetching video blogs:", error);
//     return [];
//   }
// };


// export {
//   getCategories,
//   getAllNurseries,
//   getLatestBlogs,
//   getDealProducts,
//   getProductBySlug, // ✅ UPDATED
//   // getBrand, // ❗️ REMOVED
//   getMyOrders,
//   getAllBlogs,
//   getSingleBlog,
//   getBlogCategories,
//   getOthersBlog,
//   getHomeBanner,
//   getVideoBlogs,
// };



import { sanityFetch } from "../lib/live";
import {
  BLOG_CATEGORIES,
  NURSERY_QUERY,
  DEAL_PRODUCTS,
  GET_ALL_BLOG,
  LATEST_BLOG_QUERY,
  MY_ORDERS_QUERY,
  OTHERS_BLOG_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  SINGLE_BLOG_QUERY,
  NURSERY_BY_SLUG_QUERY,
  HOME_BANNER_QUERY,
  VIDEO_BLOG_QUERY,
} from "./query";

// ... [Keep getCategories and getAllNurseries as they are] ...
export const getCategories = async (quantity?: number) => {
  try {
    const query = quantity
      ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`
      : `*[_type == 'category'] | order(name asc) {
          ...,
          "productCount": count(*[_type == "product" && references(^._id)])
        }`;
    const { data } = await sanityFetch({
      query,
      params: quantity ? { quantity } : {},
    });
    return data;
  } catch (error) {
    console.log("Error fetching categories", error);
    return [];
  }
};

export const getAllNurseries = async () => {
  try {
    const { data } = await sanityFetch({ query: NURSERY_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all Nursery:", error);
    return [];
  }
};

// ✅ FIX 1: Add Guard Clause for Slug
export const getNurseryBySlugQuery = async (slug: string) => {
  if (!slug) return null; // <--- Prevents the crash
  try {
    const nursery = await sanityFetch({
      query: NURSERY_BY_SLUG_QUERY,
      params: { slug },
    });
    return nursery?.data || null;
  } catch (error) {
    console.error("Error fetching nursery by Slug:", error);
    return null;
  }
};

export const getLatestBlogs = async () => {
  try {
    const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching latest Blogs:", error);
    return [];
  }
};

export const getDealProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching deal Products:", error);
    return [];
  }
};

// ✅ FIX 2: Add Guard Clause
export const getProductBySlug = async (slug: string) => {
  if (!slug) return null; 
  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY,
      params: { slug },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by Slug:", error);
    return null;
  }
};

export const getMyOrders = async (userId: string) => {
  if (!userId) return null;
  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });
    return orders?.data || null;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null;
  }
};

export const getAllBlogs = async (quantity: number) => {
  try {
    const { data } = await sanityFetch({
      query: GET_ALL_BLOG,
      params: { quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all blogs:", error);
    return [];
  }
};

// ✅ FIX 3: Add Guard Clause
export const getSingleBlog = async (slug: string) => {
  if (!slug) return null;
  try {
    const { data } = await sanityFetch({
      query: SINGLE_BLOG_QUERY,
      params: { slug },
    });
    return data ?? null;
  } catch (error) {
    console.log("Error fetching single blog:", error);
    return null;
  }
};

export const getBlogCategories = async () => {
  try {
    const { data } = await sanityFetch({
      query: BLOG_CATEGORIES,
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching blog categories:", error);
    return [];
  }
};

// ✅ FIX 4: Add Guard Clause
export const getOthersBlog = async (slug: string, quantity: number) => {
  if (!slug) return [];
  try {
    const { data } = await sanityFetch({
      query: OTHERS_BLOG_QUERY,
      params: { slug, quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching other blogs:", error);
    return [];
  }
};

export const getHomeBanner = async () => {
  try {
    const { data } = await sanityFetch({
      query: HOME_BANNER_QUERY,
    });
    return data ?? null;
  } catch (error) {
    console.log("Error fetching Home Banner:", error);
    return null;
  }
};

export const getVideoBlogs = async (limit?: number) => {
  try {
    const { data } = await sanityFetch({
      query: VIDEO_BLOG_QUERY,
    });
    return limit ? data?.slice(0, limit) : data ?? [];
  } catch (error) {
    console.log("Error fetching video blogs:", error);
    return [];
  }
};

