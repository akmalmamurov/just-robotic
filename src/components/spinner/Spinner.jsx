import { motion } from 'framer-motion';

const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: {
      repeat: Infinity,
      duration: 1,
      ease: 'linear',
    },
  },
};

export const Spinner = ({t}) => {
  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-8 h-8 border-4 border-black border-t-transparent rounded-full"
        variants={spinnerVariants}
        animate="animate"
      />
      <span className="ml-2 text-black font-medium">{t("loading")}</span>
    </div>
  );
};

export default Spinner;
