/** @jsxImportSource theme-ui */
import Heading from "remote/core-ui/Heading";

export function TextSection({ title, children }) {
    return (
        <div sx={{ py: [6, null, null, 7], ...styles.textSection }}>
            <Heading as="h2" sx={{ my: [3] }}>
                {title}
            </Heading>
            {children}
        </div>
    );
}

const styles = {
    textSection: {},
};
