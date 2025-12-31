
// import { defineQuery } from "next-sanity";

// const NURSERY_QUERY = defineQuery(`*[_type=='nursery'] | order(name asc) `);

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

// // ✅ FIX: Removed 'export' here because it is exported at the bottom
// const NURSERY_BY_SLUG_QUERY = defineQuery(`
//   *[_type == "nursery" && slug.current == $slug][0] {
//     ...,
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

// const PRODUCT_BY_SLUG_QUERY = defineQuery(
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

// const NURSERY_QUERY_BY_PRODUCT = defineQuery(`*[_type == "product" && slug.current == $slug]{
//   "nurseryName": nursery->title
//  }`);

// // ✅ UPDATED: Fetching Orders cleanly
// const MY_ORDERS_QUERY = defineQuery(`
//   *[_type == 'order' && clerkUserId == $userId] | order(orderDate desc){
//     ...,
//     "products": products[]{
//       ...,
//       product->
//     }
//   }
// `);

// const GET_ALL_BLOG = defineQuery(
//   `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
//   ...,  
//   _id,
//   title,
//   slug,
//   publishedAt,
//   mainImage,
//   mediaType,         
//   socialVideoUrl,    
//   autoPlay,          
//       blogcategories[]->{
//     title
//   }
//     author->{
//     name,
//     image
//   }
//     }
//   `
// );


//  // Add this inside your SINGLE_BLOG_QUERY definition
//  const SINGLE_BLOG_QUERY = defineQuery(`
//   *[_type == "blog" && slug.current == $slug][0]{
//     ..., 
//     "directVideoUrl": directVideo.asset->url,
//     "videoGalleryUrls": videoGallery[].asset->url,

//     // ✅ FETCH THE LINKS
//     socialLinks[]{
//       title,
//       url
//     },

//     // Legacy fields
//     youtubeUrl,
//     instagramUrl,
//     facebookUrl,

//     author->{ name, image },
//     blogcategories[]->{ ... }
//   }
// `);



// const BLOG_CATEGORIES = defineQuery(
//   `*[_type == "blog"]{
//       blogcategories[]->{
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




// const HOME_BANNER_QUERY = defineQuery(`
//   *[_type == "homeBanner"][0]{
//     title,
//     subtitle,
//     ctaText,
//     ctaLink,
//     mediaType,
//     bannerImage,
//     bannerVideo{
//       asset->{
//         url
//       }
//     },
//     autoPlay,
//     showAnimation,
//     ownerName
//   }
// `);

// // 🎥 VIDEO BLOGS ONLY (For Home Page & Reels)
// const VIDEO_BLOG_QUERY = defineQuery(`
//   *[
//     _type == "blog"
//     && mediaType == "video"
//   ] | order(publishedAt desc){
//     _id,
//     title,
//     slug,
//     publishedAt,
//     mediaType,
//     socialVideoUrl,
//     autoPlay,
//     blogVideo{
//       asset->{
//         url
//       }
//     },
//     videoPoster,
//     blogcategories[]->{
//       title,
//       "slug": slug.current
//     }
//   }
// `);

// // ✅ Export everything together at the bottom
// export {
//   NURSERY_QUERY,
//   LATEST_BLOG_QUERY,
//   DEAL_PRODUCTS,
//   PRODUCT_BY_SLUG_QUERY,
//   NURSERY_QUERY_BY_PRODUCT,
//   MY_ORDERS_QUERY,
//   GET_ALL_BLOG,
//   SINGLE_BLOG_QUERY,
//   BLOG_CATEGORIES,
//   OTHERS_BLOG_QUERY,
//   NURSERY_BY_SLUG_QUERY,
//   HOME_BANNER_QUERY,
//   VIDEO_BLOG_QUERY,
// };

import { defineQuery } from "next-sanity";

export const NURSERY_QUERY = defineQuery(`*[_type=='nursery'] | order(name asc) `);

// ✅ FIX: Added missing commas and new fields
export const GET_ALL_BLOG = defineQuery(
  `*[_type == 'blog'] | order(publishedAt desc)[0...$quantity]{
      ...,
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      
      // Fetch new fields for listing page indicators
      "directVideoUrl": directVideo.asset->url,
      "videoGalleryUrls": videoGallery[].asset->url,
      socialLinks,

      // Legacy fields
      mediaType,
      socialVideoUrl,
      autoPlay,

      blogcategories[]->{
        title
      }, // <--- THIS COMMA WAS MISSING
      
      author->{
        name,
        image
      }
    }`
);

export const SINGLE_BLOG_QUERY = defineQuery(
  `*[_type == "blog" && slug.current == $slug][0]{
    ..., 
    "directVideoUrl": directVideo.asset->url,
    
    // ✅ Fetch Video Gallery URLs
    "videoGalleryUrls": videoGallery[].asset->url,

    // ✅ Fetch Social Links
    socialLinks[]{
      title,
      url
    },

    // Legacy support
    mediaType,
    youtubeUrl,
    instagramUrl,
    facebookUrl,
    autoPlay,

    author->{
      name,
      image,
    },
    blogcategories[]->{
      title,
      "slug": slug.current,
      description,
      // No promotionType check needed anymore as we fetch everything
      promoImage,
      "promoVideoUrl": promoVideo.asset->url,
      videoPoster,
    },
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
      asset->{
        url
      }
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