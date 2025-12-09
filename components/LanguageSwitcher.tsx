'use client';

import { useState } from 'react';
import { Languages, Check } from 'lucide-react'; // Import Check icon
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface Language {
  name: string;
  code: string;
}

const supportedLanguages: Language[] = [
  { name: "English", code: "en" },
  { name: "हिंदी", code: "hi" },
  { name: "मराठी", code: "mr" },
  { name: "ಕನ್ನಡ", code: "kn" },
  { name: "தமிழ்", code: "ta" },
  { name: "తెలుగు", code: "te" },
];

const LanguageSwitcher = () => {
  const [selectedLang, setSelectedLang] = useState("English");

  const handleLanguageChange = (langName: string, langCode: string) => {
    setSelectedLang(langName);
    if (window.changeGoogleTranslateLanguage) {
      window.changeGoogleTranslateLanguage(langCode);
    } else {
      console.error("Google Translate function not available.");
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
      <DropdownMenuContent align="end">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.name, lang.code)}
            // FIX: We now USE selectedLang here to style the active item
            className={`flex items-center justify-between gap-2 cursor-pointer ${
              selectedLang === lang.name ? "bg-green-50 text-green-700 font-semibold" : ""
            }`}
          >
            {lang.name}
            {/* Optional: Show a checkmark if selected */}
            {selectedLang === lang.name && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;