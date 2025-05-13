import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

export const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 370);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 right-10 z-[50]">
      <button
        onClick={scrollTop}
        className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-goldenYellow shadow-2xl shadow-goldenYellow text-2xl"
      >
        <FaChevronUp />
      </button>
    </div>
  );
};

export default ScrollTop;
