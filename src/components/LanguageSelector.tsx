import { useState, useEffect } from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    // Keep state in sync with i18n language
    const onLanguageChanged = (lng: string) => setLanguage(lng);
    i18n.on('languageChanged', onLanguageChanged);
    return () => i18n.off('languageChanged', onLanguageChanged);
  }, []);
  return (
    <div className="flex justify-end mb-4">
      <select
        value={language}
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        <option value="es"> {t('lang_es')}</option>
        <option value="en"> {t('lang_en')}</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
