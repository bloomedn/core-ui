/** @jsxImportSource theme-ui */
import classes from "./styles.module.css";

export default function Section({
    children,
    miniMargin = false,
    sx,
    ...props
}) {
    return (
        <section
            sx={{
                ...sx,
                ...styles.baseSection,
                ...(miniMargin && styles.miniMargin),
            }}
            className={classes.section}
            {...props}
        >
            <div sx={{ ...styles.children }}>{children}</div>
        </section>
    );
}

export function RightFullSection({ children, sx, ...props }) {
    return (
        <section sx={{ ...sx }} {...props}>
            <div
                sx={{
                    ...styles.children,
                    maxWidth: "9999px",
                    pr: [0, 0, 0, 0, 0],
                    pl: [4, 5, null, null, 6],
                }}
            >
                {children}
            </div>
        </section>
    );
}

const styles = {
    children: {
        maxWidth: "1380px",
        mx: ["auto"],
        px: [4, 5, null, null, 4],
    },
    baseSection: {
        my: [5, null, null, 7],
        py: [5, null, null, 6],
        "&:first-of-type": {
            my: [5, null, null, 5],
        },
    },
    miniMargin: {
        my: [5, null, null, -5],
        py: [5, null, null, 4],
    },
};

export { SectionContent } from "./content";
