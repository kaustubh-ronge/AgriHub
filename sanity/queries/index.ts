
// import { sanityFetch } from "../lib/live";
// import {
//   BLOG_CATEGORIES,
//   NURSERY_QUERY,
//   DEAL_PRODUCTS,
//   GET_ALL_BLOG,
//   LATEST_BLOG_QUERY,
//   MY_ORDERS_QUERY,
//   OTHERS_BLOG_QUERY,
//   PRODUCT_BY_SLUG_QUERY,
//   SINGLE_BLOG_QUERY,
//   NURSERY_BY_SLUG_QUERY,
//   HOME_BANNER_QUERY,
//   VIDEO_BLOG_QUERY,
// } from "./query";

// export const getCategories = async (quantity?: number) => {
//   try {
//     const query = quantity
//       ? `*[_type == 'category'] | order(name asc) [0...$quantity] {
//           ...,
//           "productCount": count(*[_type == "product" && references(^._id)])
//         }`
//       : `*[_type == 'category'] | order(name asc) {
//           ...,
//           "productCount": count(*[_type == "product" && references(^._id)])
//         }`;
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

// export const getAllNurseries = async () => {
//   try {
//     const { data } = await sanityFetch({ query: NURSERY_QUERY });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching all Nursery:", error);
//     return [];
//   }
// };

// // ✅ HELPER: Fetches a single nursery by slug
// export const getNurseryBySlug = async (slug: string) => {
//   if (!slug) return null;
//   try {
//     const nursery = await sanityFetch({
//       query: NURSERY_BY_SLUG_QUERY,
//       params: { slug },
//     });
//     return nursery?.data || null;
//   } catch (error) {
//     console.error("Error fetching nursery by Slug:", error);
//     return null;
//   }
// };

// export const getLatestBlogs = async () => {
//   try {
//     const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching latest Blogs:", error);
//     return [];
//   }
// };

// export const getDealProducts = async () => {
//   try {
//     const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching deal Products:", error);
//     return [];
//   }
// };

// export const getProductBySlug = async (slug: string) => {
//   if (!slug) return null; 
//   try {
//     const product = await sanityFetch({
//       query: PRODUCT_BY_SLUG_QUERY,
//       params: { slug },
//     });
//     return product?.data || null;
//   } catch (error) {
//     console.error("Error fetching product by Slug:", error);
//     return null;
//   }
// };

// export const getMyOrders = async (userId: string) => {
//   if (!userId) return null;
//   try {
//     const orders = await sanityFetch({
//       query: MY_ORDERS_QUERY,
//       params: { userId },
//     });
//     return orders?.data || null;
//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     return null;
//   }
// };

// export const getAllBlogs = async (quantity: number) => {
//   try {
//     const { data } = await sanityFetch({
//       query: GET_ALL_BLOG,
//       params: { quantity },
//     });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching all blogs:", error);
//     return [];
//   }
// };

// export const getSingleBlog = async (slug: string) => {
//   if (!slug) return null;
//   try {
//     const { data } = await sanityFetch({
//       query: SINGLE_BLOG_QUERY,
//       params: { slug },
//     });
//     return data ?? null;
//   } catch (error) {
//     console.log("Error fetching single blog:", error);
//     return null;
//   }
// };

// export const getBlogCategories = async () => {
//   try {
//     const { data } = await sanityFetch({
//       query: BLOG_CATEGORIES,
//     });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching blog categories:", error);
//     return [];
//   }
// };

// export const getOthersBlog = async (slug: string, quantity: number) => {
//   if (!slug) return [];
//   try {
//     const { data } = await sanityFetch({
//       query: OTHERS_BLOG_QUERY,
//       params: { slug, quantity },
//     });
//     return data ?? [];
//   } catch (error) {
//     console.log("Error fetching other blogs:", error);
//     return [];
//   }
// };

// export const getHomeBanner = async () => {
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

// export const getVideoBlogs = async (limit?: number) => {
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
  ALL_BLOG_CATEGORIES_QUERY, // Imported new query
  BLOGS_BY_CATEGORY_QUERY,   // Imported new query
} from "./query";

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

export const getNurseryBySlug = async (slug: string) => {
  if (!slug) return null;
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

// --- NEW FUNCTIONS ADDED BELOW ---

export const getAllBlogCategories = async () => {
  try {
    const { data } = await sanityFetch({
      query: ALL_BLOG_CATEGORIES_QUERY,
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching ALL blog categories:", error);
    return [];
  }
};

export const getBlogsByCategory = async (slug: string) => {
  if (!slug) return [];
  try {
    const { data } = await sanityFetch({
      query: BLOGS_BY_CATEGORY_QUERY,
      params: { slug },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching blogs by category:", error);
    return [];
  }
};