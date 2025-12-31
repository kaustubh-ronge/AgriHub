// This declares custom properties on the global 'window' object for TypeScript.
interface GoogleTranslate {
  TranslateElement: new (options: { pageLanguage: string }, elementId: string) => void;
}

interface Window {
  google?: {
    translate: GoogleTranslate;
  };
  googleTranslateElementInit?: () => void;
  changeGoogleTranslateLanguage?: (langCode: string) => void;
}

declare module '*.css';