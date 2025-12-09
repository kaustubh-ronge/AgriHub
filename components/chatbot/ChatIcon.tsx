// // 'use client';

// // import { useState, useEffect } from 'react';
// // import { MessageSquare } from 'lucide-react';
// // import { AnimatePresence, motion } from 'framer-motion';

// // const messages = [
// //   "Click to Chat",
// //   "Need help with crops?",
// //   "शेतकरी मित्र! मदत हवी आहे का?",
// //   "Ask about seeds & fertilizers!",
// //   "Track your order!",
// //   "Your farming assistant."
// // ];

// // interface ChatIconProps {
// //   onClick: () => void;
// //   isOpen: boolean;
// // }

// // export default function ChatIcon({ onClick, isOpen }: ChatIconProps) {
// //   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

// //   useEffect(() => {
// //     if (!isOpen) {
// //       const interval = setInterval(() => {
// //         setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
// //       }, 5000);
// //       return () => clearInterval(interval);
// //     }
// //   }, [isOpen]);

// //   return (
// //     <motion.div
// //       initial={{ scale: 0, y: 100, opacity: 0 }}
// //       animate={{ scale: 1, y: 0, opacity: 1 }}
// //       transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.8 }}
// //       className="relative"
// //     >
// //       {!isOpen && (
// //         <AnimatePresence>
// //           <motion.div
// //             key={currentMessageIndex}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: -20 }}
// //             transition={{ duration: 0.5 }}
// //             className="absolute bg-white text-gray-800 p-2 px-4 rounded-lg shadow-md border text-sm whitespace-nowrap bottom-full mb-3 right-1/2 translate-x-1/2"
// //           >
// //             {messages[currentMessageIndex]}
// //             <div className="absolute w-3 h-3 bg-white rotate-45 border-r border-b top-full -translate-y-1/2 right-1/2 translate-x-1/2" />
// //           </motion.div>
// //         </AnimatePresence>
// //       )}

// //       <motion.button
// //         onClick={onClick}
// //         className="p-3 text-white bg-green-600 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-green-500 relative z-10"
// //         aria-label="Open chat"
// //         animate={{ scale: [1, 1.1, 1] }}
// //         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
// //         whileHover={{ rotate: [0, 5, -5, 0], scale: 1.15 }}
// //         whileTap={{ scale: 0.9 }}
// //       >
// //         <span className="absolute top-0 right-0 block h-3 w-3">
// //           <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
// //           <span className="relative inline-flex h-3 w-3 rounded-full bg-lime-400"></span>
// //         </span>
// //         <MessageSquare className="w-6 h-6" />
// //       </motion.button>
// //     </motion.div>
// //   );
// // }


// 'use client';

// import { MessageCircle } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// interface ChatIconProps {
//   onClick: () => void;
//   isOpen: boolean;
// }

// export default function ChatIcon({ onClick, isOpen }: ChatIconProps) {
//   return (
//     <AnimatePresence>
//       {!isOpen && (
//         <motion.button
//           initial={{ scale: 0, rotate: -45 }}
//           animate={{ scale: 1, rotate: 0 }}
//           exit={{ scale: 0, rotate: 45 }}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={onClick}
//           className="group relative flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full shadow-2xl hover:bg-emerald-700 transition-colors focus:outline-none"
//         >
//           {/* Subtle Pulse Effect */}
//           <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping group-hover:opacity-40"></span>
          
//           <MessageCircle className="w-7 h-7 fill-current" />
          
//           {/* Notification Dot */}
//           <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-red-500 border-2 border-white rounded-full"></span>
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// }

'use client';

import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatIconProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatIcon({ onClick, isOpen }: ChatIconProps) {
  return (
    <div className="relative group">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.4)] transition-shadow duration-300 focus:outline-none z-50"
          >
            {/* Pulsing Ring */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 animate-ping duration-1000"></span>
            
            <MessageCircle className="w-8 h-8 fill-current" />
            
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}