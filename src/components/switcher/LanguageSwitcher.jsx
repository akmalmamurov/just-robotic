import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const btnBase = "w-14 h-10 lg:w-20 lg:h-[52px] rounded-[14px] flex justify-center items-center transition-colors duration-300";
  const active  = "text-white bg-goldenYellow";
  const inactive= "text-white bg-transparent  hover:bg-goldenYellow hover:text-white";

  return (
    <div className="flex gap-2">
      {['ru','uz'].map((lng) => (
        <motion.button
          key={lng}
          onClick={() => i18n.changeLanguage(lng)}
          disabled={i18n.language === lng}
          className={`${btnBase} ${i18n.language === lng ? active : inactive}`}
          whileHover={{ scale: 1.05 }}
          whileTap ={{ scale: 0.95 }}
        >
          {lng.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
}
