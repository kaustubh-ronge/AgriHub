// 'use client';
// import { useState, useEffect } from 'react';

// export const BajbalkarName = () => {
//   const [currentLang, setCurrentLang] = useState('mr');

//   useEffect(() => {
//     const handleLangUpdate = (e: any) => {
//       setCurrentLang(e.detail);
//     };
//     window.addEventListener('onLanguageChange', handleLangUpdate);
//     return () => window.removeEventListener('onLanguageChange', handleLangUpdate);
//   }, []);

//   // जर मराठी (mr) निवडले असेल, तर 'ळ' सह दाखवा आणि ट्रान्सलेट करू नका
//   if (currentLang === 'mr') {
//     return <span className="notranslate" translate="no"> बजबळकर </span>;
//   }

//   // इतर भाषांसाठी गुगल ट्रान्सलेटरला काम करू द्या
//   return <span>Bajbalkar</span>;
// };








'use client';
import { useState, useEffect } from 'react';

export const BajbalkarName = () => {
  // We initialize with 'mr' to match your default LanguageSwitcher state
  const [currentLang, setCurrentLang] = useState('mr');

  useEffect(() => {
    // Check if there is a saved language preference in session/local storage if you use one
    // Otherwise, the event listener handles the toggle
    const handleLangUpdate = (e: any) => {
      setCurrentLang(e.detail);
    };
    window.addEventListener('onLanguageChange', handleLangUpdate);
    return () => window.removeEventListener('onLanguageChange', handleLangUpdate);
  }, []);

  /**
   * BUG FIX LOGIC:
   * 1. If Marathi is selected: Show Marathi text with 'ळ' and block Google Translate.
   * 2. If ANY other language is selected: Return English text "Bajbalkar". 
   * Google Translate will then see "Bajbalkar" and translate it to 
   * the user's chosen language (Hindi, Kannada, etc.) automatically.
   */
  if (currentLang === 'mr') {
    return (
      <span className="notranslate" translate="no"> बजबळकर  </span>
    );
  }

  // For English, Hindi, Telugu, etc., return the English name.
  // Google Translate will translate "Bajbalkar" into those languages.
  return <span className="translate">Bajbalkar</span>;
};