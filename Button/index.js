/** @jsxImportSource theme-ui */
export default function Button({
    children,
    variant = "secondary",
    sx,
    ...props
}) {
    const stylesBase = {
        fontSize: 3,
        cursor: "pointer",
        borderRadius: "none",
        border: 0,
        color: "background",
        px: 4,
        py: 2,
    };
    let stylesVariants;
    switch (variant) {
        case 'primary':
            stylesVariants = { bg: "primary" };
        case "primary-disabled":
            stylesVariants = { bg: "darkGray", cursor: "disabled" };
        case "secondary":
            stylesVariants = {
                color: "primary",
                border: "1px solid",
                textShadow: "base",
            };
        case "upload":
            stylesVariants = { bg: "mutedPrimary" };
        case "upload-disabled":
            stylesVariants = { bg: "mutedPrimary", cursor: "disabled" };
        case "secondary-disabled":
            stylesVariants = {
                color: "primary",
                border: "1px solid",
                cursor: "disabled",
            };
    }
    return (
        <button sx={{ ...stylesBase, ...stylesVariants, ...sx }} {...props}>
            {children}
        </button>
    );
}
