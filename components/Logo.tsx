import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Logo = ({
  className,
  spanDesign,
}: {
  className?: string;
  spanDesign?: string;
}) => {
  return (
    <Link href="/" className="inline-flex items-center gap-2">
      {/* <Image
        src="/assets/logo.png" // ✅ FIXED PATH
        alt="BRC Logo"
        width={20}
        height={20}
        sizes="20px"
        className="rounded-md"
        priority
      /> */}

      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          className
        )}
      >
        B
        <span
          className={cn(
            "text-shop_light_green group-hover:text-shop_dark_green hoverEffect",
            spanDesign
          )}
        >
          RC
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
