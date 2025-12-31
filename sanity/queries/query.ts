

// import { defineQuery } from "next-sanity";

// export const NURSERY_QUERY = defineQuery(`*[_type=='nursery'] | order(name asc) `);

// export const GET_ALL_BLOG = defineQuery(
//   `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
//       ...,
//       _id,
//       title,
//       slug,
//       publishedAt,
//       mainImage,
//       "directVideoUrl": directVideo.asset->url,
//       "videoGalleryUrls": videoGallery[].asset->url,
//       socialLinks,
//       mediaType,
//       socialVideoUrl,
//       autoPlay,
//       blogcategories[]->{ title },
//       author->{ name, image }
//     }`
// );

// export const SINGLE_BLOG_QUERY = defineQuery(
//   `*[_type == "blog" && slug.current == $slug][0]{
//     ..., 
//     "directVideoUrl": directVideo.asset->url,
//     "videoGalleryUrls": videoGallery[].asset->url,
//     socialLinks[]{ title, url },
//     mediaType,
//     youtubeUrl,
//     instagramUrl,
//     facebookUrl,
//     autoPlay,
//     author->{ name, image },
//     blogcategories[]->{
//       title,
//       "slug": slug.current,
//       description,
//       promoImage,
//       "promoVideoUrl": promoVideo.asset->url,
//       videoPoster
//     }
//   }`
// );

// export const LATEST_BLOG_QUERY = defineQuery(
//   ` *[_type == 'blog' && isLatest == true]|order(name asc){
//       ...,
//       blogcategories[]->{ title }
//     }`
// );

// export const DEAL_PRODUCTS = defineQuery(
//   `*[_type == 'product' && status == 'hot'] | order(name asc){
//     ...,"categories": categories[]->title
//   }`
// );

// export const NURSERY_BY_SLUG_QUERY = defineQuery(`
//   *[_type == "nursery" && slug.current == $slug][0] {
//     ...,
//     _id,
//     title,
//     description,
//     address,
//     phoneNumber,
//     email,
//     rating,
//     "slug": slug.current, 
//     "image": image.asset->url, 
//     "products": *[_type == "product" && references(^._id)] | order(name asc) {
//       _id,
//       name,
//       price,
//       discount,
//       stock,
//       "slug": slug.current,
//       images,
//       description,
//       productVariant
//     }
//   }
// `);

// export const PRODUCT_BY_SLUG_QUERY = defineQuery(
//   `*[_type == "product" && slug.current == $slug][0]{
//     ..., 
//     nursery->, 
//     categories[]->{title, "slug": slug.current}, 
//     "plantBreedData": plantBreedData->,
//     "fertilizerFormulaData": fertilizerFormulaData->, 
//     seedingDate,            
//     trayPlantCount,         
//     trayPrice,              
//     transplantDeadlineDays, 
//     relatedProducts[]->{ 
//       name,
//       "slug": slug.current,
//       images,
//       price,
//       discount,
//       shortDescription
//     }
//   }`
// );

// export const NURSERY_QUERY_BY_PRODUCT = defineQuery(`*[_type == "product" && slug.current == $slug]{
//   "nurseryName": nursery->title
//  }`);

// export const MY_ORDERS_QUERY = defineQuery(`
//   *[_type == 'order' && clerkUserId == $userId] | order(orderDate desc){
//     ...,
//     "products": products[]{
//       ...,
//       product->
//     }
//   }
// `);

// export const BLOG_CATEGORIES = defineQuery(
//   `*[_type == "blog"]{
//       blogcategories[]->{ ... }
//   }`
// );

// export const OTHERS_BLOG_QUERY = defineQuery(`*[
//   _type == "blog"
//   && defined(slug.current)
//   && slug.current != $slug
// ]|order(publishedAt desc)[0...$quantity]{
//   ...,
//   publishedAt,
//   title,
//   mainImage,
//   slug,
//   author->{ name, image },
//   blogcategories[]->{ title, "slug": slug.current }
// }`);

// export const HOME_BANNER_QUERY = defineQuery(`
//   *[_type == "homeBanner"][0]{
//     title,
//     subtitle,
//     ctaText,
//     ctaLink,
//     mediaType,
//     bannerImage,
//     bannerVideo{
//       asset->{ url }
//     },
//     autoPlay,
//     showAnimation,
//     ownerName
//   }
// `);

// export const VIDEO_BLOG_QUERY = defineQuery(`
//   *[
//     _type == "blog"
//     && defined(directVideo) 
//   ] | order(publishedAt desc){
//     _id,
//     title,
//     slug,
//     publishedAt,
//     "videoUrl": directVideo.asset->url,
//     videoPoster,
//     blogcategories[]->{
//       title,
//       "slug": slug.current
//     }
//   }
// `);

// // --- NEW QUERIES ADDED BELOW ---

// // 1. Fetch all Blog Categories explicitly for the Homepage Grid
// export const ALL_BLOG_CATEGORIES_QUERY = defineQuery(`
//   *[_type == "blogcategory"] | order(title asc) {
//     _id,
//     title,
//     "slug": slug.current,
//     description,
//     promoImage
//   }
// `);

// // 2. Fetch Blogs filtered by specific Category Slug
// export const BLOGS_BY_CATEGORY_QUERY = defineQuery(`
//   *[_type == "blog" && defined(blogcategories) && $slug in blogcategories[]->slug.current] | order(publishedAt desc) {
//     _id,
//     title,
//     slug,
//     publishedAt,
//     mainImage,
//     "directVideoUrl": directVideo.asset->url,
//     "videoGalleryUrls": videoGallery[].asset->url,
//     socialLinks,
//     blogcategories[]->{ title, "slug": slug.current }
//   }
// `);


import { defineQuery } from "next-sanity";

export const NURSERY_QUERY = defineQuery(`*[_type=='nursery'] | order(name asc) `);

export const GET_ALL_BLOG = defineQuery(
  `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
      ...,
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      "directVideoUrl": directVideo.asset->url,
      "videoGalleryUrls": videoGallery[].asset->url,
      socialLinks,
      blogcategories[]->{ title },
      author->{ name, image }
    }`
);

export const SINGLE_BLOG_QUERY = defineQuery(
  `*[_type == "blog" && slug.current == $slug][0]{
    ..., 
    "directVideoUrl": directVideo.asset->url,
    "videoGalleryUrls": videoGallery[].asset->url,
    socialLinks[]{ title, url },
    author->{ name, image },
    blogcategories[]->{
      title,
      "slug": slug.current,
      description,
      promoImage,
      "promoVideoUrl": promoVideo.asset->url,
      videoPoster
    }
  }`
);

export const LATEST_BLOG_QUERY = defineQuery(
  ` *[_type == 'blog' && isLatest == true]|order(name asc){
      ...,
      blogcategories[]->{ title }
    }`
);

export const DEAL_PRODUCTS = defineQuery(
  `*[_type == 'product' && status == 'hot'] | order(name asc){
    ...,"categories": categories[]->title
  }`
);

export const NURSERY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "nursery" && slug.current == $slug][0] {
    ...,
    _id,
    title,
    description,
    address,
    phoneNumber,
    email,
    rating,
    "slug": slug.current, 
    "image": image.asset->url, 
    "products": *[_type == "product" && references(^._id)] | order(name asc) {
      _id,
      name,
      price,
      discount,
      stock,
      "slug": slug.current,
      images,
      description,
      productVariant
    }
  }
`);

export const PRODUCT_BY_SLUG_QUERY = defineQuery(
  `*[_type == "product" && slug.current == $slug][0]{
    ..., 
    nursery->, 
    categories[]->{title, "slug": slug.current}, 
    "plantBreedData": plantBreedData->,
    "fertilizerFormulaData": fertilizerFormulaData->, 
    seedingDate,            
    trayPlantCount,         
    trayPrice,              
    transplantDeadlineDays, 
    relatedProducts[]->{ 
      name,
      "slug": slug.current,
      images,
      price,
      discount,
      shortDescription
    }
  }`
);

export const NURSERY_QUERY_BY_PRODUCT = defineQuery(`*[_type == "product" && slug.current == $slug]{
  "nurseryName": nursery->title
 }`);

export const MY_ORDERS_QUERY = defineQuery(`
  *[_type == 'order' && clerkUserId == $userId] | order(orderDate desc){
    ...,
    "products": products[]{
      ...,
      product->
    }
  }
`);

export const BLOG_CATEGORIES = defineQuery(
  `*[_type == "blog"]{
      blogcategories[]->{ ... }
  }`
);

export const OTHERS_BLOG_QUERY = defineQuery(`*[
  _type == "blog"
  && defined(slug.current)
  && slug.current != $slug
]|order(publishedAt desc)[0...$quantity]{
  ...,
  publishedAt,
  title,
  mainImage,
  slug,
  author->{ name, image },
  blogcategories[]->{ title, "slug": slug.current }
}`);

export const HOME_BANNER_QUERY = defineQuery(`
  *[_type == "homeBanner"][0]{
    title,
    subtitle,
    ctaText,
    ctaLink,
    mediaType,
    bannerImage,
    bannerVideo{
      asset->{ url }
    },
    autoPlay,
    showAnimation,
    ownerName
  }
`);

export const VIDEO_BLOG_QUERY = defineQuery(`
  *[
    _type == "blog"
    && defined(directVideo) 
  ] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    "videoUrl": directVideo.asset->url,
    videoPoster,
    blogcategories[]->{
      title,
      "slug": slug.current
    }
  }
`);

// --- NEW QUERIES ADDED BELOW ---

export const ALL_BLOG_CATEGORIES_QUERY = defineQuery(`
  *[_type == "blogcategory"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description,
    promoImage
  }
`);

export const BLOGS_BY_CATEGORY_QUERY = defineQuery(`
  *[_type == "blog" && defined(blogcategories) && $slug in blogcategories[]->slug.current] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "directVideoUrl": directVideo.asset->url,
    "videoGalleryUrls": videoGallery[].asset->url,
    socialLinks,
    blogcategories[]->{ title, "slug": slug.current }
  }
`);