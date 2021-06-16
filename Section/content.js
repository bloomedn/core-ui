/** @jsxImportSource theme-ui */
export const SectionContent = ({ children }) => (
    <div sx={{ mt: [5], mb: [8], ...styles.content }}> {children}</div>
);

const styles = {
    content: {
        mt: [6],
        mb: [8],
        "p:first-of-type": {
            mt: [5],
        },
        p: {
            mt: [6],
        },
    },
};
