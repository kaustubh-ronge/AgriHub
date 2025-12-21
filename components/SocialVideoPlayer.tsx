// "use client";
// import React, { useState, useEffect } from "react";
// // Change the import to dynamic or use the 'any' cast if types are conflicting
// import ReactPlayer from "react-player/lazy"; 
// import { ExternalLink, Volume2, VolumeX } from "lucide-react";

// interface Props {
//   url: string;
//   autoPlay?: boolean;
// }

// const SocialVideoPlayer = ({ url, autoPlay = true }: Props) => {
//   const [hasWindow, setHasWindow] = useState(false);
//   const [muted, setMuted] = useState(true);

//   useEffect(() => {
//     setHasWindow(true);
//   }, []);

//   if (!hasWindow) {
//     return <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-md" />;
//   }

//   // Define player props to avoid the 'IntrinsicAttributes' error
//   const playerProps: any = {
//     url: url,
//     playing: autoPlay,
//     muted: muted,
//     width: "100%",
//     height: "100%",
//     loop: true,
//     playsinline: true,
//     config: {
//       youtube: {
//         playerVars: { 
//           autoplay: 1, 
//           mute: 1, 
//           rel: 0, 
//           modestbranding: 1 
//         }
//       }
//     }
//   };

//   return (
//     <div className="relative group rounded-md overflow-hidden bg-black aspect-video">
//       <ReactPlayer {...playerProps} />
      
//       {/* Overlay Controls */}
//       <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//         <button
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             setMuted(!muted);
//           }}
//           className="bg-black/60 backdrop-blur-md p-2 rounded-full text-white hover:bg-shop_dark_green transition-all"
//         >
//           {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//         </button>
//         <a
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={(e) => e.stopPropagation()}
//           className="bg-black/60 backdrop-blur-md p-2 rounded-full text-white hover:bg-shop_dark_green transition-all flex items-center gap-2 px-3 text-xs font-bold"
//         >
//           Watch <ExternalLink size={14} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialVideoPlayer;











// "use client";
// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import { ExternalLink, Volume2, VolumeX } from "lucide-react";

// // Cast the dynamic import to 'any' to stop the property 'url' does not exist error
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

// interface Props {
//   url: string;
//   autoPlay?: boolean;
// }

// const SocialVideoPlayer = ({ url, autoPlay = true }: Props) => {
//   const [hasWindow, setHasWindow] = useState(false);
//   const [muted, setMuted] = useState(true);

//   useEffect(() => {
//     setHasWindow(true);
//   }, []);

//   if (!hasWindow) {
//     return <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-md" />;
//   }

//   return (
//     <div className="relative group rounded-md overflow-hidden bg-black aspect-video">
//       <ReactPlayer
//         url={url}
//         playing={autoPlay}
//         muted={muted}
//         width="100%"
//         height="100%"
//         loop={true}
//         playsinline={true}
//         config={{
//           youtube: {
//             playerVars: { 
//               autoplay: 1, 
//               mute: 1, 
//               rel: 0, 
//               modestbranding: 1 
//             }
//           }
//         }}
//       />
      
//       {/* Overlay Controls */}
//       <div className="absolute bottom-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
//         <button
//           type="button"
//           onClick={(e: React.MouseEvent) => {
//             e.preventDefault();
//             e.stopPropagation();
//             setMuted(!muted);
//           }}
//           className="bg-black/60 backdrop-blur-md p-2 rounded-full text-white hover:bg-shop_dark_green transition-all"
//         >
//           {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
//         </button>
//         <a
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           onClick={(e) => e.stopPropagation()}
//           className="bg-black/60 backdrop-blur-md p-2 rounded-full text-white hover:bg-shop_dark_green transition-all flex items-center gap-2 px-3 text-xs font-bold"
//         >
//           Watch <ExternalLink size={14} />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default SocialVideoPlayer;















"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ExternalLink, Volume2, VolumeX } from "lucide-react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false }) as any;

interface Props {
  url: string;
  autoPlay?: boolean;
}

const SocialVideoPlayer = ({ url, autoPlay = true }: Props) => {
  const [hasWindow, setHasWindow] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    setHasWindow(true);
  }, []);

  if (!hasWindow) {
    return <div className="w-full aspect-video bg-gray-200 animate-pulse rounded-md" />;
  }

  return (
    <div className="relative group rounded-md overflow-hidden bg-black aspect-video shadow-lg">
      <ReactPlayer
        url={url}
        playing={autoPlay}
        muted={muted}
        width="100%"
        height="100%"
        loop={true}
        playsinline={true}
        config={{
          youtube: {
            playerVars: { autoplay: 1, mute: 1, rel: 0, modestbranding: 1 }
          }
        }}
      />
      
      {/* Mobile-Friendly Overlay Controls */}
      <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
        
        {/* Status Indicator: Sound Wave (Visible when unmuted) */}
        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
            <div className={`w-1 h-3 bg-shop_light_green rounded-full ${!muted ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.1s' }} />
            <div className={`w-1 h-5 bg-shop_light_green rounded-full ${!muted ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.2s' }} />
            <div className={`w-1 h-3 bg-shop_light_green rounded-full ${!muted ? 'animate-bounce' : ''}`} style={{ animationDelay: '0.3s' }} />
            <span className="text-[10px] text-white font-bold ml-1 uppercase">
                {muted ? "Muted" : "Live Audio"}
            </span>
        </div>

        <div className="flex items-center gap-2">
            {/* Mute/Unmute Toggle - Larger tap target for mobile */}
            <button
              type="button"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                setMuted(!muted);
              }}
              className="bg-shop_dark_green p-3 md:p-2 rounded-full text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
              aria-label={muted ? "Unmute" : "Mute"}
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>

            {/* Platform Link */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-white p-3 md:p-2 rounded-full text-darkColor shadow-xl hover:bg-shop_light_green hover:text-white transition-all"
            >
              <ExternalLink size={20} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default SocialVideoPlayer;

