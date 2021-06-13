/** @jsxImportSource theme-ui */

export default function Section({ children, sx, ...props }) {
    return (
        <section sx={{ ...sx }} {...props}>
            <div sx={styles.children}>{children}</div>
        </section>
    );
}

const styles = {
    children: {
        maxWidth: "1280px",
        mx: ["auto"],
        px: [4, 5, null, null, 0],
    },
};
