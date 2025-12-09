
import { sanityFetch } from "../lib/live";
import {
  BLOG_CATEGORIES,
  // BRAND_QUERY, // ❗️ No longer needed for product page
  NURSERY_QUERY,
  DEAL_PRODUCTS,
  GET_ALL_BLOG,
  LATEST_BLOG_QUERY,
  MY_ORDERS_QUERY,
  OTHERS_BLOG_QUERY,
  PRODUCT_BY_SLUG_QUERY, // ✅ This is the new, powerful query
  SINGLE_BLOG_QUERY,
  NURSERY_BY_SLUG_QUERY,
} from "./query";

const getCategories = async (quantity?: number) => {
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

const getAllNurseries = async () => {
  try {
    const { data } = await sanityFetch({ query: NURSERY_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all Nursery:", error);
    return [];
  }
};

export const getNurseryBySlug = async (slug: string) => {
  try {
    const nursery = await sanityFetch({
      query: NURSERY_BY_SLUG_QUERY,
      params: {
        slug,
      },
    });
    return nursery?.data || null;
  } catch (error) {
    console.error("Error fetching nursery by Slug:", error);
    return null;
  }
};

// Fetch a single nursery by its slug
export const getNurseryBySlugQuery = `
  *[_type == "nursery" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    description,
    "image": image.asset->url,
    address,
    phoneNumber,
    email,
    rating,
    "products": *[_type == "product" && references(^._id)] {
      _id,
      title,
      price,
      "image": image.asset->url,
      slug
    }
  }
`;

const getLatestBlogs = async () => {
  try {
    const { data } = await sanityFetch({ query: LATEST_BLOG_QUERY });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching latest Blogs:", error);
    return [];
  }
};
const getDealProducts = async () => {
  try {
    const { data } = await sanityFetch({ query: DEAL_PRODUCTS });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching deal Products:", error);
    return [];
  }
};

// ✅ --- THIS FUNCTION IS UPDATED ---
// It uses the new PRODUCT_BY_SLUG_QUERY which gets everything (product + brand)
const getProductBySlug = async (slug: string) => {
  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_SLUG_QUERY, // Using the new query
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};

// ❗️ --- THIS FUNCTION IS NO LONGER NEEDED ---
// We can remove it, as getProductBySlug now gets the brand info.
/*
const getBrand = async (slug: string) => {
  try {
    const product = await sanityFetch({
      query: BRAND_QUERY,
      params: {
        slug,
      },
    });
    return product?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};
*/

const getMyOrders = async (userId: string) => {
  try {
    const orders = await sanityFetch({
      query: MY_ORDERS_QUERY,
      params: { userId },
    });
    return orders?.data || null;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return null;
  }
};
const getAllBlogs = async (quantity: number) => {
  try {
    const { data } = await sanityFetch({
      query: GET_ALL_BLOG,
      params: { quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

const getSingleBlog = async (slug: string) => {
  try {
    const { data } = await sanityFetch({
      query: SINGLE_BLOG_QUERY,
      params: { slug },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};
const getBlogCategories = async () => {
  try {
    const { data } = await sanityFetch({
      query: BLOG_CATEGORIES,
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};

const getOthersBlog = async (slug: string, quantity: number) => {
  try {
    const { data } = await sanityFetch({
      query: OTHERS_BLOG_QUERY,
      params: { slug, quantity },
    });
    return data ?? [];
  } catch (error) {
    console.log("Error fetching all brands:", error);
    return [];
  }
};
export {
  getCategories,
  getAllNurseries,
  getLatestBlogs,
  getDealProducts,
  getProductBySlug, // ✅ UPDATED
  // getBrand, // ❗️ REMOVED
  getMyOrders,
  getAllBlogs,
  getSingleBlog,
  getBlogCategories,
  getOthersBlog,
};
