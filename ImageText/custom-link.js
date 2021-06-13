/** @jsxImportSource theme-ui */

export function CustomLink({ children }) {
    return (
        <div sx={{ mt: [5], ...styles.link }}>
            <span sx={{ ...styles.fakeButton }} className="fakeButton">
                .
            </span>
           {children}
        </div>
    );
}

const styles = {
    link: {
        fontSize: 3,
        cursor: "pointer",
        display: "inline-block",
        borderRadius: "full",
        py: [1],
        color: "primary",
        pr: [3],
        "&:hover": {
            bg: "lightPrimary",
        },
    },
    fakeButton: {
        px: [3],
        bg: "lightPrimary",
        color: "lightPrimary",
        borderRadius: "full",
        mr: [-3],
    },
};
