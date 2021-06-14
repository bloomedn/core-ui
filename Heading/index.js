/** @jsxImportSource theme-ui */
import { Heading } from "theme-ui";

export default function HeadingDefault({ children, sx, ...props }) {
    return (
        <Heading sx={{ color: "text", ...sx }} {...props}>
            {children}
        </Heading>
    );
}

export function HeadingBase({ type, ...props }) {
    switch (type) {
        case "sectionHead":
            return (
                <HeadingDefault
                    as="h2"
                    sx={styles.sectionHead}
                    {...props}
                />
            );
        default:
            return <p>heading base without type</p>;
    }
}

const styles = {
    sectionHead: {
        fontSize: [6],
    },
};
