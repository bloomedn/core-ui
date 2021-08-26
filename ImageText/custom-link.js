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
        py: [2],
        color: "primary",
        "&:hover": {
            bg: "lightPrimary",
            px: [3],
        },
    },
    fakeButton: {
        borderRadius: '50%',
        fontSize: ['14px', null, null, 2],
        letterSpacings: '-0.15px',
        padding: ['14px'],
        pr: [5],
        fontFamily: 'body',
        cursor: 'pointer',
        lineHeight: 1.2,
        transition: 'all 0.25s',
        fontWeight: 500,
        bg: "lightPrimary",
        color: "lightPrimary",
        mr: [-7],
    },
};
