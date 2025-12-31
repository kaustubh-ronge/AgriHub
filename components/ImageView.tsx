// "use client";
// import {
//   internalGroqTypeReferenceTo,
//   SanityImageCrop,
//   SanityImageHotspot,
// } from "@/sanity.types";
// import { urlFor } from "@/sanity/lib/image";
// import { AnimatePresence, motion } from "motion/react";
// import Image from "next/image";
// import React, { useState } from "react";

// interface Props {
//   images?: Array<{
//     asset?: {
//       _ref: string;
//       _type: "reference";
//       _weak?: boolean;
//       [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
//     };
//     hotspot?: SanityImageHotspot;
//     crop?: SanityImageCrop;
//     _type: "image";
//     _key: string;
//   }>;
//   isStock?: number | undefined;
// }

// const ImageView = ({ images = [], isStock }: Props) => {
//   const [active, setActive] = useState(images[0]);
//   console.log(active);

//   return (
//     <div className="w-full md:w-1/2 space-y-2 md:space-y-4">
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={active?._key}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.5 }}
//           className="w-full max-h-[550px] min-h-[450px] border border-darkColor/10 rounded-md group overflow-hidden"
//         >
//           <Image
//             src={urlFor(active).url()}
//             alt="productImage"
//             width={700}
//             height={700}
//             priority
//             className={`w-full h-96 max-h-[550px] min-h-[500px] object-contain group-hover:scale-110 hoverEffect rounded-md ${
//               isStock === 0 ? "opacity-50" : ""
//             }`}
//           />
//         </motion.div>
//       </AnimatePresence>
//       <div className="grid grid-cols-6 gap-2 h-20 md:h-24">
//         {images?.map((image) => (
//           <button
//             key={image?._key}
//             onClick={() => setActive(image)}
//             className={`border rounded-md overflow-hidden ${active?._key === image?._key ? "border-darkColor opacity-100" : "opacity-80"}`}
//           >
//             <Image
//               src={urlFor(image).url()}
//               alt={`Thumbnail ${image._key}`}
//               width={100}
//               height={100}
//               className="w-full h-auto object-contain"
//             />
//           </button>
//         ))}
//       </div>
//       <p className="text-sm text-gray-600 mt-2 text-center">
//         {isStock === 0
//           ? "Out of stock (Currently unavailable)"
//           : "Actual plant image (same as nursery)"}
//       </p>

//     </div>
//   );
// };

// export default ImageView;











"use client";

import {
  internalGroqTypeReferenceTo,
  SanityImageCrop,
  SanityImageHotspot,
} from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  images?: Array<{
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
    _key: string;
  }>;
  stock?: number;
}

const ImageView = ({ images = [], stock }: Props) => {
  const [index, setIndex] = useState(0);
  const active = images[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      <div className="relative border rounded-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active._key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
            unoptimized
              src={urlFor(active).url()}
              alt="Product image"
              width={700}
              height={700}
              priority
              className={`w-full h-[480px] object-contain ${
                stock === 0 ? "opacity-50" : ""
              }`}
            />
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
            >
              <ChevronRight />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-6 gap-2">
        {images.map((img, i) => (
          <button
            key={img._key}
            onClick={() => setIndex(i)}
            className={`border rounded-md p-1 ${
              index === i ? "border-green-600" : "opacity-70"
            }`}
          >
            <Image
            unoptimized
              src={urlFor(img).url()}
              alt="thumb"
              width={80}
              height={80}
              className="object-contain"
            />
          </button>
        ))}
      </div>

      <p className="text-xs text-center text-gray-500">
        {stock === 0 ? "Out of stock" : "Actual product image"}
      </p>
    </div>
  );
};

export default ImageView;
