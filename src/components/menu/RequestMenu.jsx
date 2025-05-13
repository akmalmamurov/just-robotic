import { requestData } from "../../data/robo-data";
import { motion, AnimatePresence } from "framer-motion";

const dropdownVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top center",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top center",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const RequestMenu = ({ open, setOpen, setSelected, t, selected }) => {
  const handleClick = (item) => {
    setSelected(item);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="absolute w-full rounded-[9px] mt-2 bg-white shadow-md overflow-hidden origin-top"
          initial="closed"
          animate="open"
          exit="closed"
          variants={dropdownVariants}
        >
          {requestData
            .filter((item) => item.key !== selected)
            .map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleClick(item.key)}
                className="w-full text-xl px-5 py-4 text-left bg-white hover:bg-dhuserGray/40 group border-b border-dhuserGray last:border-none"
              >
                {t(item.key)}
              </button>
            ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RequestMenu;
