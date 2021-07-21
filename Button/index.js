/** @jsxImportSource theme-ui */
export default function Button({
    children,
    variant = "secondary",
    sx,
    ...props
}) {
    const stylesBase = {
        fontSize: [3],
        cursor: "pointer",
        borderRadius: "base",
        border: 0,
        color: "background",
        px: [5],
        py: [3],
        boxShadow: "base",
        "&:hover": {
            borderColor: "transparent",
            boxShadow: "none",
        },
    };
    let stylesVariants;
    switch (variant) {
        case "primary":
            stylesVariants = { bg: "primary" };
            break;
        case "primary-disabled":
            stylesVariants = { bg: "darkGray", cursor: "not-allowed" };
            break;
        case "secondary":
            stylesVariants = {
                color: "primary",
                border: "1px solid",
                borderColor: "primary",
            };
            break;
        case "secondary-disabled":
            stylesVariants = {
                color: "primary",
                border: "1px solid",
                borderColor: "primary",
                cursor: "not-allowed",
                textShadow: "small",
            };
            break;
        case "upload":
            stylesVariants = { bg: "lightPrimary" };
            break;
        case "upload-disabled":
            stylesVariants = { bg: "lightPrimary", cursor: "not-allowed" };
            break;
        case "primary-small":
            stylesVariants = {
                bg: "primary",
                py: [1],
                textAlign: "left",
            };
            break;
        case "primary-xs":
            stylesVariants = {
                bg: "primary",
                py: [1],
                textAlign: "left",
                fontSize: [1],
            };
            break;
        default:
    }
    return (
        <button sx={{ ...stylesBase, ...stylesVariants, ...sx }} {...props}>
            {children}
        </button>
    );
}
