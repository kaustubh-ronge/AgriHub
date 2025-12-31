import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/HomeCategories";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByNurseries from "@/components/ShopByNurseries";
import VideoBlogSection from "@/components/VideoBlogSection";

import { getCategories } from "@/sanity/queries";
import { getHomeBanner } from "@/sanity/queries";
import { getVideoBlogs } from "@/sanity/queries";

export default async function HomePage() {
  const banner = await getHomeBanner();
  const categories = await getCategories(6);
  const videoBlogs = await getVideoBlogs(6);

  return (
    <Container className="bg-shop-light-pink">
      {banner && <HomeBanner banner={banner} />}

      <ProductGrid />
      <HomeCategories categories={categories} />
      <ShopByNurseries />
      <VideoBlogSection videoBlogs={videoBlogs} />
      <LatestBlog />
    </Container>
  );
}
