/** @jsxImportSource theme-ui */
export default function Card({ children, sx, ...props }) {
    const baseStyles = {
        bg: 'lightGray',
        py: 4,
        px: 4, 
        boxShadow: 'light',
        borderRadius: "base",
        "&:hover": {
            borderColor: "transparent",
            boxShadow: "lightTransparent",
        },
    };
    return (
        <div sx={{ ...baseStyles, ...sx }} {...props}>
            {children}
        </div>
    );
}
