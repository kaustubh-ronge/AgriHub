// 'use client';

// import { useState } from 'react';
// import { Languages, Check } from 'lucide-react'; // Import Check icon
// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger
// } from "@/components/ui/dropdown-menu";

// interface Language {
//   name: string;
//   code: string;
// }

// const supportedLanguages: Language[] = [
//   { name: "English", code: "en" },
//   { name: "हिंदी", code: "hi" },
//   { name: "मराठी", code: "mr" },
//   { name: "ಕನ್ನಡ", code: "kn" },
//   { name: "தமிழ்", code: "ta" },
//   { name: "తెలుగు", code: "te" },
// ];

// const LanguageSwitcher = () => {
//   // const [selectedLang, setSelectedLang] = useState("English");
//     const [selectedLang, setSelectedLang] = useState("मराठी");


//   const handleLanguageChange = (langName: string, langCode: string) => {
//     setSelectedLang(langName);
//     if (window.changeGoogleTranslateLanguage) {
//       window.changeGoogleTranslateLanguage(langCode);
//     } else {
//       console.error("Google Translate function not available.");
//     }
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="ghost" size="icon" className="text-lightColor hover:text-shop_light_green">
//           <Languages className="h-5 w-5" />
//           <span className="sr-only">Change Language</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end" >
//         {supportedLanguages.map((lang) => (
//           <DropdownMenuItem
//             key={lang.code}
//             onClick={() => handleLanguageChange(lang.name, lang.code)}
//             // FIX: We now USE selectedLang here to style the active item
//             className={`flex items-center justify-between gap-2 cursor-pointer ${
//               selectedLang === lang.name ? "bg-green-50 text-green-700 font-semibold" : ""
//             }`}
//           >
//             {lang.name}
//             {/* Optional: Show a checkmark if selected */}
//             {selectedLang === lang.name && <Check className="h-4 w-4" />}
//           </DropdownMenuItem>
//         ))}
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default LanguageSwitcher;

















'use client';

import { useState, useEffect } from 'react';
import { Languages, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const supportedLanguages = [
  { name: "English", code: "en" },
  { name: "हिंदी", code: "hi" },
  { name: "मराठी", code: "mr" },
  { name: "ಕನ್ನಡ", code: "kn" },
  { name: "தமிழ்", code: "ta" },
  { name: "తెలుగు", code: "te" },
];

const LanguageSwitcher = () => {
  const [selectedLangCode, setSelectedLangCode] = useState("mr"); // Default Marathi code

  useEffect(() => {
    // १. गुगल ट्रान्सलेट कुकी चेक करा
    const googTrans = document.cookie.split('; ').find(row => row.startsWith('googtrans='));
    
    if (googTrans) {
      const code = googTrans.split('/').pop();
      if (code) {
        setSelectedLangCode(code);
        // २. 'BajbalkarName' कॉम्पोनंटला अपडेट करण्यासाठी इव्हेंट फायर करा
        window.dispatchEvent(new CustomEvent('onLanguageChange', { detail: code }));
      }
    } else {
        // जर कुकी नसेल तर डिफॉल्ट 'mr' इव्हेंट फायर करा
        window.dispatchEvent(new CustomEvent('onLanguageChange', { detail: 'mr' }));
    }
  }, []);

  const handleLanguageChange = (langName: string, langCode: string) => {
    setSelectedLangCode(langCode);
    
    // ब्राउझरमध्ये इव्हेंट पाठवा जेणेकरून 'BajbalkarName' कॉम्पोनंटला समजेल की 'ळ' दाखवायचा की नाही
    const event = new CustomEvent('onLanguageChange', { detail: langCode });
    window.dispatchEvent(event);

    if (window.changeGoogleTranslateLanguage) {
      window.changeGoogleTranslateLanguage(langCode);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-lightColor hover:text-shop_light_green">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Change Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white border shadow-xl rounded-xl">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.name, lang.code)}
            className={`flex items-center justify-between gap-3 px-4 py-2 cursor-pointer transition-colors ${
              selectedLangCode === lang.code 
              ? "bg-green-50 text-green-700 font-bold" 
              : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {lang.name}
            {selectedLangCode === lang.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;