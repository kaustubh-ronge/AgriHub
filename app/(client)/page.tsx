// import Container from "@/components/Container";
// import HomeBanner from "@/components/HomeBanner";
// import HomeCategories from "@/components/HomeCategories";
// import LatestBlog from "@/components/LatestBlog";
// import ProductGrid from "@/components/ProductGrid";
// import ShopByNurseries from "@/components/ShopByNurseries";
// import VideoBlogSection from "@/components/VideoBlogSection";

// import { getCategories } from "@/sanity/queries";
// import { getHomeBanner } from "@/sanity/queries";
// import { getVideoBlogs } from "@/sanity/queries";

// export default async function HomePage() {
//   const banner = await getHomeBanner();
//   const categories = await getCategories(6);
//   const videoBlogs = await getVideoBlogs(6);

//   return (
//     <Container className="bg-shop-light-pink">
//       {banner && <HomeBanner banner={banner} />}

//       <ProductGrid />
//       <HomeCategories categories={categories} />
//       <ShopByNurseries />
//       {/* <VideoBlogSection videoBlogs={videoBlogs} /> */}
//       <LatestBlog />
//     </Container>
//   );
// }


import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByNurseries from "@/components/ShopByNurseries";
import VideoBlogSection from "@/components/VideoBlogSection";
import HomeBlogCategories from "@/components/HomeBlogCategories"; // Import the new component

import { getCategories } from "@/sanity/queries";
import { getHomeBanner } from "@/sanity/queries";
import { getVideoBlogs } from "@/sanity/queries";
import { getAllBlogCategories } from "@/sanity/queries"; // Import the fetch function

export default async function HomePage() {
  // Fetch existing data
  const banner = await getHomeBanner();
  const categories = await getCategories(6);
  const videoBlogs = await getVideoBlogs(6);
  
  // Fetch new Blog Categories
  const blogCategories = await getAllBlogCategories();

  return (
    <Container className="bg-shop-light-pink">
      {banner && <HomeBanner banner={banner} />}

      <ProductGrid />
      
      {/* Product Categories */}
      <HomeCategories categories={categories} />
      
      {/* Blog Categories Section (Inserted here) */}
      <HomeBlogCategories categories={blogCategories} />

      <ShopByNurseries />
      <VideoBlogSection videoBlogs={videoBlogs} />
      <LatestBlog />
    </Container>
  );
}