// // // 'use client';

// // // import { Button } from "@/components/ui/button";
// // // import { motion } from "framer-motion";
// // // import { Language } from "@/types/chatbot";

// // // const containerVariants = {
// // //   hidden: { opacity: 0 },
// // //   visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
// // // };
// // // const itemVariants = {
// // //   hidden: { opacity: 0, y: 20 },
// // //   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
// // // };

// // // interface LanguageSelectionProps {
// // //   onSelect: (language: Language) => void;
// // // }

// // // export default function LanguageSelection({ onSelect }: LanguageSelectionProps) {
// // //   return (
// // //     <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center justify-center h-full text-center p-4">
// // //       <motion.h2 variants={itemVariants} className="text-lg font-semibold text-gray-800">
// // //         Welcome to Agri Mitra
// // //       </motion.h2>
// // //       <motion.p variants={itemVariants} className="mt-2 text-sm text-gray-600">
// // //         Please select your preferred language.
// // //       </motion.p>
// // //       <motion.div variants={itemVariants} className="mt-6 flex flex-col gap-3 w-full max-w-xs">
// // //         <Button onClick={() => onSelect('english')} className="w-full" variant="outline">English</Button>
// // //         <Button onClick={() => onSelect('marathi')} className="w-full" variant="outline">मराठी</Button>
// // //         <Button onClick={() => onSelect('hindi')} className="w-full" variant="outline">हिंदी</Button>
// // //       </motion.div>
// // //     </motion.div>
// // //   );
// // // }

// // 'use client';

// // import { motion } from "framer-motion";
// // import { Language } from "@/types/chatbot";

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 10 },
// //   visible: { opacity: 1, y: 0 },
// // };

// // interface LanguageSelectionProps {
// //   onSelect: (language: Language) => void;
// // }

// // export default function LanguageSelection({ onSelect }: LanguageSelectionProps) {
// //   return (
// //     <motion.div 
// //       variants={containerVariants} 
// //       initial="hidden" 
// //       animate="visible" 
// //       className="flex flex-col items-center justify-center h-full p-6 text-center space-y-6"
// //     >
// //       <div className="space-y-2">
// //         <motion.div variants={itemVariants} className="text-4xl">🌱</motion.div>
// //         <motion.h2 variants={itemVariants} className="text-xl font-bold text-gray-800">
// //           Agri Mitra / एग्री मित्र
// //         </motion.h2>
// //         <motion.p variants={itemVariants} className="text-sm text-gray-500">
// //           Choose your language to start <br/> आपली भाषा निवडा / अपनी भाषा चुनें
// //         </motion.p>
// //       </div>

// //       <motion.div variants={itemVariants} className="grid grid-cols-1 gap-3 w-full">
// //         {[
// //           { id: 'english', label: 'English', sub: 'Hello' },
// //           { id: 'marathi', label: 'मराठी', sub: 'नमस्कार' },
// //           { id: 'hindi', label: 'हिंदी', sub: 'नमस्ते' }
// //         ].map((lang) => (
// //           <button
// //             key={lang.id}
// //             onClick={() => onSelect(lang.id as Language)}
// //             className="group relative flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all duration-200 text-left"
// //           >
// //             <div>
// //               <span className="block font-semibold text-gray-800 group-hover:text-green-700">{lang.label}</span>
// //               <span className="text-xs text-gray-400">{lang.sub}</span>
// //             </div>
// //             <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-green-500 group-hover:bg-green-50 flex items-center justify-center">
// //               <div className="w-2.5 h-2.5 rounded-full bg-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
// //             </div>
// //           </button>
// //         ))}
// //       </motion.div>
// //     </motion.div>
// //   );
// // }

// 'use client';

// import { motion } from "framer-motion";
// import { Language } from "@/types/chatbot";

// interface LanguageSelectionProps {
//   onSelect: (language: Language) => void;
// }

// export default function LanguageSelection({ onSelect }: LanguageSelectionProps) {
//   return (
//     <div className="flex flex-col items-center justify-center h-full p-6 text-center">
//       <motion.div 
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="w-full max-w-[280px] space-y-6"
//       >
//         <div className="space-y-2">
//             <h2 className="text-xl font-bold text-gray-800">Welcome 👋</h2>
//             <p className="text-sm text-gray-500">
//             Please select your preferred language
//             </p>
//         </div>

//         <div className="grid gap-3">
//             {[
//             { id: 'english', label: 'English' },
//             { id: 'marathi', label: 'मराठी' },
//             { id: 'hindi', label: 'हिंदी' }
//             ].map((lang, i) => (
//             <motion.button
//                 key={lang.id}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 onClick={() => onSelect(lang.id as Language)}
//                 className="w-full py-3.5 px-6 bg-white hover:bg-emerald-50 border border-gray-200 hover:border-emerald-500 rounded-xl transition-all duration-200 text-sm font-semibold text-gray-700 hover:text-emerald-700 hover:shadow-md flex items-center justify-between group"
//             >
//                 {lang.label}
//                 <span className="w-2 h-2 rounded-full bg-gray-200 group-hover:bg-emerald-500 transition-colors"></span>
//             </motion.button>
//             ))}
//         </div>
//       </motion.div>
//     </div>
//   );

// }


'use client';

import { motion } from "framer-motion";
import { Language } from "@/types/chatbot";

interface LanguageSelectionProps {
  onSelect: (language: Language) => void;
}

export default function LanguageSelection({ onSelect }: LanguageSelectionProps) {
  const languages = [
    { id: 'english', label: 'English', sub: 'Chat in English' },
    { id: 'marathi', label: 'मराठी', sub: 'मराठीत बोला' },
    { id: 'hindi', label: 'हिंदी', sub: 'हिंदी में बात करें' }
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2 mb-8"
      >
        <span className="text-4xl">👋</span>
        <h2 className="text-xl font-bold text-gray-800">Welcome to Agri Mitra</h2>
        <p className="text-sm text-gray-500">Please select your preferred language</p>
      </motion.div>

      <div className="grid gap-3 w-full max-w-[280px]">
        {languages.map((lang, i) => (
          <motion.button
            key={lang.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => onSelect(lang.id as Language)}
            className="group relative flex items-center justify-between w-full p-4 bg-white hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-left"
          >
            <div>
              <span className="block font-semibold text-gray-700 group-hover:text-emerald-700 transition-colors">
                {lang.label}
              </span>
              <span className="text-xs text-gray-400 group-hover:text-emerald-500/70 transition-colors">
                {lang.sub}
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
              <div className="w-2.5 h-2.5 rounded-full bg-gray-300 group-hover:bg-emerald-500 transition-colors" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}