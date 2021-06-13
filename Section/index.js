/** @jsxImportSource theme-ui */
import { Grid } from "theme-ui";

export default function Section({ children, sx, ...props }) {
    return (
        <section sx={{ ...sx }} {...props}>
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
};
