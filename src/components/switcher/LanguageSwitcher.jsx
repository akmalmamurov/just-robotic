import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div>
      <button
        onClick={() => i18n.changeLanguage('ru')}
        disabled={i18n.language === 'ru'}
      >
        Русский
      </button>
      <button
        onClick={() => i18n.changeLanguage('uz')}
        disabled={i18n.language === 'uz'}
      >
        O‘zbekcha
      </button>
    </div>
  );
}
