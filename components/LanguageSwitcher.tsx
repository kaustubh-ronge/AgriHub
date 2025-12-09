'use client';

import { useState } from 'react';
import { Languages } from 'lucide-react';
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

// CORRECTED: All languages are now included.
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
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLanguages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.name, lang.code)}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;