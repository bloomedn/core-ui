/** @jsxImportSource theme-ui */
import classes from './styles.module.css'

export default function Section({ children, sx, ...props }) {
    return (
        <section sx={{ ...sx, ...styles.baseSection }} className={classes.section} {...props}>
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
                    pl: [null, null, null, null, 6],
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
        my: [6, null, null, 8],
        "&:first-of-type": {
            my: [5, null, null, 5],
            bg: "red",
        },
    },
};

export {SectionContent} from './content'
