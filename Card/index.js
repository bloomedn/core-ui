/** @jsxImportSource theme-ui */

export default function Card({ children, sx, ...props }) {
  const baseStyles = {
    bg: "white",
    py: 4,
    px: 4,
    boxShadow: "lightTransparent",
    borderRadius: "base",
    "&:hover": {
      borderColor: "transparent",
      boxShadow: "light",
    },
  };
  return (
    <div sx={{ ...baseStyles, ...sx }} {...props}>
      {children}
    </div>
  );
}
