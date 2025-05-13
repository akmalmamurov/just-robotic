export const formatPhone = (value) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const parts = [
    digits.slice(0, 2),
    digits.slice(2, 5),
    digits.slice(5, 7),
    digits.slice(7, 9),
  ].filter(Boolean);
  return parts.join(" ");
};
