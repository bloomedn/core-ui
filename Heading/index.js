/** @jsxImportSource theme-ui */
export default function Heading({ children, sx, ...props }) {
    return (
        <h1 sx={{ color: "text", ...sx }} {...props}>
            {children}
        </h1>
    );
}
