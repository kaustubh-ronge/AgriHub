// import { defineQuery } from "next-sanity";

// const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc) `);

// const LATEST_BLOG_QUERY = defineQuery(
//   ` *[_type == 'blog' && isLatest == true]|order(name asc){
//       ...,
//       blogcategories[]->{
//       title
//     }
//     }`
// );

// const DEAL_PRODUCTS = defineQuery(
//   `*[_type == 'product' && status == 'hot'] | order(name asc){
//     ...,"categories": categories[]->title
//   }`
// );

// const PRODUCT_BY_SLUG_QUERY = defineQuery(
//   `*[_type == "product" && slug.current == $slug] | order(name asc) [0]`
// );

// const BRAND_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug]{
//   "brandName": brand->title
//   }`);

// const MY_ORDERS_QUERY =
//   defineQuery(`*[_type == 'order' && clerkUserId == $userId] | order(orderData desc){
// ...,products[]{
//   ...,product->
// }
// }`);
// const GET_ALL_BLOG = defineQuery(
//   `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
//   ...,  
//      blogcategories[]->{
//     title
// }
//     }
//   `
// );

// const SINGLE_BLOG_QUERY =
//   defineQuery(`*[_type == "blog" && slug.current == $slug][0]{
//   ..., 
//     author->{
//     name,
//     image,
//   },
//   blogcategories[]->{
//     title,
//     "slug": slug.current,
//   },
// }`);

// const BLOG_CATEGORIES = defineQuery(
//   `*[_type == "blog"]{
//      blogcategories[]->{
//     ...
//     }
//   }`
// );

// const OTHERS_BLOG_QUERY = defineQuery(`*[
//   _type == "blog"
//   && defined(slug.current)
//   && slug.current != $slug
// ]|order(publishedAt desc)[0...$quantity]{
// ...
//   publishedAt,
//   title,
//   mainImage,
//   slug,
//   author->{
//     name,
//     image,
//   },
//   categories[]->{
//     title,
//     "slug": slug.current,
//   }
// }`);
// export {
//   BRANDS_QUERY,
//   LATEST_BLOG_QUERY,
//   DEAL_PRODUCTS,
//   PRODUCT_BY_SLUG_QUERY,
//   BRAND_QUERY,
//   MY_ORDERS_QUERY,
//   GET_ALL_BLOG,
//   SINGLE_BLOG_QUERY,
//   BLOG_CATEGORIES,
//   OTHERS_BLOG_QUERY,
// };


import { defineQuery } from "next-sanity";

const BRANDS_QUERY = defineQuery(`*[_type=='brand'] | order(name asc) `);

const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{
      title
    }
    }`
);

const DEAL_PRODUCTS = defineQuery(
  `*[_type == 'product' && status == 'hot'] | order(name asc){
    ...,"categories": categories[]->title
  }`
);

// ✅ --- THIS IS THE UPDATED QUERY ---
// It now fetches ALL fields (...) and expands the 'brand' and 'relatedProducts'
const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]{
    ..., // <-- This is the most important part! Fetches all new agri-fields
    brand->, // <-- Gets all the brand information (title, logo, etc.)
    categories[]->{title, "slug": slug.current}, // <-- Expands all categories
    relatedProducts[]->{ // <-- Expands related products for "you may also like"
      name,
      "slug": slug.current,
      images,
      price,
      discount,
      shortDescription
    }
  }`
);

// ❗️ --- THIS QUERY IS NO LONGER NEEDED FOR THE PRODUCT PAGE ---
const BRAND_QUERY = defineQuery(`*[_type == "product" && slug.current == $slug]{
  "brandName": brand->title
  }`);

const MY_ORDERS_QUERY =
  defineQuery(`*[_type == 'order' && clerkUserId == $userId] | order(orderData desc){
...,products[]{
  ...,product->
}
}`);
const GET_ALL_BLOG = defineQuery(
  `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
  ...,  
     blogcategories[]->{
    title
}
    }
  `
);

const SINGLE_BLOG_QUERY =
  defineQuery(`*[_type == "blog" && slug.current == $slug][0]{
  ..., 
    author->{
    name,
    image,
  },
  blogcategories[]->{
    title,
    "slug": slug.current,
  },
}`);

const BLOG_CATEGORIES = defineQuery(
  `*[_type == "blog"]{
     blogcategories[]->{
    ...
    }
  }`
);

const OTHERS_BLOG_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
  && slug.current != $slug
]|order(publishedAt desc)[0...$quantity]{
...
  publishedAt,
  title,
  mainImage,
  slug,
  author->{
    name,
    image,
  },
  categories[]->{
    title,
    "slug": slug.current,
  }
}`);
export {
  BRANDS_QUERY,
  LATEST_BLOG_QUERY,
  DEAL_PRODUCTS,
  PRODUCT_BY_SLUG_QUERY, // ✅ UPDATED
  BRAND_QUERY,
  MY_ORDERS_QUERY,
  GET_ALL_BLOG,
  SINGLE_BLOG_QUERY,
  BLOG_CATEGORIES,
  OTHERS_BLOG_QUERY,
};